<script>
	import PlayingDisplay from "./components/DuringGame/display.svelte";

	import LobbyDisplay from "./components/lobby/display.svelte";
	import { Status } from "./logic/HostsData.svelte.js";
	import { AutoUpdatePlayersList } from "./logic/UpdatePlayersList.js";
	import { GetCurrentPlayers } from "./logic/GetCurrentPlayers.js";
	import { onMount } from "svelte";

	export let data;
	const gamePin = data.gamePin;

	onMount(() => {
		GetCurrentPlayers(gamePin);
		AutoUpdatePlayersList(gamePin);
	});
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		{#if Status.v == "lobby"}
			<LobbyDisplay {gamePin} />
		{:else if Status.v == "started"}
			<PlayingDisplay />
		{/if}
	</div>
</div>