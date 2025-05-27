<script>
	let props = $props();
</script>

{#if props.size == "small"}
	<h1 class="flex items-center justify-center text-[75px] leading-none m-0 text-gray-500">
		{props.digit}
	</h1>
{:else if props.size == "large"}
	<h1 class="flex items-center justify-center text-[200px] leading-none m-0">{props.digit}</h1>
{/if}