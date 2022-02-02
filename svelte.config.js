/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
  },
}

export default config
