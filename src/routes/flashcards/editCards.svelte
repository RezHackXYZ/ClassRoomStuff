<script>
	import { SetNewDeck, StorageDeck } from "./logic.svelte";
	import toast from "svelte-5-french-toast";

	function saveDeck() {
		localStorage.setItem("deck", JSON.stringify(deck));
		SetNewDeck(deck);
		toast.success("Deck saved successfully! You can now close this window.");
	}

	let CurrentlyEditingDeckId = $state(0);

	let deck = $state($state.snapshot(StorageDeck).v);
</script>

<div class="flex flex-col items-center gap-7 rounded border-2 bg-zinc-800 p-3">
	<div class="flex w-full flex-col gap-2">
		<div class="mb-2">
			<label for="SelectOneDeckToEdit" class="text-lg leading-0.5 text-gray-500">
				What deck do you want to edit?
			</label>
			<select bind:value={CurrentlyEditingDeckId} class="input" id="SelectOneDeckToEdit">
				{#each deck as d, i}
					<option value={i}>{d.deckName}</option>
				{/each}
			</select>
		</div>

		<div class="flex w-full gap-2 text-3xl">
			<span class="flex-1">Question</span>
			<span class="flex-1">Answer</span>
			<button aria-label="delete" class="btn invisible h-0"><i class="nf nf-md-delete"></i></button>
		</div>

		{#each deck[CurrentlyEditingDeckId].cards as card, i}
			<div class="flex w-full gap-2">
				<input type="text" class="input flex-1" bind:value={card.Q} />
				<input type="text" class="input flex-1" bind:value={card.a} />
				<button
					aria-label="delete"
					onclick={() => {
						if (confirm("Are you sure you want to delete this card?")) {
							deck[CurrentlyEditingDeckId].cards.splice(i, 1);
						}
					}}
					class="btn dull"
				>
					<i class="nf nf-md-delete"></i>
				</button>
			</div>
		{/each}
	</div>
	<div class="flex gap-3">
		<button
			onclick={() => {
				deck[CurrentlyEditingDeckId].cards.push({ Q: "", a: "" });
			}}
			class="btn"
		>
			<i class="nf nf-md-card_plus"></i>
			Add New Card
		</button>
		<button onclick={saveDeck} class="btn">
			<i class="nf nf-md-content_save"></i>
			Save All Changes You Made
		</button>
	</div>
</div>
