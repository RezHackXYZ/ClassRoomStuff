<script>
	import { AnswersSymbolAndColorScheme } from "$lib/config.js";
</script>

<div class="flex h-full w-full flex-col gap-2 overflow-y-auto rounded border-2 p-3 pr-5">
	<h1 class="text-4xl">How it will look</h1>

	<div class="grid h-full place-items-center">
		<div class="card w-4/5">
			<h1 class="flex flex-col text-3xl">
				<span class="text-5xl">1.</span>What is the capital of France?
			</h1>
			<div class="mt-5 grid grid-cols-2 gap-5 gap-x-3">
				<div class="flex">
					<input type="radio" id="O{0}" name="question" class="peer sr-only" value={0} />

					<label
						for="O{1}"
						style="
					--border-color: {AnswersSymbolAndColorScheme[0].Color};
					--bg-color: {AnswersSymbolAndColorScheme[0].Color};
					--border-color-checked: {AnswersSymbolAndColorScheme[0].SelectedColor};
					--bg-color-checked: {AnswersSymbolAndColorScheme[0].SelectedColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[0].HoverBorderColor};
					--border-color-checked: {AnswersSymbolAndColorScheme[0].SelectedBorderColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[0].HoverBorderColor};
				"
						class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
					>
						<i class="nf {AnswersSymbolAndColorScheme[0].Symbol}"></i>
						answer 1
					</label>
				</div>
				<div class="flex">
					<input type="radio" id="O{1}" name="question" class="peer sr-only" value={1} />

					<label
						for="O{1}"
						style="
					--border-color: {AnswersSymbolAndColorScheme[1].Color};
					--bg-color: {AnswersSymbolAndColorScheme[1].Color};
					--border-color-checked: {AnswersSymbolAndColorScheme[1].SelectedColor};
					--bg-color-checked: {AnswersSymbolAndColorScheme[1].SelectedColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[1].HoverBorderColor};
					--border-color-checked: {AnswersSymbolAndColorScheme[1].SelectedBorderColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[1].HoverBorderColor};
				"
						class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
					>
						<i class="nf {AnswersSymbolAndColorScheme[1].Symbol}"></i>
						answer 2
					</label>
				</div>
				<div class="flex">
					<input type="radio" id="O{2}" name="question" class="peer sr-only" value={2} />

					<label
						for="O{1}"
						style="
					--border-color: {AnswersSymbolAndColorScheme[2].Color};
					--bg-color: {AnswersSymbolAndColorScheme[2].Color};
					--border-color-checked: {AnswersSymbolAndColorScheme[2].SelectedColor};
					--bg-color-checked: {AnswersSymbolAndColorScheme[2].SelectedColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[2].HoverBorderColor};
					--border-color-checked: {AnswersSymbolAndColorScheme[2].SelectedBorderColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[2].HoverBorderColor};
				"
						class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
					>
						<i class="nf {AnswersSymbolAndColorScheme[2].Symbol}"></i>
						answer 3
					</label>
				</div>
				<div class="flex">
					<input type="radio" id="O{3}" name="question" class="peer sr-only" value={3} />

					<label
						for="O{1}"
						style="
					--border-color: {AnswersSymbolAndColorScheme[3].Color};
					--bg-color: {AnswersSymbolAndColorScheme[3].Color};
					--border-color-checked: {AnswersSymbolAndColorScheme[3].SelectedColor};
					--bg-color-checked: {AnswersSymbolAndColorScheme[3].SelectedColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[3].HoverBorderColor};
					--border-color-checked: {AnswersSymbolAndColorScheme[3].SelectedBorderColor};
					--border-color-hover: {AnswersSymbolAndColorScheme[3].HoverBorderColor};
				"
						class="w-full cursor-pointer rounded-lg border-[5px] border-[var(--border-color)] bg-[var(--bg-color)] pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-[var(--border-color-checked)] peer-checked:bg-[var(--bg-color-checked)] hover:border-[var(--border-color-hover)]"
					>
						<i class="nf {AnswersSymbolAndColorScheme[3].Symbol}"></i>
						answer 4
					</label>
				</div>
			</div>
		</div>
	</div>
</div>
