<script>
	import { questions, Selected } from "../../logic/HostsData.svelte.js";
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
				class="w-full cursor-pointer rounded-lg border-3 border-gray-600 bg-gray-600 pt-1 pr-2 pb-1 pl-2 text-center text-3xl transition-all peer-checked:border-blue-600 peer-checked:bg-blue-600 hover:border-blue-600"
				for="O{index}">{answer}</label
			>
		</div>
	{/each}
</div>
