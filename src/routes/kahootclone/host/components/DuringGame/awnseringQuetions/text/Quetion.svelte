<script>
	import { currentQuestion, CurrentQuestionDetails } from "../../../../logic/HostsData.svelte.js";
</script>

<h1 class="m-[0] text-center text-5xl">
	Q{currentQuestion.v + 1}. {CurrentQuestionDetails.v.question}
</h1>
{#if CurrentQuestionDetails.v.media != null}
	<div class="mb-3 flex items-center justify-center">
		{#if CurrentQuestionDetails.v.media.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i)}
			<video
				src={CurrentQuestionDetails.v.media}
				class="max-h-[300px] max-w-[500px] rounded-lg"
				controls
			/>
		{:else}
			<img
				src={CurrentQuestionDetails.v.media}
				class="max-h-[300px] max-w-[500px] rounded-lg"
				alt="Question media"
			/>
		{/if}
	</div>
{/if}
