<script>
	import Keyboard from "./game/keyboard.svelte";
	import Display from "./game/display.svelte";
	import { onMount } from "svelte";
	import { handleKey,jsConfetti } from "./logic.svelte.js";
	import Right from "./InfoAndSetings/main.svelte";
	import { OpenTab } from "./InfoAndSetings/main.svelte";
	import { data } from "./logic.svelte";

	import JSConfetti from "js-confetti";


	onMount(() => {
		window.addEventListener("keydown", handleKey);

		jsConfetti.v = new JSConfetti();

		data.value = JSON.parse(localStorage.getItem("WordleGamesData")) || {
			3: [],
			4: [],
			5: [],
			6: [],
			7: [],
			8: [],
			9: [],
			10: [],
		};
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
		height: 100%;
		display: flex;
		margin: 0;
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
	}

	span {
		font-size: 0.5em;
		text-decoration: none;
		color: #444;
	}
</style>
