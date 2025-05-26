<script>
	import { startGame } from "../../../logic/startGame.js";

	let props = $props();
</script>

<button
	class="mt-5 cursor-pointer rounded-2xl bg-green-700 p-2 text-4xl transition-all hover:scale-110 hover:-rotate-10"
	onclick={() => {
		startGame(props.gamePin);
	}}>Start the game</button
>
