<script>
	import { onMount } from 'svelte';
	import { supabase } from '$lib/supabase';

	export let data;
	const gamePin = data.gamePin;

	let totalQuetions = 3;
	let currentQuestion = 0;

	let PeopleAwnseredQ = 2;
	let Totalplayers = 3;

	let questions = [];

	async function NewUpdate(question) {
		if (question[currentQuestion].playersCompelted == Totalplayers) {
			currentQuestion++;
			
			if (currentQuestion > questions.length) {
				await supabase
					.from('games')
					.update({ gameStatus: `completed` })
					.eq('gamePIN', Number(data.gamePin));
				goto(`/results/${gamePin}`);
			} else {
				await supabase
					.from('games')
					.update({ gameStatus: `${currentQuestion}` })
					.eq('gamePIN', Number(data.gamePin));
			}

			PeopleAwnseredQ = 0;
		} else {
			PeopleAwnseredQ = question[currentQuestion].playersCompelted;
		}
	}

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
					if (payload.new.questions != questions) {
						questions = payload.new.questions;
						currentQuestion = Number(payload.new.gameStatus);
						NewUpdate(questions);
					}
				}
			)
			.subscribe();

		const { data, error } = await supabase
			.from('games')
			.select('players')
			.eq('gamePIN', Number(gamePin))
			.single();

		Totalplayers = data.players.length;

		const { data: data2, error: error2 } = await supabase
			.from('games')
			.select('questions')
			.eq('gamePIN', Number(gamePin))
			.single();

		questions = data2.questions;
		totalQuetions = questions.length;

		currentQuestion = 0;
		await supabase
			.from('games')
			.update({ gameStatus: currentQuestion.toString() })
			.eq('gamePIN', Number(gamePin));
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		<h1 class="m-[0] text-7xl">HOSTING</h1>
		<div class="mt-1 mb-3 flex w-full flex-col rounded-2xl border-2 border-green-400 p-2">
			<h3>Question {currentQuestion + 1} of {totalQuetions} is beeing awnsered</h3>
			<div class="flex-1 rounded-full border-2 border-gray-600">
				<div
					class="h-4 rounded-full bg-green-600 transition-all duration-700"
					style="width: {(currentQuestion / totalQuetions) * 100}%;"
				></div>
			</div>
		</div>
		<div class="mt-1 mb-3 flex w-full flex-col rounded-2xl border-2 border-green-400 p-2">
			<h3>{PeopleAwnseredQ} out of {Totalplayers} have awnsered the quetion</h3>
			<div class="flex-1 rounded-full border-2 border-gray-600">
				<div
					class="h-4 rounded-full bg-green-600 transition-all duration-700"
					style="width: {(PeopleAwnseredQ / Totalplayers) * 100}%;"
				></div>
			</div>
		</div>
	</div>
</div>
