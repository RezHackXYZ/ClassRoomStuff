<script>
	let { children } = $props();
</script>

<div class="h-full text-white">{@render children()}</div>

<style>
	@import "https://www.nerdfonts.com/assets/css/webfont.css";
	@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap");
	@import "tailwindcss";

	:root {
		background-color: black;
		font-family: "Comfortaa", sans-serif;
		font-weight: 300;
	}
</style>
