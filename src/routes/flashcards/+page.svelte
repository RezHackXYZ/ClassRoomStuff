<script>
	import Buttons from "./buttons.svelte";
	import Card from "./card.svelte";
	import StatsAndButtons from "./StatsAndButtons.svelte";

	import { stats, resetDeck, SetNewDeck } from "./logic.svelte.js";
	import { onMount } from "svelte";
	import tempelateDeck from "./tempelateDeck.json";

	onMount(() => {
		SetNewDeck(JSON.parse(localStorage.getItem("deck")) || tempelateDeck, true);
	});

	let DemoDeck = [
		{
			deckName: "Tech",
			cards: [
				{ Q: "What is Svelte?", a: "A modern JavaScript framework for building user interfaces." },
				{ Q: "What is a component?", a: "A reusable piece of UI in Svelte." },
				{ Q: "How do you create a reactive variable?", a: "$: variableName = value;" },
			],
		},
		{
			deckName: "Math Basics",
			cards: [
				{ Q: "What is 2 + 2?", a: "4" },
				{ Q: "What is the square root of 16?", a: "4" },
				{ Q: "What is 5 * 6?", a: "30" },
			],
		},
		{
			deckName: "Geography",
			cards: [
				{ Q: "What is the capital of France?", a: "Paris" },
				{ Q: "Which continent is Egypt in?", a: "Africa" },
				{ Q: "What is the largest ocean?", a: "Pacific Ocean" },
			],
		},
	];
</script>

<div class="flex h-full flex-col overflow-hidden">
	{#if stats.isDeckEmpty}
		<div class="flex flex-1 flex-col items-center justify-center gap-3">
			<h1 class="text-4xl">Choose a Deck To lean from!</h1>
			<div>
				<select
					id="ChooseTheDeck"
					onchange={(event) => {
						const selectedDeck = DemoDeck.find((deck) => deck.deckName === event.target.value);
						if (selectedDeck) {
							SetNewDeck(selectedDeck.cards);
						}
					}}
					class="input"
				>
					<option value="" disabled selected> goo ahead choose one! </option>
					{#each DemoDeck as deckOption}
						<option value={deckOption.deckName}>{deckOption.deckName}</option>
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
