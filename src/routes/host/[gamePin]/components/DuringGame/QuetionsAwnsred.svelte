<script>
	import { currentQuestion, totalQuetions } from "./../../logic/HostsData.svelte.js";
</script>

<div class="mt-1 mb-3 flex w-full flex-col rounded-2xl border-2 border-green-400 p-2">
	<h3>Question {currentQuestion.v + 1} of {totalQuetions.v} is beeing awnsered</h3>
	<div class="flex-1 rounded-full border-2 border-gray-600">
		<div
			class="h-4 rounded-full bg-green-600 transition-all duration-500"
			style="width: {(currentQuestion.v + 1 / totalQuetions.v) * 100}%;"
		></div>
	</div>
</div>
