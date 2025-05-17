<script>
	import { PeopleAwnseredQ, Totalplayers } from "./../../logic/HostsData.svelte.js";
</script>

<div class="mt-1 mb-3 flex w-full flex-col rounded-2xl border-2 border-green-400 p-2">
	<h3>{PeopleAwnseredQ.v} out of {Totalplayers.v} have awnsered the quetion</h3>
	<div class="flex-1 rounded-full border-2 border-gray-600">
		<div
			class="h-4 rounded-full bg-green-600 transition-all duration-500"
			style="width: {(PeopleAwnseredQ.v / Totalplayers.v) * 100}%;"
		></div>
	</div>
</div>
