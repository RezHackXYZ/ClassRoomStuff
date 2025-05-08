<script module>
	import { newTable } from "./timeTable.svelte";

	let table = JSON.parse(localStorage.getItem("TimeTable"));
</script>

<div id="root">
	<div id="root">
		<div id="wrap">
			<div id="left">
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
			<div id="right">
				<button
					onclick={() => {
							table.Times.push("");
							table.Monday.push("");
							table.Tuesday.push("");
							table.Wednesday.push("");
							table.Thursday.push("");
							table.Friday.push("");
							newTable(table);
							table = JSON.parse(
								localStorage.getItem("TimeTable"),
							);
						
					}}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#FFFFFF"
						><path
							d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
						/></svg
					> <br />Add<br />new<br />Period
				</button>
				<button
					onclick={() => {
						if (
							confirm(
								"This will remove the last period, it is not reversable! are you sure?",
							)
						) {
							table.Times.pop();
							table.Monday.pop();
							table.Tuesday.pop();
							table.Wednesday.pop();
							table.Thursday.pop();
							table.Friday.pop();
							newTable(table);
							table = JSON.parse(
								localStorage.getItem("TimeTable"),
							);
						}
					}}
					><svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#FFFFFF"
						><path
							d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
						/></svg
					><br />
					Delete<br />last<br />Period
				</button>
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
		gap: 20px;
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

	#left {
		gap: 5px;
		display: flex;
		flex-direction: column;
	}

	#right {
		gap: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	#right > button {
		background-color: rgb(63, 63, 63);
		color: white;
		border: 2px solid white;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
	}

	#right > button:hover {
		transform: scale(1.2);
		background-color: rgb(50, 50, 50);
	}
</style>
