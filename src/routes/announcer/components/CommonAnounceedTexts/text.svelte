<script>
	import { AnnounceUsingTTS } from "../../logic/AnnounceUsingTTS.js";

	let props = $props();
	let announcementText = props.announcementText;
</script>

<button
	class="btn w-full"
	onclick={() => AnnounceUsingTTS(announcementText)}
>
	📢 {announcementText}
</button>
