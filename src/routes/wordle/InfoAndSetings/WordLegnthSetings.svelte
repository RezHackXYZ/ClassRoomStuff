<script>
	import { newGame, WordLegnth } from "../logic.svelte.js";
	import { TabOpen } from "./main.svelte";

	let LetersSelected = WordLegnth.v;
</script>

<div id="root">
	<h4>Select The Word legnth (between 3 and 10 letters)</h4>
	<input type="range" id="vol" name="vol" min="3" max="10" bind:value={LetersSelected} />
	<button
		onclick={() => {
			WordLegnth.v = LetersSelected;
			newGame();
			TabOpen.v = "none";
		}}
		class="btn"
		>Start New Game with Word legnth of {LetersSelected} letters
	</button>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin: 10px;
		justify-content: center;
		background-color: #303030;
		padding: 10px;
		margin: 20px;
		border-radius: 10px;
		width: 400px;
	}
	h4 {
		text-align: center;
		margin: 0px;
	}
</style>
