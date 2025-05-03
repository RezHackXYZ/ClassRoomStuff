<script>
	import { newGame, WordLegnth } from "../logic.svelte.js";
	import WordLegnthSetings from "./WordLegnthSetings.svelte";

	let LetersSelected = WordLegnth.v;
</script>

<div id="root">
	<h1>A Wordle clone designed for classrooms!</h1>
	<h3>
		Unlimited guesses, Unlimited words, and choose your own word length!
	</h3>

	<WordLegnthSetings />
</div>

<style>
	#root {
		height: 100%;
		width: 35%;
		border-radius: 20px;
		margin: 20px;
		margin-top: 5px;
		border: 2px solid #444;
	}

	h1 {
		text-align: center;
		margin: 5px 0px;
		text-decoration: underline #444;
	}

	h3 {
		text-align: center;
		margin: 5px 0px;
		text-decoration: underline #444;
	}
</style>
