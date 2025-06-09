<script>
	import toast from "svelte-5-french-toast";
	import { joinGame } from "./logic/joinGame.js";
	import { Checking } from "./logic/JoinGameData.svelte.js";
	import { on } from "svelte/events";
	import { onMount } from "svelte";
	
	let pin;
	let name;

	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const gamepin = urlParams.get('gamepin');
		if (gamepin) {
			pin = gamepin;
		}
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-7 shadow-lg"
	>
		<h1 class="m-[0] mb-3 text-5xl">Join a game here</h1>

		<input
			placeholder="Enter game pin"
			class="rounded-lg bg-gray-800 p-2 text-center text-white"
			bind:value={pin}
		/>

		<input
			placeholder="Enter your name"
			bind:value={name}
			class="rounded-lg bg-gray-800 p-2 text-center text-white"
		/>

		{#if Checking.v}
			<button
				class="mt-2 cursor-pointer rounded-full bg-gray-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
			>
				Checking if pin is valid...
			</button>
		{:else}
			<button
				class="mt-2 cursor-pointer rounded-full bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
				on:click={() => {
					if (!pin || !name) {
						toast.error("Please fill in the game pin and your name.");
					} else {
						joinGame(pin, name);
					}
				}}
			>
				Join game
			</button>{/if}
	</div>
</div>
