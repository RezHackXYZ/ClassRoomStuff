<script>
	import { AddMostUsedAnnouncement } from "../../logic/AddAndDeleteMostUsedAnnouncements.js";
	import { CurrentText } from "../../logic/announcerData.svelte.js";
</script>

{#if CurrentText.v}
	<div class="flex w-full justify-center mt-2">
		<button
			class="text-1xl w-fit cursor-pointer self-center rounded-2xl bg-gray-800 p-2.5 transition-all hover:scale-110 hover:bg-gray-600"
			onclick={() => {
				AddMostUsedAnnouncement(CurrentText.v);
				CurrentText.v = "";
			}}>Add "{CurrentText.v}" to "Reuse past announcements"</button
		>
	</div>
{/if}
