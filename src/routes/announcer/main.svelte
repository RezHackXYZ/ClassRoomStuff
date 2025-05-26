<script>
	import ActualAnnouncer from "./ActualAnnouncer.svelte";
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
		<h1>Announcer</h1>
	</div>
	<div id="root">
		<ActualAnnouncer />
	</div>
</div>

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
</style>
