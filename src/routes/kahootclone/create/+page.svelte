<script>
	import UseDemoQuestions from "./components/buttons/UseDemoQuestions.svelte";
	import NewQuestion from "./components/buttons/NewQuestion.svelte";
	import StartGame from "./components/buttons/StartGame.svelte";
	import Question from "./components/Questions/question.svelte";
	import { questions, Wait } from "./logic/GameCreateData.svelte.js";
	import WaitStartGame from "./components/buttons/WaitStartGame.svelte";
	import GenerateQuetionsUsingAi from "./components/buttons/GenerateQuetionsUsingAI.svelte";
</script>

<div class="bg-grey-900 flex justify-center p-5">
	<div
		class="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		<div class="flex gap-3"><UseDemoQuestions /> <GenerateQuetionsUsingAi /></div>
		{#each questions.v as question, index}
			<Question {index} />
		{/each}
		<div class="flex gap-3">
			<NewQuestion />
			{#if Wait.v == false}
				<StartGame />
			{:else}
				<WaitStartGame />
			{/if}
		</div>
	</div>
</div>
