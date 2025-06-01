<script>
	import { AnnounceUsingTTS } from "../../logic/AnnounceUsingTTS.js";

	let props = $props();
	let announcementText = props.announcementText;
</script>

<button
	class="w-full cursor-pointer rounded-2xl bg-gray-800 p-2.5 text-2xl transition-all hover:scale-105 hover:bg-gray-600"
	onclick={() => AnnounceUsingTTS(announcementText)}
>
	📢 {announcementText}
</button>
