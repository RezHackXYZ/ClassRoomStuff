<script>
	import Question from "./text/Quetion.svelte";
	import Awnsers from "./Awnsers.svelte";
	import ProgressBar from "./ProgressBar.svelte";
	import SelectFirst from "./buttons/SelectFirst.svelte";
	import Wait from "./text/wait.svelte";
	import SubmitAwnser from "./buttons/submitAwnser.svelte";
	import { CurrentQuestion, Selected, questions } from "../../logic/HostsData.svelte.js";
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div
		class="flex max-w-[700px] flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg"
	>
		<ProgressBar />
		{#if CurrentQuestion.v != null}
			<Question />

			{#if questions.v.media != null}
				<div class="mb-3 flex items-center justify-center">
					{#if questions.v.media.match(/\.(mp4|webm|ogg|mov|avi|mkv)$/i)}
						<video
							src={questions.v.media}
							class="max-h-[300px] max-w-[500px] rounded-lg"
							controls
						/>
					{:else}
						<img
							src={questions.v.media}
							class="max-h-[300px] max-w-[500px] rounded-lg"
							alt="Question media"
						/>
					{/if}
				</div>
			{/if}

			<Awnsers />
			{#if Selected.v != null}
				<SubmitAwnser />
			{:else}
				<SelectFirst />
			{/if}
		{:else}
			<Wait />
		{/if}
	</div>
</div>
