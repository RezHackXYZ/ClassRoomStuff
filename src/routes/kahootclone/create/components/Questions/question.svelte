<script>
	import DeleteQuestion from "../buttons/DeleteQuestion.svelte";
	import GenerateOptionsUsingAI from "../buttons/GenerateOptionsUsingAI.svelte";
	import Answers from "./answers.svelte";
	import { questions } from "../../logic/GameCreateData.svelte.js";
	import { UpLoadFiles } from "../../logic/UpLoadFiles.js";

	let props = $props();
	let index = props.index;

	let files;
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
			<select
				bind:value={questions.v[index].answers.length}
				onchange={(e) => {
					const newLength = questions.v[index].answers.length;
					const currentAnswers = questions.v[index].answers;

					if (newLength > currentAnswers.length) {
						// Add more answers
						while (questions.v[index].answers.length < newLength) {
							questions.v[index].answers.push("");
						}
					} else if (newLength < currentAnswers.length) {
						// Remove excess answers
						questions.v[index].answers = currentAnswers.slice(0, newLength);
					}
				}}
				class="h-fit rounded-xl bg-gray-800 p-1 text-center text-white"
			>
				<option disabled selected>Options</option>
				{#each Array(7) as _, i}
					<option value={i + 2}>{i + 2}</option>
				{/each}
			</select>
			<select
				bind:value={questions.v[index].timeLimit}
				class="h-fit rounded-xl bg-gray-800 p-1 text-center text-white"
			>
				<option disabled selected>Time Limit</option>
				<option value={null}>infinite</option>
				<option value={5}>5 sec</option>
				<option value={10}>10 sec</option>
				<option value={15}>15 sec</option>
				<option value={30}>30 sec</option>
				<option value={60}>1 min</option>
				<option value={120}>2 min</option>
				<option value={300}>5 min</option>
			</select>
			<DeleteQuestion {index} />
		</div>

		<div class="flex flex-col gap-2">
			{#each questions.v[index].answers as _, answersIndex}
				<Answers questionsIndex={index} {answersIndex} />
			{/each}
		</div>
		<GenerateOptionsUsingAI {index} />
		<input
			type="file"
			onchange={async () => {
				questions.v[index].media = await UpLoadFiles(files[0]);
			}}
			bind:files
			accept="image/*,video/*"
		/>
	</div>
</div>
