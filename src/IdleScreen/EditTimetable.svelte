<script>
	import { newTable } from "./timeTable.svelte";

	let table = JSON.parse(localStorage.getItem("TimeTable"));
</script>

<div id="root">
	<div id="root">
		<div id="wrap">
			<div class="Header Row">
				<span class="DayOfWeek" style="Opacity: 0;"></span>
				{#each table.Times as time}
					<input
						type="text"
						onchange={() => {
							newTable(table);
						}}
						bind:value={time}
					/>
				{/each}
			</div>
			<div class="Row">
				<span class="DayOfWeek">Monday</span>
				{#each table.Monday as time}
					<input
						type="text"
						onchange={() => {
							newTable(table);
						}}
						bind:value={time}
					/>
				{/each}
			</div>
			<div class="Row">
				<span class="DayOfWeek">Tuesday</span>
				{#each table.Tuesday as time}
					<input
						type="text"
						onchange={() => {
							newTable(table);
						}}
						bind:value={time}
					/>
				{/each}
			</div>
			<div class="Row">
				<span class="DayOfWeek">Wednesday</span>
				{#each table.Wednesday as time}
					<input
						type="text"
						onchange={() => {
							newTable(table);
						}}
						bind:value={time}
					/>
				{/each}
			</div>
			<div class="Row">
				<span class="DayOfWeek">Thursday</span>
				{#each table.Thursday as time}
					<input
						type="text"
						onchange={() => {
							newTable(table);
						}}
						bind:value={time}
					/>
				{/each}
			</div>
			<div class="Row">
				<span class="DayOfWeek">Friday</span>
				{#each table.Friday as time}
					<input
						type="text"
						onchange={() => {
							newTable(table);
						}}
						bind:value={time}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	#root {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin: 10px;
		justify-content: center;
		background-color: #303030;
		padding: 10px;
		margin: 20px;
		border-radius: 10px;
		width: fit-content;
	}

	#wrap {
		display: flex;
		background-color: #252525;
		padding: 20px;
		border-radius: 20px;
		flex-direction: column;
		gap: 5px;
	}

	.Row {
		display: flex;
		gap: 2px;
	}

	span {
		font-size: 15px;
		color: white;
		background-color: #3f3f3f;
		padding: 5px;
		border-radius: 10px;
		width: 100px;
		text-align: center;
	}

	.DayOfWeek {
		width: 100px;
		background-color: #30492e;
	}

	input {
		font-size: 15px;
		color: white;
		background-color: #3f3f3f;
		padding: 5px;
		border-radius: 10px;
		width: 100px;
		text-align: center;
	}
	.Header > input {
		background-color: #30492e;
	}
</style>
