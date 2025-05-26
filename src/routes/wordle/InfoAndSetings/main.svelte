<script module>
	import { newGame, WordLegnth } from "../logic.svelte.js";
	import WordLegnthSetings from "./WordLegnthSetings.svelte";
	import Stats from "./stats.svelte";

	export let TabOpen = $state({ v: "none" });

	export function OpenTab(type) {
		TabOpen.v = type;
	}
</script>

{#if TabOpen.v !== "none"}
	<div id="UperLayer">
		<div id="wrap">
			{#if TabOpen.v == "WordLength"}
				<WordLegnthSetings />
			{:else if TabOpen.v == "Stats"}
				<Stats />
			{/if}
			<button
				class="close"
				onclick={() => (TabOpen.v = "none")}
				aria-label="close">CLOSE</button
			>
		</div>
	</div>
{/if}

<style>
	#UperLayer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(5px);
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
		display: grid;
		place-items: center;
	}

	#wrap {
		display: flex;
		flex-direction: column;
	}

	.close {
		background-color: #2b2b2b;
		color: #888;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		align-self: center;
	}
</style>
