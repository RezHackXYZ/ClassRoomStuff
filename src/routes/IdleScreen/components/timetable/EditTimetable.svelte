<script>
	import { onMount } from "svelte";
	import { timetableData } from "../../logic/TimeAndTableData.svelte";

	let data = $state.snapshot(timetableData).v;

	let legend = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

	import { colseModal } from "../../logic/TimeAndTableData.svelte.js";

	onMount(() => {
		colseModal.v = false;
	});
</script>

<div class="m-5 flex flex-col items-center justify-center rounded-lg bg-gray-800 p-3">
	<div
		class=" flex flex-col gap-1 gap-x-1 gap-y-2 overflow-x-auto"
		style="--NoOfPeriods: {timetableData.v[0].length - 1};"
	>
		{#each data as row, RowIndex}
			<div class="flex">
				{#each row as _, timeIndex}
					{#if RowIndex == 0 && timeIndex == 0}
						<input class="rounded-xl bg-transparent p-0.5 text-center" disabled />
					{:else if timeIndex == 0}
						<input
							class="rounded-xl bg-green-900 p-0.5 text-center"
							bind:value={legend[RowIndex]}
							disabled
						/>
					{:else if RowIndex == 0}
						<input
							class="rounded-xl border-2 border-white bg-blue-800 p-0.5 text-center"
							bind:value={data[RowIndex][timeIndex]}
						/>
					{:else}
						<input
							class="rounded-xl border-2 border-white bg-gray-700 p-0.5 text-center"
							bind:value={data[RowIndex][timeIndex]}
						/>
					{/if}
				{/each}
			</div>
		{/each}
	</div>

	<div>
		<button
			onclick={() => {
				timetableData.v = data;
				localStorage.setItem("TimetableData", JSON.stringify(data));
				colseModal.v = true;
			}}
			class="btn green mt-3">SAVE</button
		>
	</div>
</div>
