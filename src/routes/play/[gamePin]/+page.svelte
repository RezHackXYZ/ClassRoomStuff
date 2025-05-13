<script>
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	export let data;
	const gamePin = data.gamePin;
	import { page } from '$app/stores';
	const name = $page.state?.name;

	let question = [];
	let Selected = null;
	let currentQuestion = 0;
	let isWait = true;
	let gameStatus = '';
	let players = [];

	onMount(async () => {
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
					if (payload.new.gameStatus != gameStatus) {
						if (payload.new.questions == 'completed') {
							goto(`/results/${gamePin}`, {
								state: {
									name
								}
							});
						} else {
							gameStatus = payload.new.gameStatus;
							isWait = false;
							Selected = null;
							currentQuestion = Number(gameStatus);
						}
					}
				}
			)
			.subscribe();

		const { data, error } = await supabase
			.from('games')
			.select('questions')
			.eq('gamePIN', Number(gamePin))
			.single();

		if (!error && data) {
			question = data.questions || [];
		}
	});

	async function SubmitAnswer() {
		isWait = true;

		const { data, error } = await supabase
			.from('games')
			.select('players')
			.eq('gamePIN', Number(gamePin))
			.single();
		players = data.players;

		if (question[currentQuestion].correctAnswer == Selected) {
			players.forEach((player) => {
				if (player.name == name) {
					player.score += 1;
				}
			});
			await supabase.from('games').update({ players: players }).eq('gamePIN', Number(gamePin));
		}

		const { data: data2 } = await supabase
			.from('games')
			.select('questions')
			.eq('gamePIN', Number(gamePin))
			.single();

		question = data2.questions;

		question[currentQuestion].playersCompelted++;
		console.log('Players Completed:', question[currentQuestion].playersCompelted);

		await supabase.from('games').update({ questions: question }).eq('gamePIN', Number(gamePin));
	}
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		<div class="mb-5 flex w-full items-center justify-center gap-3">
			<h3>Question {currentQuestion + 1} of {question.length}</h3>
			<div class="flex-1 rounded-full border-2 border-gray-600">
				<div
					class="h-4 rounded-full bg-green-600 transition-all duration-700"
					style="width: {(currentQuestion / question.length) * 100}%;"
				></div>
			</div>
		</div>
		{#if isWait != true}
			<h1 class="m-[0] text-center text-5xl">
				Q{currentQuestion + 1}. {question[currentQuestion].name}
			</h1>
			<div class="mt-5 grid grid-cols-2 gap-5 gap-x-3">
				{#each question[currentQuestion].answers as answer, index}
					<div class="flex">
						<input
							type="radio"
							id="O{index}"
							name="question"
							class="peer sr-only"
							value={index}
							bind:group={Selected}
						/>
						<label
							class="w-full cursor-pointer rounded-lg border-3 border-gray-600 bg-gray-600 pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:border-blue-600"
							for="O{index}">{answer}</label
						>
					</div>
				{/each}
			</div>
			{#if Selected != null}
				<button
					class="mt-4 cursor-pointer gap-0 rounded-lg bg-green-700 p-2 text-3xl transition-all hover:scale-110 hover:-rotate-10"
					onclick={SubmitAnswer}
					>submit answer
				</button>
			{:else}
				<button
					class="mt-4 cursor-pointer gap-0 rounded-lg bg-gray-700 p-2 text-3xl transition-all hover:scale-110"
					>select an answer to submit!
				</button>
			{/if}
		{:else}<h1 class="m-[0] text-center text-5xl">
				Please wait for everyone else to answer the question.
			</h1>{/if}
	</div>
</div>
