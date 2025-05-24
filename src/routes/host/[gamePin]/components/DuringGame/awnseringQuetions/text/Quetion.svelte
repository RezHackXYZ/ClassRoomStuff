<script>
	import { currentQuestion, CurrentQuestionDetails } from "../../../../logic/HostsData.svelte.js";
</script>

<h1 class="m-[0] text-center text-5xl">
	Q{currentQuestion.v + 1}. {CurrentQuestionDetails.v.question}
</h1>
