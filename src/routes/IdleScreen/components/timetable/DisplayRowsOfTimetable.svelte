<script>
	import { onMount } from "svelte";
	import { timetableData } from "../../logic/TimeAndTableData.svelte";

	let legend = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	onMount(() => {
		timetableData.v = JSON.parse(localStorage.getItem("timetableData")) || timetableData.v;
	});
</script>

<div
	class="m-5 grid grid-cols-[auto_repeat(var(--NoOfPeriods),_auto)] gap-1 gap-x-1 gap-y-2 rounded-lg bg-gray-800 p-3"
	style="--NoOfPeriods: {timetableData.v[0].length - 1};"
>
	{#each timetableData.v as row, RowIndex}
		{#each row as time, timeIndex}
			{#if RowIndex == 0 && timeIndex == 0}
				<span class="rounded-xl bg-transparent p-1.5 text-center text-xl"></span>
			{:else if RowIndex == 0}
				<span class="rounded-xl bg-blue-800 p-1.5 text-center text-xl">{time}</span>
			{:else if RowIndex == new Date().getDay() && timeIndex == 0}
				<span class="rounded-xl bg-green-600 p-1.5 text-center text-4xl"
					>{legend[RowIndex]}</span
				>
			{:else if RowIndex == new Date().getDay()}
				<span class="rounded-xl bg-green-600 p-1.5 text-center text-4xl">{time}</span>
			{:else if timeIndex == 0}
				<span class="rounded-xl bg-green-900 p-1.5 text-center text-xl"
					>{legend[RowIndex]}</span
				>
			{:else}
				<span class="rounded-xl bg-gray-700 p-1.5 text-center text-xl">{time}</span>
			{/if}
		{/each}
	{/each}
</div>
