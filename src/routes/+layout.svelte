<script>
	export const prerender = true;
	import { Toaster } from "svelte-5-french-toast";
	let { children } = $props();
</script>

<Toaster />
<div id="root">
	<div class="h-full text-white">{@render children()}</div>
</div>

<style>
	@import "https://www.nerdfonts.com/assets/css/webfont.css";
	@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=JetBrains+Mono:wght@200&family=Sour+Gummy:wght@300&display=swap");
	@import "tailwindcss";

	:root {
		background-color: black;
		font-family: "Comfortaa", sans-serif;
		font-weight: 300;
	}

	#root {
		height: 100%;
		margin: 0;
		font-family: "Sour Gummy", sans-serif;
	}

	#alert {
		position: fixed;
		top: 10px;
		color: white;
		left: 50%;
		transform: translate(-50%, 0);
		h1 {
			margin: 0;
			padding: 10px 20px;
			border-radius: 20px;
			font-family: "Sour Gummy", sans-serif;
		}
		.error {
			background-color: #830000;
		}
		.warning {
			background-color: #975b00;
		}
		.success {
			background-color: #006b00;
		}
	}
</style>
