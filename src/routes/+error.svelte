<script>
  import { page } from '$app/stores'
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<main class="prose prose-xl">
  <h1>{$page.status}</h1>
  <p>{$page.error.message}</p>
</main>
