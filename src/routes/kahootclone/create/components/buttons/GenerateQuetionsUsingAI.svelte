<script>
	import { GenerateQuestionsUsingAI } from "../../logic/GenerateQuestionsUsingAI.js";
	import { questions } from "../../logic/GameCreateData.svelte.js";
</script>

{#if questions.v.length === 0 || (questions.v.length === 1 && questions.v[0].name === "" && questions.v[0].answers.every((answer) => answer === "") && questions.v[0].correctAnswer === undefined)}
	<button
		onclick={GenerateQuestionsUsingAI}
		class="-mt-5 mb-3 flex h-fit cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-700 p-2 transition-all hover:scale-110 hover:-rotate-5"
	>
		<i class="nf nf-cod-sparkle"></i>
		Generate questions using AI
	</button>
{/if}
