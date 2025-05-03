<script>
	import { CurrentWord, words } from "./logic.svelte.js";
</script>

<div id="root">
	{#each words as word}
		<div class="word">
			{#each word as letter}
				<span class={letter[1]}>{letter[0]}</span>
			{/each}
		</div>
	{/each}
	<div class="word">
		<span>{CurrentWord.v[0]}</span>
		<span>{CurrentWord.v[1]}</span>
		<span>{CurrentWord.v[2]}</span>
		<span>{CurrentWord.v[3]}</span>
		<span>{CurrentWord.v[4]}</span>
	</div>
</div>

<style>
	#root {
		height: calc(100% - 320px);
		border: 2px solid #202020;
		margin: 20px;
		border-radius: 10px;
		overflow-y: auto;
	}

	.word {
		display: flex;
		gap: 5px;
		margin: 10px;
		justify-content: center;
	}

	span {
		width: 70px;
		height: 70px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
		font-size: 50px;
		border: 2px solid #444;
	}

	.c {
		background-color: #2b5f2d;
	}
	.d {
		background-color: #804d00;
	}
	.w {
		background-color: #2b2b2b;
	}

	/* width */
	::-webkit-scrollbar {
		width: 20px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px grey;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: red;
		border-radius: 10px;
	}
</style>
