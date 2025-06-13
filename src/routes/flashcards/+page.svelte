<script>
	import Buttons from "./buttons.svelte";
	import Card from "./card.svelte";
	import StatsAndButtons from "./StatsAndButtons.svelte";

	import { stats, SelectNewDeck, SetNewDeck, StorageDeck } from "./logic.svelte.js";
	import { onMount } from "svelte";
	import tempelateDeck from "./tempelateDeck.json";

	onMount(() => {
		SetNewDeck(JSON.parse(localStorage.getItem("deck")) || tempelateDeck, true);
	});
</script>

<div class="flex h-full flex-col overflow-hidden">
	{#if stats.isDeckEmpty}
		<div class="flex flex-1 flex-col items-center justify-center gap-3">
			<h1 class="text-4xl">Choose a Deck To learn from!</h1>
			<div>
				<select
					id="ChooseTheDeck"
					onchange={(event) => {
						SelectNewDeck(event.target.value);
					}}
					class="input"
				>
					<option value="" disabled selected> goo ahead choose one! </option>
					{#each StorageDeck.v as deckOption, i}
						<option value={i}>{deckOption.deckName}</option>
					{/each}
				</select>
			</div>
		</div>
	{:else}
		<div class="flex flex-1 flex-col items-center justify-center">
			<div class="flex flex-col gap-1 text-center">
				<div class="flex flex-col items-center justify-center gap-5 p-2">
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
