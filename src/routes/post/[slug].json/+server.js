import { json } from '@sveltejs/kit'
import { gql, GraphQLClient } from 'graphql-request'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ params }) {
  const graphcms = new GraphQLClient(
    import.meta.env.VITE_GRAPHCMS_URL,
    {
      headers: {},
    }
  )
  const query = gql`
    query PostPageQuery($slug: String!) {
      post(where: { slug: $slug }) {
        title
        date
        content {
          html
        }
        tags
        author {
          name
          title
        }
      }
    }
  `

  const variables = {
    slug: params.slug,
  }

  const { post } = await graphcms.request(query, variables)

  return json({ post })
}
