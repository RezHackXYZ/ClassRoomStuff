<script>
	import { card, statusOfCard } from "./logic.svelte.js";
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="peer aspect-video w-[600px] cursor-pointer transition perspective-[1000px] hover:scale-105"
	on:click={() => (statusOfCard.flipped = !statusOfCard.flipped)}
>
	<div
		class={`relative h-full w-full transition-transform duration-500 transform-3d ${statusOfCard.flipped ? "rotate-y-180" : ""} ${statusOfCard.exiting ? (statusOfCard.exitingToRight ? "card-exit-right" : "card-exit-left") : ""} ${statusOfCard.entering ? "card-enter" : ""} `}
	>
		<div
			class="absolute flex h-full w-full flex-col items-center justify-center gap-5 rounded border-2 bg-blue-800 p-4 text-5xl text-white [backface-visibility:hidden]"
		>
			<span class="text-3xl text-blue-600">Question</span>
			{card.Q}
		</div>

		<div
			class="absolute flex h-full w-full rotate-y-180 flex-col items-center justify-center gap-5 rounded border-2 bg-green-800 p-4 text-5xl text-white [backface-visibility:hidden]"
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

<style>
	.card-exit-right {
		animation: slideOutRight 0.4s ease forwards;
	}

	@keyframes slideOutRight {
		to {
			transform: translateX(100vw) rotate(10deg);
			opacity: 0;
		}
	}
	.card-exit-left {
		animation: slideOutLeft 0.4s ease backwards;
	}

	@keyframes slideOutLeft {
		to {
			transform: translateX(-100vw) rotate(-10deg);
			opacity: 0;
		}
	}
	.card-enter {
		animation: slideIn 0.4s ease;
	}

	@keyframes slideIn {
		from {
			transform: scale(0.5);
			opacity: 0;
		}
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>
