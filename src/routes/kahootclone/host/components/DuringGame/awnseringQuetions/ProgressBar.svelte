<script>
	import { currentQuestion, totalQuetions } from "../../../logic/HostsData.svelte.js";
</script>

<div class="mt-5 mb-2 flex w-full items-center justify-center gap-3">
	<h3>Question {currentQuestion.v + 1} of {totalQuetions.v}</h3>
	<div class="flex-1 rounded-full border-2 border-gray-600">
		<div
			class="h-4 rounded-full bg-green-600 transition-all duration-700"
			style="width: {(currentQuestion.v / totalQuetions.v) * 100}%;"
		></div>
	</div>
</div>
