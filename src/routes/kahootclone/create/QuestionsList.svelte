<script>
	import { QuestionsData, selectedQuestionIndex } from "./create.svelte.js";
</script>

<div class="flex h-full w-[15%] flex-col gap-2 overflow-y-auto rounded-r border-2 p-3 pr-5">
	<h1 class="text-4xl">Questions</h1>
	{#each QuestionsData.v as question, questionIndex}
		<button
			class="card flex flex-col text-left"
			onclick={() => (selectedQuestionIndex.v = questionIndex)}
		>
			<span class="text-3xl">{questionIndex + 1}.</span><span>{question.questionText}</span>
		</button>
	{/each}
	<div class="mt-2 flex justify-center">
		<button
			class="btn"
			onclick={() => {
				QuestionsData.v.push({
					questionText: "",
					timeLimit: 15,
					type: "SingleAnswer",
					options: ["", "", "", ""],
					CorrectOption: null,
					hasMedia: false,
					mediaURL: null,
				});
			}}><i class="nf nf-oct-diff_added"></i> New Question</button
		>
	</div>
</div>
