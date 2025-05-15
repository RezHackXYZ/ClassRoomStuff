<script>
	import DeleteQuestion from '../buttons/DeleteQuestion.svelte';
	import Answers from './answers.svelte';
	import { questions } from '../../logic/GameCreateData.svelte.js';

	let props = $props();
	let index = props.index;
</script>

<div class="flex items-center gap-3">
	<div class="mb-3 flex flex-col items-center justify-center gap-1 rounded-2xl bg-gray-600 p-2">
		<div class="flex h-fit items-center gap-3">
			<h1 class="mt-2 mb-3 text-2xl">Q{index + 1}.</h1>
			<input
				type="text"
				bind:value={questions.v[index].name}
				placeholder="Question {index + 1}"
				class="h-fit w-[500px] rounded-xl bg-gray-800 p-1 text-center text-2xl text-white"
			/>
			<DeleteQuestion {index} />
		</div>

		
		<div class="flex flex-col gap-2">
			{#each questions.v[index].answers as answer, answersIndex}
				<Answers questionsIndex={index} {answersIndex} />
			{/each}
		</div>
	</div>
</div>
