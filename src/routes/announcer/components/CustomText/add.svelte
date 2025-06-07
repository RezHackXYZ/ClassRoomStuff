<script>
	import { AddMostUsedAnnouncement } from "../../logic/AddAndDeleteMostUsedAnnouncements.js";
	import { CurrentText } from "../../logic/announcerData.svelte.js";
</script>

{#if CurrentText.v}
	<div class="flex w-full justify-center mt-2">
		<button
			class="btn dull"
			onclick={() => {
				AddMostUsedAnnouncement(CurrentText.v);
				CurrentText.v = "";
			}}>Add "{CurrentText.v}" to "Reuse past announcements"</button
		>
	</div>
{/if}
