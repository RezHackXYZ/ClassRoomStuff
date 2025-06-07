<script>
	import { AnnounceUsingTTS } from "../../logic/AnnounceUsingTTS.js";
	import { CurrentText } from "../../logic/announcerData.svelte.js";
</script>

<button
	class="btn"
	onclick={() => AnnounceUsingTTS(CurrentText.v)}
>
	📢</button
>
