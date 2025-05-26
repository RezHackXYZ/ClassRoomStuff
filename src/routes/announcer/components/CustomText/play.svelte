<script>
	import { AnnounceUsingTTS } from "../../logic/AnnounceUsingTTS.js";
	import { CurrentText } from "../../logic/announcerData.svelte.js";
</script>

<button
	class="cursor-pointer rounded-2xl bg-gray-800 p-2.5 text-2xl transition-all hover:scale-120 hover:-rotate-15 hover:bg-gray-600"
	onclick={() => AnnounceUsingTTS(CurrentText.v)}
>
	📢</button
>
