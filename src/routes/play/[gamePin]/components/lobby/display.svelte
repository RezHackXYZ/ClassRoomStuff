<script>
	import Players from "./PlayersGUI/players.svelte";

	let props = $props();
    let gamePin = props.gamePin;
</script>

<h1 class="m-[0] text-9xl">PLAYING</h1>
<h1 class="m-[0] text-7xl">Game Pin:</h1>
<h1 class="m-[0] rounded-2xl bg-gray-700 pt-1.5 pr-2 pb-0 pl-2 font-mono text-5xl">
	{gamePin}
</h1>
<Players />