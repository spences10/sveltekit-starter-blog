<script>
	import Header from '$lib/header.svelte';
	import '../app.css';
</script>

<div class="container max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
	<Header />
	<slot />
</div>
