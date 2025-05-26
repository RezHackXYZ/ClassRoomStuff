<script>
	import {  SetQuestionsToDemoQuestions } from '../../logic/GameCreateData.svelte.js';
</script>

<button
	onclick={() => SetQuestionsToDemoQuestions()}
	class="-mt-5 mb-3 flex h-fit cursor-pointer items-center justify-center rounded-xl bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
	><svg
		xmlns="http://www.w3.org/2000/svg"
		height="24px"
		viewBox="0 -960 960 960"
		width="24px"
		fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg
	>Use demo questions</button
>
