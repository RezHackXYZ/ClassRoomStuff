<script>
	import { supabase } from "$lib/supabase";
	import { onMount } from "svelte";

	let gamePin;

	let playerID;
	let players = [];

	onMount(async () => {
		playerID = new URLSearchParams(new URL(window.location.href).search).get("playerID");
		gamePin = new URLSearchParams(new URL(window.location.href).search).get("gamepin");


		let { data: fetchedPlayers } = await supabase
			.from("players")
			.select("*")
			.eq("gameid", gamePin);

		players = fetchedPlayers.sort((a, b) => b.score - a.score);
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		<h1 class="mb-3 text-7xl font-bold text-white">Leaderboard</h1>

		{#each players as player, i}
			{#if player.id == playerID}
				<div class="flex w-full items-center justify-between rounded-lg bg-green-950 p-2">
					<div
						class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-500"
					>
						{i + 1}
					</div>

					<div class="w-20 text-white">{player.playername}</div>

					<div class="flex-1 rounded-full border-2 border-gray-600">
						<div
							class="flex h-6 items-center justify-center rounded-full bg-green-600 transition-all duration-700"
							style="width: {(player.score / players[0].score) * 100}%;"
						></div>
					</div>

					<div class="flex w-17 justify-end">{player.score} points</div>
				</div>
			{:else}
				<div class="flex w-full items-center justify-between rounded-lg bg-gray-800 p-2">
					<div
						class="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-500"
					>
						{i + 1}
					</div>

					<div class="w-20 text-white">{player.playername}</div>

					<div class="flex-1 rounded-full border-2 border-gray-600">
						<div
							class="flex h-6 items-center justify-center rounded-full bg-green-600 transition-all duration-700"
							style="width: {(player.score / players[0].score) * 100}%;"
						></div>
					</div>

					<div class="flex w-17 justify-end">{player.score} points</div>
				</div>
			{/if}
		{/each}

		<a href="/"
			><button
				class="mt-4 cursor-pointer rounded-full bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
			>
				Go back to the home page!
			</button></a
		>
	</div>
</div>
