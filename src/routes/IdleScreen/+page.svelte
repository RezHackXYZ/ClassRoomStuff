<script module>
	import Time from "./time.svelte";
	import TimeTable from "./timeTable.svelte";
	import EditTimetableDiv from "./EditTimetable.svelte";

	function EditTimetable() {
		console.log("Edit timetable");
		TabOpen.v = true;
	}

	let TabOpen = $state({ v: false });

	export let ShowSeconds = $state({ v: true });
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
		<h1>Idle Screen</h1>
		<div>
			<button
				aria-label="Back to main menu"
				onclick={() => {
					ShowSeconds.v = !ShowSeconds.v;
					localStorage.setItem("ShowSeconds", String(ShowSeconds.v));
				}}
				><span class="front"
					>{#if ShowSeconds.v}Disable Seconds{:else}Enable Seconds{/if}</span
				></button
			><button
				aria-label="Back to main menu"
				onclick={() => EditTimetable()}
				><span class="front"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						fill="#FFFFFF"
						><path
							d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v200h-80v-40H200v400h280v80H200Zm0-560h560v-80H200v80Zm0 0v-80 80ZM560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"
						/></svg
					> Edit timetable
				</span></button
			>
		</div>
	</div>

	<div id="root">
		<TimeTable /><Time />
	</div>
</div>

{#if TabOpen.v !== false}
	<div id="UpperLayer">
		<div id="wrapClose">
			<EditTimetableDiv />
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
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	#root {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-evenly;
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

	#UpperLayer {
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
