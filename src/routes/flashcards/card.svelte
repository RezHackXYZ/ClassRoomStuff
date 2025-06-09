<script>
	let card = {
		Q: "What is the capital of France?",
		a: "Paris",
	};

	let flipped = false;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="peer aspect-video w-[600px] cursor-pointer transition perspective-[1000px] hover:scale-105"
	on:click={() => (flipped = !flipped)}
>
	<div
		class={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "rotate-y-180" : ""}`}
	>
		<div
			class="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded border-2 bg-blue-800 text-5xl text-white [backface-visibility:hidden]"
		>
			<span class="text-3xl text-blue-600">Question</span>
			{card.Q}
		</div>

		<div
			class="absolute flex h-full w-full rotate-y-180 flex-col items-center justify-center gap-5 rounded border-2 bg-green-800 text-5xl text-white [backface-visibility:hidden]"
		>
			<span class="text-3xl text-green-600">Answer</span>
			{card.a}
		</div>
	</div>
</div>

<p
	class="invisible mt-4 text-center text-gray-500 opacity-0 transition peer-hover:visible peer-hover:opacity-100"
>
	Click to flip the card and see the answer ☝️
</p>
