<script>
	import { onMount } from "svelte";
	import Digit from "./digit.svelte";
	import { updateTime } from "../../logic/updateTime.js";

	let props = $props();
	let size = props.type == "sec" ? "small" : "large";
	let digit = props.digit;
	let digits = digit == 1 ? 10 : digit == 0 && props.type == "hour" ? 2 : 6;

	let thisRow;

	onMount(() => {
		setInterval(() => {
            updateTime(thisRow, digit, props.type);
        }, 1000);
	});
</script>

<div
	style="--height: {size == 'small' ? '75px' : '200px'};"
	class="flex h-(--height) flex-col overflow-y-hidden scroll-smooth"
	bind:this={thisRow}
>
	{#each Array(digits) as _, i}
		<Digit {size} digit={i} />
	{/each}
	<Digit {size} digit={0} />
</div>
