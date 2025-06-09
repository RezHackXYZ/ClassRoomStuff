<script>
	import Buttons from "./buttons.svelte";
	import Card from "./card.svelte";
	import StatsAndButtons from "./StatsAndButtons.svelte";
</script>

<div class="flex h-full flex-col">
	<div class="flex flex-1 flex-col items-center justify-center gap-5">
		<div class="flex flex-col text-center gap-1"><Card /></div>
		<div class="flex gap-4">
			<Buttons />
		</div>
	</div>
	<div class="flex items-center justify-between p-2 text-gray-700">
		<StatsAndButtons />
	</div>
</div>
