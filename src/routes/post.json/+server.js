import { json } from '@sveltejs/kit'
import { gql, GraphQLClient } from 'graphql-request'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ url }) {
  const graphcms = new GraphQLClient(
    import.meta.env.VITE_GRAPHCMS_URL,
    {
      headers: {},
    }
  )

  const gqlQuery = gql`
    query Posts {
      posts(last: ${url.searchParams.get('limit')}) {
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

  return json({ posts })
}
