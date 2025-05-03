<script>
	import Keyboard from "./keyboard.svelte";
	import Display from "./display.svelte";
	import { onMount } from "svelte";
	import { handleKey } from "./logic.svelte.js";

	onMount(() => {
		window.addEventListener("keydown", handleKey);
	});
</script>

<div id="root">
	<Display />
	<Keyboard />
</div>

<style>
	#root {
		width: 885px;
		height: calc(100% - 75px);
		border-radius: 20px;
		margin: 20px;
		margin-top: 5px;
		border: 2px solid #444;
		font-family: "JetBrains Mono", monospace;
	}
</style>
