<script>
	import { supabase } from '$lib/supabase';
	import { goto } from '$app/navigation';
	let questions = $state([
		{
			name: '',
			answers: ['', '', '', ''],
			correctAnswer: undefined,
			playersCompelted: 0
		}
	]);

	async function startGame() {
		if (questions.some((q) => q.name === '')) return alert('Please fill all questions');
		if (questions.some((q) => q.answers.some((a) => a === ''))) return alert('Fill all options');
		if (questions.some((q) => q.correctAnswer === undefined))
			return alert('Select correct answers');

		const gamePin = Math.floor(Math.random() * 1000000)
			.toString()
			.padStart(6, '0');

		const { error } = await supabase.from('games').insert({
			gamePIN: gamePin,
			gameStatus: 'lobby',
			questions: $state.snapshot(questions),
			players: []
		});

		if (error) {
			alert('Failed to create game: ' + error.message + '\n\nPlease try again.');
			return;
		}

		goto('/host/' + gamePin);
	}
</script>

<div class="bg-grey-900 flex justify-center p-5">
	<div class="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg">
		<button
			onclick={() => {
				questions = [
					{
						name: 'Is hack club awesome?',
						answers: ['its ok', 'its the BEST place in the world', 'nahh its bad', 'Gu Gu Ga Ga'],
						correctAnswer: 1,
						playersCompelted: 0
					},
					{
						name: 'Who is the best programer in the world?',
						answers: ['Sundar Pichai', 'Bill Gates', 'RezHackXYZ', 'Elon musk'],
						correctAnswer: 2,
						playersCompelted: 0
					},
					{
						name: 'What was the 5/11 incident?',
						answers: [
							'mass pings of @/birds',
							'twin towers getting blasted by planes',
							'the opening ceremony of the store of 7/11 on the 5/11 date',
							'the opening ceremony of the competitor store of 7/11'
						],
						correctAnswer: 0,
						playersCompelted: 0
					}
				];
			}}
			class="-mt-5 mb-3 flex h-fit cursor-pointer items-center justify-center rounded-xl bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg
			>Use demo questions</button
		>
		{#each questions as question, i}
			<div class="flex items-center gap-3">
				<div
					class="mb-3 flex flex-col items-center justify-center gap-1 rounded-2xl bg-gray-600 p-2"
				>
					<div class="flex h-fit items-center gap-3">
						<h1 class="mt-2 mb-3 text-2xl">Q{i + 1}.</h1>
						<input
							type="text"
							bind:value={question.name}
							placeholder="Question {i + 1}"
							class="h-fit w-[500px] rounded-xl bg-gray-800 p-1 text-center text-2xl text-white"
						/><button
							onclick={() => {
								if (questions.length > 1) {
									if (
										confirm('Are you sure you want to delete this question? You cant undo this.')
									) {
										questions.splice(i, 1);
									}
								} else {
									alert('You need at least one question.');
								}
							}}
							class="flex h-fit cursor-pointer items-center justify-center rounded-xl bg-red-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								height="24px"
								viewBox="0 -960 960 960"
								width="24px"
								fill="#FFFFFF"
								><path
									d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
								/></svg
							>Delete question</button
						>
					</div>
					<div class="flex flex-col gap-2">
						{#each question.answers as answer, i2}
							<div class="flex items-center gap-2">
								<input
									type="radio"
									value={i2}
									name={i}
									bind:group={question.correctAnswer}
									class="input"
								/><input
									placeholder="Option {i2 + 1}"
									bind:value={question.answers[i2]}
									class="w-[500px] rounded-lg bg-gray-800 p-1 text-center text-white"
								/>
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/each}
		<div class="flex gap-3">
			<button
				onclick={() => {
					questions.push({
						name: '',
						answers: ['', '', '', ''],
						correctAnswer: undefined,
						playersCompelted: 0
					});
				}}
				class="flex h-fit cursor-pointer items-center justify-center rounded-xl bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg
				>New question</button
			>
			<button
				onclick={startGame}
				class="flex h-fit cursor-pointer items-center justify-center gap-1 rounded-xl bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#FFFFFF"
					><path
						d="M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"
					/></svg
				>Start Quiz</button
			>
		</div>
	</div>
</div>
