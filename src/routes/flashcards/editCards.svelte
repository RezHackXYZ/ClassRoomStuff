<script>
	import { SetNewDeck, deck } from "./logic.svelte";
	import toast from "svelte-5-french-toast";

	let LocalDeck = $state.snapshot(deck);
	let deckText = JSON.stringify(LocalDeck, null, 2); // Pretty print for textarea

	function saveDeck() {
		try {
			const parsedDeck = JSON.parse(deckText);
			localStorage.setItem("deck", JSON.stringify(parsedDeck));
			SetNewDeck(parsedDeck);
			toast.success("Deck saved successfully! You can now close this window.");
		} catch (e) {
			toast.error("Invalid JSON format!");
		}
	}
</script>

<div class="flex flex-col items-center gap-2 rounded border-2 bg-zinc-800 p-3">
	<textarea bind:value={deckText} class="input"></textarea>

	<button on:click={saveDeck} class="btn">
		<i class="nf nf-fa-save"></i>
		Save
	</button>
</div>
