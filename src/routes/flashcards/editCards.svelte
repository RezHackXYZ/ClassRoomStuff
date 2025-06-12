<script>
	import { SetNewDeck, deck, stats } from "./logic.svelte";
	import toast from "svelte-5-french-toast";

	let LocalDeck = $state($state.snapshot(deck));

	function saveDeck() {
		localStorage.setItem("deck", JSON.stringify(LocalDeck));
		SetNewDeck(LocalDeck);
		toast.success("Deck saved successfully! You can now close this window.");
	}
</script>

<div class="flex flex-col items-center gap-7 rounded border-2 bg-zinc-800 p-3">
	<div class="flex w-full flex-col gap-2">
		<div class="flex w-full gap-2 text-3xl">
			<span class="flex-1">Question</span>
			<span class="flex-1">Answer</span>
			<button aria-label="delete" class="btn invisible"><i class="nf nf-md-delete"></i></button>
		</div>
		{#each LocalDeck as card, i}
			<div class="flex w-full gap-2">
				<input type="text" class="input flex-1" bind:value={card.Q} />
				<input type="text" class="input flex-1" bind:value={card.a} />
				<button
					aria-label="delete"
					onclick={() => {
						if (confirm("Are you sure you want to delete this card?")) {
							LocalDeck.splice(i, 1);
							toast.success("Card deleted successfully! To make it apply, please save the deck.");
						}
					}}
					class="btn dull"><i class="nf nf-md-delete"></i></button
				>
			</div>
		{/each}
	</div>
	<div class="flex gap-3">
		<button
			onclick={() => {
				LocalDeck.push({ Q: "", a: "" });
				toast.success("New card added! To make it apply, please save the deck.");
			}}
			class="btn"
		>
			<i class="nf nf-md-card_plus"></i>
			Add New Card
		</button>
		<button onclick={saveDeck} class="btn">
			<i class="nf nf-fa-save"></i>
			Save
		</button>
	</div>
</div>
