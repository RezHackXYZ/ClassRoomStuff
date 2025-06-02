<script>
	import { DefaultQuestions } from "$lib/config.js";
	import { QuestionsData } from "./create.svelte";
</script>

<div class="flex w-full justify-center gap-2 overflow-y-auto rounded border-2 p-3 pr-5">
	<button class="btn flex items-center gap-1" onclick={() => (QuestionsData.v = DefaultQuestions)}>
		<i class="nf nf-md-flash"></i> Use Demo Questions
	</button>
	<button class="btn flex items-center gap-1">
		<i class="nf nf-md-cpu_64_bit"></i> Generate Questions Using AI
	</button>
	<button class="btn flex items-center gap-1">
		<i class="nf nf-md-play"></i> Start Game
	</button>
</div>
