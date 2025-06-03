<script>
	import { AnswersSymbolAndColorScheme } from "$lib/config.js";
	import { QuestionsData, selectedQuestionIndex } from "./create.svelte.js";
</script>

<div class="flex h-full w-full flex-col gap-2 overflow-y-auto rounded border-2 p-3 pr-5">
	<h1 class="text-4xl">How Question number {selectedQuestionIndex.v + 1} will look</h1>

	<div class="grid h-full place-items-center">
		<div class="card w-4/5">
			<h1 class="flex flex-col text-3xl">
				<span class="text-5xl">{selectedQuestionIndex.v + 1}.</span>
				{QuestionsData.v[selectedQuestionIndex.v].questionText}
			</h1>
			{#if QuestionsData.v[selectedQuestionIndex.v].mediaURL && QuestionsData.v[selectedQuestionIndex.v].hasMedia}
				<div class="flex justify-center">
					<div class="mt-1 w-fit rounded border-2">
						{#if QuestionsData.v[selectedQuestionIndex.v].mediaURL.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i)}
							<!-- svelte-ignore a11y_media_has_caption -->
							<video
								src={QuestionsData.v[selectedQuestionIndex.v].mediaURL}
								controls
								class="h-75 rounded"
							></video>
						{:else}
							<img
								src={QuestionsData.v[selectedQuestionIndex.v].mediaURL}
								alt="Question media"
								class="h-75 rounded"
							/>{/if}
					</div>
				</div>
			{/if}
			<div class="mt-5 grid grid-cols-2 gap-5 gap-x-3">
				{#each QuestionsData.v[selectedQuestionIndex.v].options as question, questionIndex}
					<div class="flex">
						<span
							style="
					--border-color: {AnswersSymbolAndColorScheme[questionIndex].Color};
					--bg-color: {AnswersSymbolAndColorScheme[questionIndex].Color};
					--border-color-checked: {AnswersSymbolAndColorScheme[questionIndex].SelectedColor};
					--bg-color-checked: {AnswersSymbolAndColorScheme[questionIndex].SelectedColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[questionIndex].HoverBorderColor};
					--border-color-checked: {AnswersSymbolAndColorScheme[questionIndex].SelectedBorderColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[questionIndex].HoverBorderColor};
				"
							class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
						>
							<i class="nf {AnswersSymbolAndColorScheme[questionIndex].Symbol}"></i>
							{question}
						</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
