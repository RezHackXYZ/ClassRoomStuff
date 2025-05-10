<script module>
	import Router from "svelte-spa-router";
	import Wordle from "./wordle/game.svelte";
	import TypeSelector from "./SelectionMenue/TypeSelector.svelte";
	import IdleScreen from "./IdleScreen/main.svelte";
	import RandomName from "./RandomName/main.svelte";
	import Announcer from "./announcer/main.svelte";
	import { confettiAnimation } from "./Confetti.js";

	let routes = {
		"/": TypeSelector,
		"/Wordle": Wordle,
		"/IdleScreen": IdleScreen,
		"/RandomName": RandomName,
		"/announcer": Announcer,
	};
	let ShowAlertDiv = $state(false);
	let ShowAlertText = $state("this Code is bad");
	let ShowAlertType = $state("Error");

	export function ShowAlert(text, type) {
		ShowAlertDiv = true;
		ShowAlertType = type;

		ShowAlertText = text;
		setTimeout(() => {
			ShowAlertDiv = false;
		}, 1500);

		if (type == "success") {
			confettiAnimation();
		}
	}
</script>

<div id="root">
	<Router {routes} />
</div>
{#if ShowAlertDiv == true}
	<div id="alert">
		<h1 class={ShowAlertType}>{ShowAlertText}</h1>
	</div>
{/if}

<style>
	:root {
		background-color: #121212;
		color: white;
	}

	#root {
		height: 100%;
		margin: 0;
		font-family: "Sour Gummy", sans-serif;
	}

	#alert {
		position: fixed;
		top: 10px;
		color: white;
		left: 50%;
		transform: translate(-50%, 0);
		h1 {
			margin: 0;
			padding: 10px 20px;
			border-radius: 20px;
			font-family: "Sour Gummy", sans-serif;
		}
		.error {
			background-color: #830000;
		}
		.warning {
			background-color: #975b00;
		}
		.success {
			background-color: #006b00;
		}
	}
</style>
