<script>
	import PlayingDisplay from "./components/DuringGame/display.svelte";

	import LobbyDisplay from "./components/lobby/display.svelte";
	import { Status,gamePin } from "./logic/HostsData.svelte.js";
	import { AutoUpdatePlayersList } from "./logic/UpdatePlayersList.js";
	import { GetCurrentPlayers } from "./logic/GetCurrentPlayers.js";
	import { onMount } from "svelte";
	
	onMount(() => {
		gamePin.v = new URLSearchParams(new URL(window.location.href).search).get("gamepin");



		console.log("Game Pin: " + gamePin.v);

		GetCurrentPlayers(gamePin.v);
		AutoUpdatePlayersList(gamePin.v);
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		{#if Status.v == "lobby"}
			<LobbyDisplay/>
		{:else if Status.v == "started"}
			<PlayingDisplay />
		{/if}
	</div>
</div>
