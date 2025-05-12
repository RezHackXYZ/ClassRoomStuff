<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';

	export let data;
	const gamePin = data.gamePin;
	const name = $page.state?.name;

	let players = [];

	async function addPlayer() {
		const { data: gameData, error } = await supabase
			.from('games')
			.select('players')
			.eq('gamePIN', Number(gamePin))
			.maybeSingle();

		let updatedPlayers = gameData.players || [];

		const alreadyExists = updatedPlayers.some((p) => p.name === name);
		if (!alreadyExists) {
			updatedPlayers.push({ name: name, score: 0 });

			const { error: updateError } = await supabase
				.from('games')
				.update({ players: updatedPlayers })
				.eq('gamePIN', Number(gamePin));
		}
	}

	// Subscribe to realtime changes in players
	function subscribeToPlayers() {
		const channel = supabase
			.channel(`game-${gamePin}`)
			.on(
				'postgres_changes',
				{
					event: 'UPDATE',
					schema: 'public',
					table: 'games',
					filter: `gamePIN=eq.${gamePin}`
				},
				(payload) => {
					players = payload.new.players || [];
				}
			)
			.subscribe();
	}

	function subscribeToGameStatus() {
		supabase
			.channel(`status-${gamePin}`)
			.on(
				'postgres_changes',
				{
					event: 'UPDATE',
					schema: 'public',
					table: 'games',
					filter: `gamePIN=eq.${gamePin}`
				},
				(payload) => {
					if (payload.new.gameStatus === 'started') {
						goto(`/play/${gamePin}`, {
							state: {
								name
							}
						});
					}
				}
			)
			.subscribe();
	}
	onMount(async () => {
		await addPlayer();

		const { data: gameData } = await supabase
			.from('games')
			.select('players')
			.eq('gamePIN', Number(gamePin))
			.maybeSingle();

		if (gameData?.players) {
			players = gameData.players;
		}

		subscribeToPlayers();
		subscribeToGameStatus();
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		<h1 class="m-[0] text-9xl">PLAYING</h1>
		<h1 class="m-[0] text-7xl">Game Pin:</h1>
		<h1 class="m-[0] rounded-2xl bg-gray-700 pt-1.5 pr-2 pb-0 pl-2 font-mono text-5xl">
			{gamePin}
		</h1>
		<h1 class="m-[0] mt-10 text-6xl">Players Joined:</h1>
		<h1 class="m-[0] text-4xl text-gray-400">(Total Players: {players.length})</h1>
		<div class="mt-2 flex flex-wrap justify-center gap-2">
			{#each players as player}
				<span class="m-[0] rounded-xl bg-gray-700 pt-1 pr-2 pb-0 pl-2 font-mono text-3xl"
					>{player.name}</span
				>
			{/each}
		</div>
	</div>
</div>
