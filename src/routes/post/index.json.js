import { gql, GraphQLClient } from 'graphql-request'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get({ query }) {
  const graphcms = new GraphQLClient(
    import.meta.env.VITE_GRAPHCMS_URL,
    {
      headers: {},
    }
  )

  const gqlQuery = gql`
    query Posts {
      posts {
        id
        title
        slug
        tags
        date
        excerpt
        author {
          name
          title
        }
      }
    }
  `

  const { posts } = await graphcms.request(gqlQuery)

  return {
    body: { posts },
  }
}
