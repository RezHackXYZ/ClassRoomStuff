<script>
	import AwnserQuetion from "./components/awnseringQuetions/display.svelte";
	import LobbyDisplay from "./components/lobby/display.svelte";
	import { Status } from "./logic/HostsData.svelte.js";
	import { AutoUpdatePlayersList } from "./logic/UpdatePlayersList.js";
	import { GetCurrentPlayers } from "./logic/GetCurrentPlayers.js";
	import { IntializeGameStart } from "./logic/IntializeGameStart.js";
	import { onMount } from "svelte";
	import { name,playerid } from "./logic/HostsData.svelte.js";

	let gamePin;

	onMount(() => {
		name.v = new URLSearchParams(new URL(window.location.href).search).get("name");
		playerid.v = new URLSearchParams(new URL(window.location.href).search).get("playerid");
		gamePin = new URLSearchParams(new URL(window.location.href).search).get("gamepin");

		GetCurrentPlayers(gamePin);
		AutoUpdatePlayersList(gamePin);
		IntializeGameStart(gamePin);
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		{#if Status.v == "lobby"}
			<LobbyDisplay {gamePin} />
		{:else if Status.v == "started"}
			<AwnserQuetion />
		{/if}
	</div>
</div>
