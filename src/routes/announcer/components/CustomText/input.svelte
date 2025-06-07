<script>
	import { CurrentText } from "../../logic/announcerData.svelte.js";
</script>

<input
	bind:value={CurrentText.v}
	placeholder="Type in here what you want to announce"
	class="input"
/>
