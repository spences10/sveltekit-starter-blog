/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async ({ fetch }) => {
	const res = await fetch('/post.json?limit=3');

	const { posts } = await res.json();

	return {
		posts
	};
};
