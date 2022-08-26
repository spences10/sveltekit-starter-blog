export async function load({ params }) {
  const { slug } = params
  const { post } = await fetch(`/post/${slug}.json`).then(res =>
    res.json()
  )
  return {
    post,
  }
}
