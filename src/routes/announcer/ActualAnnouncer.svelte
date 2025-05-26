<script>
	let text = $state("");

	function speak() {
		window.speechSynthesis.speak(
			Object.assign(new SpeechSynthesisUtterance(text), {
				rate: 0.5,
			})
		);
	}

	let TempelateCommonAnounce = $state(["Please be quiet"]);

	let CommonAnounce = $state([]);

	export function newNames(Names) {
		localStorage.setItem("CommonAnounce", JSON.stringify(Names));
	}

	let TempCommonAnounce = localStorage.getItem("CommonAnounce") || "";

	if (TempCommonAnounce != "") {
		CommonAnounce = JSON.parse(TempCommonAnounce);
	} else {
		CommonAnounce = $state.snapshot(TempelateCommonAnounce);
		localStorage.setItem("CommonAnounce", JSON.stringify(CommonAnounce));
	}
</script>

<div id="root">
	<div id="wrap">
		<h1>Most Announced announcements</h1>

		<div id="mostanouncedanounements">
			{#each CommonAnounce as anouncement, i}
				<div>
					<button
						class="anuncement"
						onclick={() => {
							text = anouncement;
							speak();
						}}
					>
						{anouncement}
					</button>
					<button
						aria-label="Delete anouncement"
						onclick={() => {
							if (
								confirm(
									"Are you sure you want to delete this anouncement?"
								)
							) {
								CommonAnounce.splice(i, 1);
								localStorage.setItem(
									"CommonAnounce",
									JSON.stringify(CommonAnounce)
								);
							}
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="15px"
							viewBox="0 -960 960 960"
							width="15px"
							fill="#FFFFFF"
							><path
								d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
							/></svg
						></button
					>
				</div>
			{/each}
		</div>

		<hr />

		<h1>Or announce something else</h1>
		<div>
			<input
				bind:value={text}
				placeholder="Type in here what you want to announce"
			/>
			<button onclick={speak}>Play</button>
		</div>
		{#if text}
			<button
				id="new"
				onclick={() => {
					CommonAnounce.push(text);
					text = "";
					localStorage.setItem(
						"CommonAnounce",
						JSON.stringify(CommonAnounce)
					);
				}}>Add "{text}" to "Most Announced announcements"</button
			>
		{/if}
	</div>


</div>

<style>
	#root {
		height: 100%;
		display: grid;
		place-items: center;
	}

	#wrap {
		display: flex;
		flex-direction: column;
		gap: 5px;
		padding: 20px;
		border-radius: 20px;
		width: fit-content;
	}

	input {
		font-size: 20px;
		padding: 10px;
		border-radius: 12px;
		border: none;
		background-color: #292929;
		color: white;
		width: 400px;
	}
	button {
		font-size: 20px;
		padding: 10px;
		border-radius: 12px;
		border: none;
		background-color: #292929;
		color: white;
		cursor: pointer;
		transition: all 0.1s ease-in-out;
	}

	button:hover {
		background-color: #414141;
		transform: rotateZ(-15deg) scale(1.2);
	}

	hr {
		width: 100%;
		height: 2px;
		background-color: #292929;
		border: none;
		margin: 0;
	}

	h1 {
		text-align: center;
		margin: 0;
		font-size: 30px;
	}

	#mostanouncedanounements {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
	}
	.anuncement:hover {
		transform: scale(1.1);
	}
	.anuncement {
		width: calc(100% - 40px);
	}

	#new {
		width: fit-content;
		align-self: center;
		font-size: 15px;
	}

	#new:hover {
		transform: scale(1.1);
	}
</style>
