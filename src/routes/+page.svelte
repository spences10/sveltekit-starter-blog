<script>
  import PageHead from '$lib/page-head.svelte'

  export let data
  let { posts } = data
</script>

<PageHead
  title="Home"
  description="An awesome blog about development with Svelte"
/>

<section class="text-gray-600 body-font overflow-hidden">
  <div class="container mx-auto">
    <div class="flex flex-wrap">
      {#each posts as post}
        <div
          class="p-12 mb-10 flex flex-col items-start w-full border rounded-xl shadow-xl"
        >
          <div>
            {#if post.tags}
              {#each post.tags as tag}
                <span
                  class="py-1 px-2 mr-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest"
                  >{tag}</span
                >
              {/each}
            {/if}
          </div>
          <h2
            class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4"
          >
            {post.title}
          </h2>
          <p class="leading-relaxed mb-8">
            {@html post.excerpt}
          </p>
          <div
            class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full"
          >
            <a
              href="/post/{post.slug}"
              class="text-indigo-500 inline-flex items-center"
              >Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <span
              class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>{Math.floor(Math.random() * 6) + 1}K
            </span>
            <span
              class="text-gray-400 inline-flex items-center leading-none text-sm"
            >
              <svg
                class="w-4 h-4 mr-1"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                />
              </svg>{Math.floor(Math.random() * 6) + 1}
            </span>
          </div>
          <a href="/" class="inline-flex items-center">
            <img
              alt="blog"
              src="https://dummyimage.com/104x104"
              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span class="flex-grow flex flex-col pl-4">
              <span class="title-font font-medium text-gray-900"
                >{post.author.name}</span
              >
              <span
                class="text-gray-400 text-xs tracking-widest mt-0.5"
                >{post.author.title}</span
              >
            </span>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
