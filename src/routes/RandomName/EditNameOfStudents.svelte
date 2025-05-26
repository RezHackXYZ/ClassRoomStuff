<script>
	import { newNames, RandomNamesState } from "./+page.svelte";

	let names =
		RandomNamesState.NotSelectedYet.join("\n") +
		"\n" +
		RandomNamesState.Selected.join("\n") +
		"\n" +
		RandomNamesState.Absent.join("\n");

	let namesArray = [];
</script>

<div id="root">
	<div id="root">
		<h1>Edit Names</h1>
		<p></p>
		<textarea
			bind:value={names}
			id="box"
			onchange={() => {
				let namesArray = names.split("\n");
				newNames(namesArray);
			}}
		></textarea>
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
	}

	#box {
		width: 100%;
		height: 500px;
		background-color: #121212;
		color: white;
		border-radius: 10px;
		resize: vertical;
		font-size: 20px;
	}
</style>
