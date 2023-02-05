/**
 * @type {import('@sveltejs/kit').Load}
 */
export const load = async ({ params }) => {
	const { slug } = params;
	const res = await fetch(`/post/${slug}.json`);

	const { post } = await res.json();

	return {
		post
	};
};
