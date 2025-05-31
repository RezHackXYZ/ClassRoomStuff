<script>
	import Keyboard from "./game/keyboard.svelte";
	import Display from "./game/display.svelte";
	import { onMount } from "svelte";
	import { handleKey } from "./logic.svelte.js";
	import Right from "./InfoAndSetings/main.svelte";
	import { OpenTab } from "./InfoAndSetings/main.svelte";
	import { data } from "./logic.svelte";

	onMount(() => {
		window.addEventListener("keydown", handleKey);

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

<div id="nav">
	<div></div>
	<div>
		<button aria-label="Back to main menu" onclick={() => OpenTab("WordLength")}
			><span class="front"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#FFFFFF"
					><path
						d="M320-80 160-240l160-160 57 56-64 64h334l-63-64 56-56 160 160L640-80l-57-56 64-64H313l63 64-56 56ZM200-480v-400h80v400h-80Zm240 0v-400h80v400h-80Zm240 0v-400h80v400h-80Z"
					/></svg
				> Change word legnth
			</span></button
		>
		<button aria-label="Back to main menu" onclick={() => OpenTab("Stats")}
			><span class="front"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#FFFFFF"
					><path
						d="m105-399-65-47 200-320 120 140 160-260 120 180 135-214 65 47-198 314-119-179-152 247-121-141-145 233Zm475 159q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM784-80 676-188q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T400-340q0-75 52.5-127.5T580-520q75 0 127.5 52.5T760-340q0 26-7 50.5T732-244l108 108-56 56Z"
					/></svg
				> Stats
			</span></button
		>
	</div>
</div>
<div id="root">
	<div id="left">
		<Display />
		<Keyboard />
	</div>
	<Right />
</div>

<style>
	#nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #121212;
		color: white;
	}

	button {
		background: #292929;
		border-radius: 12px;
		border: none;
		margin: 10px;
		padding: 2px 0px;
		cursor: pointer;
		outline-offset: 4px;
		max-width: 400px;
	}
	button:hover .front {
		transform: translateY(-7px);
	}

	button:active .front {
		transform: translateY(-2px);
	}

	.front {
		display: flex;
		text-align: center;
		align-items: center;
		padding: 5px;
		border-radius: 12px;

		background: #4d4d4d;
		color: white;
		transform: translateY(-4px);
		transition: all 0.1s ease-in-out;
		font-family: "JetBrains Mono", monospace;
		font-size: 25px;
	}

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
	h1 {
		text-align: center;
		margin: 5px 0px;
		text-decoration: underline #444;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}

	span {
		font-size: 0.5em;
		text-decoration: none;
		color: #444;
	}
</style>
