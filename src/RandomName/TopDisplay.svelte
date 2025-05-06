<script>
	import { RandomNamesState } from "./main.svelte";
</script>

<div id="root">
	<div id="NotSelectedYet">
		<h1>Not Selected Yet</h1>
		<div class="wrap">
			{#each RandomNamesState.NotSelectedYet as name}
				<span draggable="true" class="NotSelectedYet">
					{name}
				</span>
			{/each}
		</div>
	</div>
	<hr />
	<div id="Selected">
		<h1>Selected</h1>
		<div class="wrap">
			{#each RandomNamesState.Selected as name}
				<span draggable="true" class="Selected">
					{name}
				</span>
			{/each}
		</div>
	</div>
	<hr />
	<div id="Absent">
		<h1>Absent</h1>
		<div class="wrap">
			{#each RandomNamesState.Absent as name}
				<span draggable="true" class="Absent">
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
