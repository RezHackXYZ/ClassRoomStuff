<script>
	import { CurrentQuestion, TotalQuestions } from "../../logic/HostsData.svelte.js";
</script>

<div class="mb-5 flex w-full items-center justify-center gap-3">
	<h3>Question {CurrentQuestion.v + 1} of {TotalQuestions.v}</h3>
	<div class="flex-1 rounded-full border-2 border-gray-600">
		<div
			class="h-4 rounded-full bg-green-600 transition-all duration-700"
			style="width: {(CurrentQuestion.v / TotalQuestions.v) * 100}%;"
		></div>
	</div>
</div>
