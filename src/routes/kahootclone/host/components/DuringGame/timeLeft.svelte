<script>
	import { TotalTimeLeft, timeLeft } from "../../logic/HostsData.svelte.js";
</script>

{#if TotalTimeLeft.v != null}
	<div class="mt-2 mb-3 flex w-full flex-col rounded-2xl border-2 border-green-400 p-2">
		<h3>{timeLeft.v}sec out of {TotalTimeLeft.v}secs is left</h3>
		<div class="flex-1 rounded-full border-2 border-gray-600">
			<div
				class="h-4 rounded-full bg-green-600 transition-all duration-500"
				style="width: {(timeLeft.v / TotalTimeLeft.v) * 100}%;"
			></div>
		</div>
	</div>
{/if}
