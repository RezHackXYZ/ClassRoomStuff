<script>
	import Keyboard from "./game/keyboard.svelte";
	import Display from "./game/display.svelte";
	import { onMount } from "svelte";
	import { handleKey } from "./logic.svelte.js";
	import Right from "./InfoAndSetings/main.svelte";

	onMount(() => {
		window.addEventListener("keydown", handleKey);
	});
</script>

<div id="root">
	<div id="left">
		<Display />
		<Keyboard />
	</div>
    <Right />
</div>

<style>
	#root {
        height: 90%;
		display: flex;
		margin: 0;
		font-family: "Sour Gummy", sans-serif;
		background-color: #121212;
		color: white;
	}

	#left {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		margin: 20px;
		margin-top: 5px;
		border: 2px solid #444;
		font-family: "JetBrains Mono", monospace;
	}
</style>
