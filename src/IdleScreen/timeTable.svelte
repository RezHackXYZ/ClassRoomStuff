<script>
	let table = {
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
			"Social Science",
			"Hindi",
			"Science",
		],
		Tuesday: [
			"English",
			"GK",
			"Math",
			"Lunch",
			"Social Science",
			"Hindi",
			"Science",
		],
		Wednesday: [
			"English",
			"Art & Craft",
			"Math",
			"Lunch",
			"Social Science",
			"Hindi",
			"Science",
		],
		Thursday: [
			"English",
			"Sanskrit",
			"Math",
			"Lunch",
			"Social Science",
			"Hindi",
			"Science",
		],
		Friday: [
			"English",
			"Computers",
			"Math",
			"Lunch",
			"Social Science",
			"Hindi",
			"Science",
		],
	};
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
			<span class="DayOfWeek">Monday</span>
			{#each table.Monday as time}
				<span>{time}</span>
			{/each}
		</div>
		<div class="Row">
			<span class="DayOfWeek">Tuesday</span>
			{#each table.Tuesday as time}
				<span>{time}</span>
			{/each}
		</div>
		<div class="Row">
			<span class="DayOfWeek">Wednesday</span>
			{#each table.Wednesday as time}
				<span>{time}</span>
			{/each}
		</div>
		<div class="Row">
			<span class="DayOfWeek">Thursday</span>
			{#each table.Thursday as time}
				<span>{time}</span>
			{/each}
		</div>
		<div class="Row">
			<span class="DayOfWeek">Friday</span>
			{#each table.Friday as time}
				<span>{time}</span>
			{/each}
		</div>
	</div>
</div>

<style>
	#root {
		display: grid;
		place-items: center;
		height: 50%;
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
		font-size: 25px;
		color: white;
		background-color: #3f3f3f;
		padding: 10px;
		border-radius: 10px;
		width: 170px;
		text-align: center;
	}

	.Header > span {
		background-color: #30492e;
	}
	.DayOfWeek {
		width: 150px;
		background-color: #30492e;
	}
</style>
