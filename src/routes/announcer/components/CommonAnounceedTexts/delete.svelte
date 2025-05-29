<script>
	import { DeleteMostUsedAnnouncement } from "../../logic/AddAndDeleteMostUsedAnnouncements.js";

	let props = $props();
	let announcementID = props.announcementID;
</script>

<button
	class="cursor-pointer rounded-2xl bg-gray-800 p-2.5 text-2xl transition-all hover:scale-120 hover:-rotate-15 hover:bg-gray-600"
	aria-label="Delete announcement"
	onclick={() => DeleteMostUsedAnnouncement(announcementID)}
>
	<i class="nf nf-md-trash_can_outline"></i></button
>
