<script>
	let props = $props();
</script>

{#if props.size == "small"}
	<h1 class="m-0 leading-[75px] text-[75px] text-gray-500">{props.digit}</h1>
{:else if props.size == "large"}
	<h1 class="m-0 leading-[200px] text-[200px]">{props.digit}</h1>
{/if}
