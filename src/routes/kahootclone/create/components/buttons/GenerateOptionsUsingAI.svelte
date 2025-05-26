<script>
	import { GenerateOptionsUsingAI } from "../../logic/GenerateOptionsUsingAI.js";
	import { questions } from "../../logic/GameCreateData.svelte.js";

	let props = $props();
	let index = props.index;
</script>

{#if questions.v[index].answers.every((answer) => answer === "")}
	<button
		onclick={() => {
			GenerateOptionsUsingAI(index);
		}}
		class="mt-1 mb-1 flex h-fit cursor-pointer items-center justify-center gap-2 rounded-xl bg-blue-700 p-2 transition-all hover:scale-110 hover:-rotate-5"
	>
		<i class="nf nf-cod-sparkle"></i>
		Generate Options using AI
	</button>
{/if}
