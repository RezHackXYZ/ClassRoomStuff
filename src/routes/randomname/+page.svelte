<script module>
	import Selector from "./selector.svelte";
	import TopDisplay from "./TopDisplay.svelte";
	import EditNameOfStudents from "./EditNameOfStudents.svelte";
	import toast from "svelte-5-french-toast";
	export let RandomNamesState = $state({
		NotSelectedYet: [],
		Selected: [],
		Absent: [],
		selectedStudent: "None yet!",
	});

	export function SelectStudent() {
		if (RandomNamesState.NotSelectedYet.length != 0) {
			let randomIndex = Math.floor(Math.random() * RandomNamesState.NotSelectedYet.length);
			RandomNamesState.selectedStudent = RandomNamesState.NotSelectedYet[randomIndex];

			RandomNamesState.Selected = [
				RandomNamesState.NotSelectedYet[randomIndex],
				...RandomNamesState.Selected,
			];
			RandomNamesState.NotSelectedYet.splice(randomIndex, 1);
		} else {
			toast.error("All students have been selected.");
		}
	}

	export let TabOpen = $state({
		v: false,
	});

	export function newNames(Names) {
		//localStorage.setItem("Names", JSON.stringify(Names));
		RandomNamesState.NotSelectedYet = Names;
		RandomNamesState.Selected = [];
		RandomNamesState.Absent = [];
		RandomNamesState.selectedStudent = "None yet!";
	}

	let TempelateNames = ["John", "Jane", "Alice", "Bob"];

	//let TempNames = localStorage.getItem("Names") || "";
	let TempNames = "";

	if (TempNames != "") {
		RandomNamesState.NotSelectedYet = JSON.parse(TempNames);
		RandomNamesState.Selected = [];
		RandomNamesState.Absent = [];
		RandomNamesState.selectedStudent = "None yet!";
	} else {
		newNames($state.snapshot(TempelateNames));
	}
</script>

<div id="wrap">
	<div id="root">
		<Selector />
		<div id="listWrap"><TopDisplay /></div>
	</div>
</div>

{#if TabOpen.v !== false}
	<div id="UperLayer">
		<div id="wrapClose">
			<EditNameOfStudents />
			<button class="close" onclick={() => (TabOpen.v = false)} aria-label="close">CLOSE</button>
		</div>
	</div>
{/if}

<style>
	#wrap {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	#nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #121212;
		color: white;
	}

	button {
		background: #292929;
		border-radius: 12px;
		border: none;
		margin: 10px;
		padding: 2px 0px;
		cursor: pointer;
		outline-offset: 4px;
		max-width: 400px;
	}
	button:hover .front {
		transform: translateY(-7px);
	}

	button:active .front {
		transform: translateY(-2px);
	}

	.front {
		display: flex;
		text-align: center;
		align-items: center;
		padding: 5px;
		border-radius: 12px;

		background: #4d4d4d;
		color: white;
		transform: translateY(-4px);
		transition: all 0.1s ease-in-out;
		font-size: 25px;
	}

	#root {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	h1 {
		text-align: center;
		margin: 5px 0px;
		text-decoration: underline #444;
		position: fixed;
		top: 0;
		left: 50%;
		transform: translate(-50%, 0);
	}

	span {
		font-size: 0.5em;
		text-decoration: none;
		color: #444;
	}

	#listWrap {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	#UperLayer {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(5px);
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
</style>
