<script>
	export const prerender = true;
	import { Toaster } from "svelte-5-french-toast";
	let { children } = $props();
</script>

<Toaster />
<div class="h-full text-white bg-black font-[Sour_Gummy]">{@render children()}</div>

<style>
	@import "https://www.nerdfonts.com/assets/css/webfont.css";
	@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=JetBrains+Mono:wght@200&family=Sour+Gummy:wght@300&display=swap");
	@import "tailwindcss";
</style>
