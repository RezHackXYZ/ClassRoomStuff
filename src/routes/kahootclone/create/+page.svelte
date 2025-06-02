<script>
	import HowTheQuestionWillLook from "./HowTheQuestionWillLook.svelte";
	import QuestionsList from "./QuestionsList.svelte";
	import QuestionOptions from "./QuestionOptions.svelte";
	import Buttons from "./Buttons.svelte";

	import { QuestionsData } from "./create.svelte.js";
	import { onMount } from "svelte";

	onMount(() => {
		$inspect(QuestionsData.v);
	});
</script>

<div class="flex h-full justify-between">
	<QuestionsList />
	<div class="flex h-full w-[54%] flex-col gap-2"><HowTheQuestionWillLook /><Buttons /></div>
	<QuestionOptions />
</div>
