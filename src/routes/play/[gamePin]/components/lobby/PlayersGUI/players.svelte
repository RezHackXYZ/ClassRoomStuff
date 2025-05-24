<script>
	import { players } from "../../../logic/HostsData.svelte.js";
	import PlayerBadge from "./playerBadge.svelte";
</script>

<h1 class="m-[0] mt-5 text-6xl">Players Joined:</h1>
<h1 class="m-[0] text-4xl text-gray-400">(Total Players: {players.v.length})</h1>
<div class="mt-2 flex flex-wrap justify-center gap-2">
	{#each players.v as playerName}
		<PlayerBadge {playerName} />
	{/each}
</div>
