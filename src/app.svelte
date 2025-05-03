<script>
	import Game from "./wordle/game.svelte";
</script>

<div id="root">
	<h1>CLASSROOM WORDLE <span>~made by Rhythm Upadhyay of 7th A</span></h1>
	<Game />
</div>

<style>
	:root {
		background-color: #121212;
		color: white;
	}

	#root {
		height: 100%;
		display: flex;
		flex-direction: column;
		margin: 0;
		font-family: "Sour Gummy", sans-serif;
	}

	h1 {
		text-align: center;
		margin: 5px 0px;
		text-decoration: underline #444;
	}

	span {
		font-size: 0.5em;
		text-decoration: none;
		color: #444;
	}
</style>
