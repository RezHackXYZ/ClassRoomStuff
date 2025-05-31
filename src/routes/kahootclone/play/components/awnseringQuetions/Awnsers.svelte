<script>
	import { questions, Selected } from "../../logic/HostsData.svelte.js";
	import { AnswersSymbolAndColorScheme } from "$lib/config.js";
</script>

<div class="mt-5 grid grid-cols-2 gap-5 gap-x-3">
	{#each questions.v.answers as answer, index}
		<div class="flex">
			<input
				type="radio"
				id="O{index}"
				name="question"
				class="peer sr-only"
				value={index}
				bind:group={Selected.v}
			/>

			<label
				for="O{index}"
				style="
					--border-color: {AnswersSymbolAndColorScheme[index].Color};
					--bg-color: {AnswersSymbolAndColorScheme[index].Color};
					--border-color-checked: {AnswersSymbolAndColorScheme[index].SelectedColor};
					--bg-color-checked: {AnswersSymbolAndColorScheme[index].SelectedColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[index].HoverBorderColor};
					--border-color-checked: {AnswersSymbolAndColorScheme[index].SelectedBorderColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[index].HoverBorderColor};
				"
				class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
			>
				<i class="nf {AnswersSymbolAndColorScheme[index].Symbol}"></i>
				{answer}
			</label>
		</div>
	{/each}
</div>
