<script>
	import { newTable } from "./timeTable.svelte";

	let table = JSON.parse(localStorage.getItem("TimeTable"));

	let TabOpen = false;

	let csv = "";
</script>

<div class="root">
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
					table = JSON.parse(localStorage.getItem("TimeTable"));
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
				>Add new Period
			</button>
			<button
				onclick={() => {
					if (
						confirm(
							"This will remove the last period, it is not reversible! are you sure?"
						)
					) {
						table.Times.pop();
						table.Monday.pop();
						table.Tuesday.pop();
						table.Wednesday.pop();
						table.Thursday.pop();
						table.Friday.pop();
						newTable(table);
						table = JSON.parse(localStorage.getItem("TimeTable"));
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
				>
				Delete last Period
			</button>
			<button
				onclick={() => {
					TabOpen = true;
				}}
				><svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#FFFFFF"
					><path
						d="M230-360h120v-60H250v-120h100v-60H230q-17 0-28.5 11.5T190-560v160q0 17 11.5 28.5T230-360Zm156 0h120q17 0 28.5-11.5T546-400v-60q0-17-11.5-31.5T506-506h-60v-34h100v-60H426q-17 0-28.5 11.5T386-560v60q0 17 11.5 30.5T426-456h60v36H386v60Zm264 0h60l70-240h-60l-40 138-40-138h-60l70 240ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"
					/></svg
				>
				Import From CSV
			</button>
		</div>
	</div>
</div>

{#if TabOpen !== false}
	<div id="UpperLayer">
		<div id="wrapClose">
			<div class="root">
				<h1>Paste CSV here:</h1>
				<p></p>
				<textarea
					bind:value={csv}
					id="box"
					placeholder="Duration 1, Duration 2, Duration 3, Duration 4
Subject 01, Subject 02, Subject 03, Subject 04
Subject 08, Subject 09, Subject 10, Subject 12
Subject 13, Subject 13, Subject 14, Subject 15"
				></textarea>
			</div>
			<div id="options">
				<button
					class="close"
					id="cancel"
					onclick={() => (TabOpen = false)}
					aria-label="close">CANCEL</button
				>
				<button
					class="close"
					id="save"
					onclick={() => {
						TabOpen = false;
						let lines = csv.split("\n");
						table.Times = lines[0].split(",");
						table.Monday = lines[1].split(",");
						table.Tuesday = lines[2].split(",");
						table.Wednesday = lines[3].split(",");
						table.Thursday = lines[4].split(",");
						table.Friday = lines[5].split(",");
						newTable(table);
						table = JSON.parse(localStorage.getItem("TimeTable"));
					}}
					aria-label="close">SAVE</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.root {
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
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 100px;
	}

	#right > button:hover {
		transform: scale(1.2);
		background-color: rgb(50, 50, 50);
	}

	#UpperLayer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(10px);
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#wrapClose {
		display: flex;
		flex-direction: column;
	}

	.close {
		background-color: #2b2b2b;
		color: #888;
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
		align-self: center;
	}
	#box {
		width: 700px;
		height: 300px;
		background-color: #121212;
		color: white;
		border-radius: 10px;
		resize: vertical;
		font-size: 20px;
	}

	h1,
	p {
		margin: 0;
	}

	#options {
		display: flex;
		gap: 10px;
		justify-content: center;
	}

	#cancel {
		background-color: #580000;
		color: #ffffff;
	}

	#save {
		background-color: #004611;
		color: #ffffff;
	}
</style>
