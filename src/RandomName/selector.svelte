<script>
	import { RandomNamesState, SelectStudent } from "./main.svelte";
</script>

<div id="root">
	<p>The latest selected student is:</p>
	<h1>{RandomNamesState.selectedStudent}</h1>

	<div id="options">
		<button
			aria-label="Back to main menu"
			id="selectStudent"
			onclick={() => {
				SelectStudent();
			}}
			><span class="front">
				<span>Select a random student</span>
			</span></button
		>
		<div>
			{#if RandomNamesState.Selected.length > 0}
				<button
					aria-label="Back to main menu"
					onclick={() => {
						if (
							confirm(
								"Are you sure you want to reset all the Selected names? This action cannot be undone."
							)
						) {
							RandomNamesState.NotSelectedYet = [
								...RandomNamesState.NotSelectedYet,
								...RandomNamesState.Selected,
							];
							RandomNamesState.Selected = [];
							RandomNamesState.selectedStudent = "None yet!";
						}
					}}
					><span class="front">
						<span>Reset selected</span>
					</span></button
				>{/if}
			{#if RandomNamesState.Absent.length > 0}
				<button
					aria-label="Back to main menu"
					onclick={() => {
						if (
							confirm(
								"Are you sure you want to reset all the names? this will also move all the students to the 'Not Selected Yet' list. This action cannot be undone."
							)
						) {
							RandomNamesState.NotSelectedYet = [
								...RandomNamesState.NotSelectedYet,
								...RandomNamesState.Absent,
							];
							RandomNamesState.Absent = [];
							RandomNamesState.selectedStudent = "None yet!";
						}
					}}
					><span class="front">
						<span>Reset absentees</span>
					</span></button
				>{/if}
		</div>
	</div>
</div>

<style>
	#root {
		background-color: #222;
		border-radius: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		padding-bottom: 0px;
		margin: 20px;
	}

	#options {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	button {
		background: #292929;
		border-radius: 12px;
		border: none;
		margin: 10px;
		padding: 2px 0px;
		cursor: pointer;
		outline-offset: 4px;
		width: fit-content;
		margin-bottom: 20px;
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
		gap: 5px;
	}

	h1 {
		font-size: 120px;
		margin: 10px;
	}

	p {
		color: #aaa;
		margin: 0;
	}

	#selectStudent > .front {
		background-color: #0e71e2;
	}
</style>
