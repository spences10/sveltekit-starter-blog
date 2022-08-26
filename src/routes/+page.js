export async function load({ fetch }) {
  const { posts } = await fetch('/post.json?limit=2').then(res =>
    res.json()
  )
  return {
    posts,
  }
}
