<script>
	import StartGame from "./buttons/startGame.svelte";
	import Players from "./PlayersGUI/players.svelte";

	import { gamePin } from "../../logic/HostsData.svelte.js";

</script>

<h1 class="m-[0] text-9xl">HOSTING</h1>
<h1 class="m-[0] text-7xl">Game Pin:</h1>
<h1 class="m-[0] rounded-2xl bg-gray-700 pt-1.5 pr-2 pb-0 pl-2 font-mono text-5xl">
	{gamePin.v}
</h1>
<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=url:https://classroomstuff.xyz/kahootclone/join?gamepin={gamePin.v}" alt="qr to join game" class="m-5 h-36 w-36 rounded-lg border-2 border-gray-600" />
<Players />
<StartGame gamePin={gamePin.v} />
