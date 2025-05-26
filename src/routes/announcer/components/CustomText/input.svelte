<script>
	import { CurrentText } from "../../logic/announcerData.svelte.js";
</script>

<input
	bind:value={CurrentText.v}
	placeholder="Type in here what you want to announce"
	class="flex-1 rounded-2xl bg-gray-800 p-2.5 text-2xl"
/>
