<script>
	import { questions } from '../../logic/GameCreateData.svelte.js';

	let props = $props();
	let questionsIndex = props.questionsIndex;
	let index = props.answersIndex;
</script>

<div class="flex items-center gap-2">
	<input
		type="radio"
		value={index}
		name={index.toString()}
		bind:group={questions.v[questionsIndex].correctAnswer}
		class="input"
	/>

	<input
		placeholder="Option {index + 1}"
		bind:value={questions.v[questionsIndex].answers[index]}
		class="w-[500px] rounded-lg bg-gray-800 p-1 text-center text-white"
	/>
</div>
