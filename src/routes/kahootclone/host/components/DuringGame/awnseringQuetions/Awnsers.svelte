<script>
	import { CurrentQuestionDetails } from "../../../logic/HostsData.svelte.js";

	import { AnswersSymbolAndColorScheme } from "$lib/config.js";
</script>

<div class="mt-5 grid grid-cols-2 gap-5 gap-x-3">
	{#each CurrentQuestionDetails.v.answers as answer, index}
		<div class="flex">
			<input type="radio" name="question" class="sr-only" />
			<label
				for="O{index}"
				style="
					--border-color: {AnswersSymbolAndColorScheme[index].Color};
					--bg-color: {AnswersSymbolAndColorScheme[index].Color};
				"
				class="w-full rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all"
			>
				<i class="nf {AnswersSymbolAndColorScheme[index].Symbol}"></i>
				{answer}
			</label>
		</div>
	{/each}
</div>
