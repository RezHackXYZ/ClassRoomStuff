<script>
	import { RandomNamesState, SelectStudent } from "./main.svelte";
</script>

<div id="root">
	<p>The Selected Student is</p>
	<h1>{RandomNamesState.selectedStudent}</h1>
	<p>(The Selected Student's name will be auto moved to the Selected list)</p>

	<button
		aria-label="Back to main menu"
		onclick={() => {
			SelectStudent();
		}}
		><span class="front"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#FFFFFF"
				><path
					d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
				/></svg
			>

			{#if RandomNamesState.selectedStudent !== "none :("}
				<span>Select Another Student</span>
			{:else}
				<span>Select one now :D</span>{/if}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				fill="#FFFFFF"
				><path
					d="M0-240v-63q0-43 44-70t116-27q13 0 25 .5t23 2.5q-14 21-21 44t-7 48v65H0Zm240 0v-65q0-32 17.5-58.5T307-410q32-20 76.5-30t96.5-10q53 0 97.5 10t76.5 30q32 20 49 46.5t17 58.5v65H240Zm540 0v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5q72 0 116 26.5t44 70.5v63H780Zm-455-80h311q-10-20-55.5-35T480-370q-55 0-100.5 15T325-320ZM160-440q-33 0-56.5-23.5T80-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T160-440Zm640 0q-33 0-56.5-23.5T720-520q0-34 23.5-57t56.5-23q34 0 57 23t23 57q0 33-23 56.5T800-440Zm-320-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-80q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560Zm1 240Zm-1-280Z"
				/></svg
			>
		</span></button
	>
</div>

<style>
	#root {
		background-color: #222;
		border-radius: 30px 30px 0 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 20px;
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
		margin-bottom: 40px;
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
</style>
