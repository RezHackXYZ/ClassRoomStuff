<script>
	import { nextCard } from "./logic.svelte.js";
</script>

<button aria-label="i don't know it" onclick={() => nextCard("left")} class="btn big red">
	<i class="nf nf-md-close"></i>
</button>

<button aria-label="i know the it" onclick={() => nextCard("right")} class="btn big green">
	<i class="nf nf-md-check"></i>
</button>
