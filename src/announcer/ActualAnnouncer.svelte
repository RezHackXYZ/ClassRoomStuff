<script>
	let text = "";

	function speak() {
		window.speechSynthesis.cancel();
		window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
	}
</script>

<div id="root">
	<input
		bind:value={text}
		placeholder="Type in here what you want to announce"
	/>
	<button onclick={speak}>Play</button>
</div>

<style>
	#root {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 20px;
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
</style>
