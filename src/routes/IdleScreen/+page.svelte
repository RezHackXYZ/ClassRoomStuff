<script module>
	import { Modal, Content, Trigger } from "sv-popup";

	import Time from "./components/time/DisplayCollsOfTime.svelte";
	import TimeTable from "./timeTable.svelte";
	import EditTimetableDiv from "./EditTimetable.svelte";

	export let ShowSeconds = $state({ v: true });
</script>

<div id="wrap">
	<div>
		<button
			onclick={() => {
				ShowSeconds.v = !ShowSeconds.v;
				localStorage.setItem("ShowSeconds", String(ShowSeconds.v));
			}}
			>{#if ShowSeconds.v}Disable Seconds{:else}Enable Seconds{/if}</button
		>
		<Modal button={false} big={true}>
			<Content>
				<EditTimetableDiv />
			</Content>
			<Trigger>
				<button>Edit timetable </button>
			</Trigger>
		</Modal>
	</div>

	<div id="root">
		<!--<TimeTable />--><Time />
	</div>
</div>
