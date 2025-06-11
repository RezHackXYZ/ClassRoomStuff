<script>
	import Buttons from "./buttons.svelte";
	import Card from "./card.svelte";
	import StatsAndButtons from "./StatsAndButtons.svelte";

	import { stats, resetDeck } from "./logic.svelte.js";
</script>

<div class="flex h-full flex-col overflow-hidden">
	{#if stats.isDeckEmpty}
		<div class="flex flex-1 flex-col items-center justify-center gap-3">
			<h1 class="text-4xl">Hey, You learned everything!</h1>
			<button onclick={() => resetDeck()} class="big btn green">Reset Deck</button>
		</div>
	{:else}
		<div class="flex flex-1 flex-col items-center justify-center gap-2">
			<div class="flex flex-col gap-1 text-center">
				<div class="flex items-center justify-center p-2">
					<StatsAndButtons />
				</div>
				<Card />
			</div>
			<div class="flex gap-4">
				<Buttons />
			</div>
		</div>
	{/if}
</div>
