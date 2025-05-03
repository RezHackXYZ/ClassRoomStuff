<script>
	import { CurrentWord, words,WordLegnth } from "./logic.svelte.js";
</script>

<div id="DisplayOfWords">
	{#each words as word}
		<div class="word">
			{#each word as letter}
				<span class={letter[1]}>{letter[0]}</span>
			{/each}
		</div>
	{/each}
	<div class="word">
		{#each Array(WordLegnth) as _, i}
		<span>{CurrentWord.v[i] || ''}</span>
		{/each}
	</div>
</div>

<style>
	#DisplayOfWords {
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
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		border: 1px solid #5c5c5c;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #3f3f3f;
		border-radius: 10px;
	}
</style>
