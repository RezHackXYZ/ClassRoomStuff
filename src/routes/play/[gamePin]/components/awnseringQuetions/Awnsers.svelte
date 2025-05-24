<script>
	import { questions, Selected } from "../../logic/HostsData.svelte.js";
	import config from "$lib/config.json";
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
					--border-color: {config.AnswersSymbolAndColor[index].Color};
					--bg-color: {config.AnswersSymbolAndColor[index].Color};
					--border-color-checked: {config.AnswersSymbolAndColor[index].SelectedColor};
					--bg-color-checked: {config.AnswersSymbolAndColor[index].SelectedColor};
					--border-color-hover: {config.AnswersSymbolAndColor[index].HoverBorderColor};
					--border-color-checked: {config.AnswersSymbolAndColor[index].SelectedBorderColor};
					--border-color-hover: {config.AnswersSymbolAndColor[index].HoverBorderColor};
				"
				class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
			>
				<i class="nf {config.AnswersSymbolAndColor[index].Symbol}"></i>
				{answer}
			</label>
		</div>
	{/each}
</div>
