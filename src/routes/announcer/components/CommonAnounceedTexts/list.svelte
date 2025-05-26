<script>
	import { MostUsedAnnouncements } from "../../logic/announcerData.svelte.js";
	import Delete from "./delete.svelte";
	import Text from "./text.svelte";
</script>

{#each MostUsedAnnouncements.v as announcementText, announcementID}
	<div class="flex w-full gap-2 mt-2">
		<Text {announcementText} />
		<Delete {announcementID} />
	</div>
{/each}
