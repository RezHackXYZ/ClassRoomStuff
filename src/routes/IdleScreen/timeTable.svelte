<script module>
	export function newTable(timetable) {
		localStorage.setItem("TimeTable", JSON.stringify(timetable));
		table = timetable;
	}

	let TemplateTable = {
		Times: [
			"07:50 - 08:50",
			"08:50 - 09:40",
			"09:40 - 10:30 ",
			"10:30 - 11:00",
			"11:00 - 12:00",
			"12:00 - 01:00",
			"01:00 - 02:00",
		],
		Monday: [
			"English",
			"Sanskrit",
			"Math",
			"Lunch",
			"Hindi",
			"Social Science",
			"Science",
		],
		Tuesday: [
			"English",
			"Art & Craft",
			"Math",
			"Lunch",
			"Hindi",
			"Social Science",
			"Science",
		],
		Wednesday: [
			"English",
			"GK",
			"Math",
			"Lunch",
			"Hindi",
			"Social Science",
			"Science",
		],
		Thursday: [
			"English",
			"Sanskrit",
			"Math",
			"Lunch",
			"Hindi",
			"Social Science",
			"Science",
		],
		Friday: [
			"English",
			"Computers",
			"Math",
			"Lunch",
			"Hindi",
			"Social Science",
			"Science",
		],
	};

	let table = $state();

	/*let TempTimeTable = localStorage.getItem("TimeTable") || "";

	if (TempTimeTable != "") {
		table = JSON.parse(TempTimeTable);
	} else {
		newTable($state.snapshot(TemplateTable));
	}*/
</script>

<div id="root">
	<div id="wrap">
		<div class="Header Row">
			<span class="DayOfWeek" style="Opacity: 0;"></span>
			{#each table.Times as time}
				<span>{time}</span>
			{/each}
		</div>
		<div class="Row">
			{#if new Date().getDay() == 1}
				<span class="DayOfWeek NavHighlight">Monday</span>
			{:else}
				<span class="DayOfWeek">Monday</span>
			{/if}
			{#each table.Monday as time}
				{#if new Date().getDay() == 1}
					<span class="highlight">{time}</span>
				{:else}
					<span>{time}</span>
				{/if}
			{/each}
		</div>
		<div class="Row">
			{#if new Date().getDay() == 2}
				<span class="DayOfWeek NavHighlight">Tuesday</span>
			{:else}
				<span class="DayOfWeek">Tuesday</span>
			{/if}
			{#each table.Tuesday as time}
				{#if new Date().getDay() == 2}
					<span class="highlight">{time}</span>
				{:else}
					<span>{time}</span>
				{/if}
			{/each}
		</div>
		<div class="Row">
			{#if new Date().getDay() == 3}
				<span class="DayOfWeek NavHighlight">Wednesday</span>
			{:else}
				<span class="DayOfWeek">Wednesday</span>
			{/if}
			{#each table.Wednesday as time}
				{#if new Date().getDay() == 3}
					<span class="highlight">{time}</span>
				{:else}
					<span>{time}</span>
				{/if}
			{/each}
		</div>
		<div class="Row">
			{#if new Date().getDay() == 4}
				<span class="DayOfWeek NavHighlight">Thursday</span>
			{:else}
				<span class="DayOfWeek">Thursday</span>
			{/if}
			{#each table.Thursday as time}
				{#if new Date().getDay() == 4}
					<span class="highlight">{time}</span>
				{:else}
					<span>{time}</span>
				{/if}
			{/each}
		</div>
		<div class="Row">
			{#if new Date().getDay() == 5}
				<span class="DayOfWeek NavHighlight">Friday</span>
			{:else}
				<span class="DayOfWeek">Friday</span>
			{/if}
			{#each table.Friday as time}
				{#if new Date().getDay() == 5}
					<span class="highlight">{time}</span>
				{:else}
					<span>{time}</span>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	#root {
		display: grid;
		place-items: center;
	}

	#wrap {
		display: flex;
		background-color: #252525;
		padding: 20px;
		border-radius: 20px;
		flex-direction: column;
		gap: 10px;
	}
	.Row {
		display: flex;
		gap: 5px;
	}
	span {
		font-size: 20px;
		color: white;
		background-color: #3f3f3f;
		padding: 5px;
		border-radius: 10px;
		width: 140px;
		text-align: center;
	}
	.Header > span {
		background-color: #30492e;
	}
	.DayOfWeek {
		width: 120px;
		background-color: #30492e;
	}
	.highlight {
		background-color: #707070;
		display: block;
	}
	.NavHighlight {
		background-color: #3b8235;
		display: block;
	}
</style>
