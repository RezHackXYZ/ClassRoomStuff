<script>
	import { onMount } from "svelte";
	import Row from "./row.svelte";

	let ShowSeconds;
	let ampm;

	onMount(() => {
		ShowSeconds = localStorage.getItem("ShowSeconds") || "true" == "true" ? true : false;

		setInterval(() => {
			ampm = new Date().getHours() >= 12 ? "PM" : "AM";
		}, 1000);
	});
</script>

<div class="flex justify-center items-end flex-row">
	<Row type={"hour"} digit={0} />
	<Row type={"hour"} digit={1} />
	<h1 class="text-[200px] leading-[200px]">:</h1>
	<Row type={"min"} digit={0} />
	<Row type={"min"} digit={1} />

	{#if ShowSeconds}
		<Row type={"sec"} digit={0} />
		<Row type={"sec"} digit={1} />
	{/if}

	<h1>{ampm}</h1>
</div>
<div>
	<h2>
		{new Date().toLocaleString("en-US", { weekday: "short" })}
		{new Date().getDate()},
		{new Date().toLocaleString("en-US", { month: "short" })}
		{new Date().getFullYear()}
	</h2>
</div>
