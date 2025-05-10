<script module>
	import Selector from "./selector.svelte";
	import TopDisplay from "./TopDisplay.svelte";
	import EditNameOfStudents from "./EditNameOfStudents.svelte";
	import {ShowAlert} from "../app.svelte";

	export let RandomNamesState = $state({
		NotSelectedYet: [],
		Selected: [],
		Absent: [],
		selectedStudent: "None yet!",
	});

	export function SelectStudent() {
		if (RandomNamesState.NotSelectedYet.length != 0) {
			let randomIndex = Math.floor(
				Math.random() * RandomNamesState.NotSelectedYet.length
			);
			RandomNamesState.selectedStudent =
				RandomNamesState.NotSelectedYet[randomIndex];

			RandomNamesState.Selected = [
				RandomNamesState.NotSelectedYet[randomIndex],
				...RandomNamesState.Selected,
			];
			RandomNamesState.NotSelectedYet.splice(randomIndex, 1);
		} else {
			ShowAlert("All students have been selected.", "warning");
		}
	}

	let TabOpen = $state({
		v: false,
	});

	export function newNames(Names) {
		localStorage.setItem("Names", JSON.stringify(Names));
		RandomNamesState.NotSelectedYet = Names;
		RandomNamesState.Selected = [];
		RandomNamesState.Absent = [];
		RandomNamesState.selectedStudent = "None yet!";
	}

	let TempelateNames = ["John", "Jane", "Alice", "Bob"];

	let TempNames = localStorage.getItem("Names") || "";

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
	<div id="nav">
		<a href="#/" aria-label="Back to main menu"
			><button aria-label="Back to main menu"
				><span class="front"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#FFFFFF"
						><path
							d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
						/></svg
					> GO BACK
				</span></button
			></a
		>
		<h1>Random student selector</h1>
		<div>
			<button
				aria-label="Back to main menu"
				onclick={() => (TabOpen.v = true)}
				><span class="front"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#FFFFFF"
						><path
							d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"
						/></svg
					> Edit list of names
				</span></button
			>
		</div>
	</div>
	<div id="root">
		<Selector />
		<div id="listWrap"><TopDisplay /></div>
	</div>
</div>

{#if TabOpen.v !== false}
	<div id="UperLayer">
		<div id="wrapClose">
			<EditNameOfStudents />
			<button
				class="close"
				onclick={() => (TabOpen.v = false)}
				aria-label="close">CLOSE</button
			>
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
		font-family: "JetBrains Mono", monospace;
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
