<script>
	import { Modal, Content, Trigger } from "sv-popup";

	import Time from "./components/time/DisplayCollsOfTime.svelte";
	import TimeTable from "./components/timetable/DisplayRowsOfTimetable.svelte";
	import EditTimetableDiv from "./components/timetable/EditTimetable.svelte";
	import { colseModal, ShowSeconds } from "./logic/TimeAndTableData.svelte.js";
	import { on } from "svelte/events";
	import { onMount } from "svelte";

	onMount(() => {
		ShowSeconds.v = localStorage.getItem("ShowSeconds") || "true" == "true" ? true : false;
	});
</script>

<div class="flex h-full flex-col">
	<div>
		<button
			class="btn"
			onclick={() => {
				ShowSeconds.v = !ShowSeconds.v;
				localStorage.setItem("ShowSeconds", String(ShowSeconds.v));
			}}
		>
			{#if ShowSeconds.v}Disable Seconds{:else}Enable Seconds{/if}</button
		>
		<Modal big={true} close={colseModal.v}>
			<Content>
				<EditTimetableDiv />
			</Content>
			<Trigger>
				<button class="btn">Edit timetable </button>
			</Trigger>
		</Modal>
	</div>

	<div class="flex flex-1 flex-col items-center justify-center">
		<Time /><TimeTable />
	</div>
</div>
