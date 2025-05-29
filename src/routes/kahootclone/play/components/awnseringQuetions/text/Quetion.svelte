<script>
	import { CurrentQuestion, questions } from "../../../logic/HostsData.svelte.js";
</script>

<h1 class="m-[0] text-center text-5xl">
	Q{CurrentQuestion.v + 1}. {questions.v.question}
</h1>
