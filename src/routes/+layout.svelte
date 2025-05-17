<script>
	let { children } = $props();
</script>

<div class="h-full text-white">{@render children()}</div>

<style>
	@import 'tailwindcss';

	:root {
		background-color: black;
	}
</style>
