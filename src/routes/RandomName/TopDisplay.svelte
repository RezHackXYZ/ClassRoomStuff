<script context="module">
	import { RandomNamesState } from "./main.svelte";

	let DragTempName = "na";

	import "drag-drop-touch";
</script>

<div id="root">
	<div
		id="Selected"
		on:dragover|preventDefault
		role="list"
		aria-label="drag name to this list!"
		on:drop={(event) => {
			event.preventDefault();
			if (DragTempName !== "na") {
				RandomNamesState.Selected.push(DragTempName);
				DragTempName = "na";
			}
		}}
	>
		<h1>Selected</h1>
		<div class="wrap">
			{#each RandomNamesState.Selected as name, i}
				<span
					class="Selected"
					draggable="true"
					role="listitem"
					aria-label="drag name to different list!"
					on:dragstart={() => {
						setTimeout(() => {
							RandomNamesState.Selected.splice(i, 1);
							DragTempName = name;
						}, 100);
					}}
				>
					{name}
				</span>
			{/each}
		</div>
	</div>
	<hr />
	<div
		id="NotSelectedYet"
		on:dragover|preventDefault
		role="list"
		aria-label="drag name to this list!"
		on:drop={(event) => {
			event.preventDefault();
			if (DragTempName !== "na") {
				RandomNamesState.NotSelectedYet.push(DragTempName);
				DragTempName = "na";
			}
		}}
	>
		<h1>Not Selected Yet</h1>
		<div class="wrap">
			{#each RandomNamesState.NotSelectedYet as name, i}
				<span
					class="NotSelectedYet"
					draggable="true"
					role="listitem"
					aria-label="drag name to different list!"
					on:dragstart={() => {
						setTimeout(() => {
							RandomNamesState.NotSelectedYet.splice(i, 1);
							DragTempName = name;
						}, 100);
					}}
				>
					{name}
				</span>
			{/each}
		</div>
	</div>
	<hr />
	<div
		id="Absent"
		on:dragover|preventDefault
		role="list"
		aria-label="drag name to this list!"
		on:drop={(event) => {
			event.preventDefault();
			if (DragTempName !== "na") {
				RandomNamesState.Absent.push(DragTempName);
				DragTempName = "na";
			}
		}}
	>
		<h1>Absent</h1>
		<div class="wrap">
			{#each RandomNamesState.Absent as name, i}
				<span
					draggable="true"
					class="Absent"
					role="listitem"
					aria-label="drag name to different list!"
					on:dragstart={() => {
						setTimeout(() => {
							RandomNamesState.Absent.splice(i, 1);
							DragTempName = name;
						}, 100);
					}}
				>
					{name}
				</span>
			{/each}
		</div>
	</div>
</div>

<style>
	#root {
		display: flex;
		overflow-x: hidden;
	}

	span {
		margin: 5px;
		padding: 5px;
		border-radius: 5px;
		background-color: #4d4d4d;
		color: white;
		font-size: 30px;
	}

	h1 {
		text-align: center;
		font-size: 40px;
		margin: 0;
	}

	#NotSelectedYet,
	#Selected {
		min-width: 40%;
		max-width: 40%;
	}

	#Absent {
		min-width: 20%;
		max-width: 20%;
	}

	.wrap {
		display: flex;
		flex-wrap: wrap;
		height: fit-content;
		justify-content: center;
	}

	.NotSelectedYet {
		color: #ffe677;
	}

	.Selected {
		color: #a3ffa3;
	}

	.Absent {
		color: #242424;
	}
</style>
