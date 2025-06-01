<script>
	import { onMount } from "svelte";
	import Row from "./row.svelte";

	import {ShowSeconds} from "../../logic/TimeAndTableData.svelte.js";

	let ampm;

	onMount(() => {
		setInterval(() => {
			ampm = new Date().getHours() >= 12 ? "PM" : "AM";
		}, 1000);
	});
</script>

<div class="m-5 w-fit rounded-lg bg-gray-700 p-3">
	<div class="flex items-baseline justify-center">
		<Row type={"hour"} digit={0} />
		<Row type={"hour"} digit={1} />
		<h1 class="m-0 text-[200px] leading-[200px]">:</h1>
		<Row type={"min"} digit={0} />
		<Row type={"min"} digit={1} />

		{#if ShowSeconds.v}
			<h1 class="text-[75px] leading-none text-gray-500">.</h1>

			<Row type={"sec"} digit={0} />
			<Row type={"sec"} digit={1} />
		{/if}
		<h1 class="text-[75px] leading-none text-gray-500 ml-3">{ampm}</h1>
	</div>
	<div>
		<h1 class="text-center text-5xl text-gray-300">
			{new Date().toLocaleString("en-US", { weekday: "short" })}
			{new Date().getDate()},
			{new Date().toLocaleString("en-US", { month: "short" })}
			{new Date().getFullYear()}
		</h1>
	</div>
</div>
