<script>
	import { DeleteMostUsedAnnouncement } from "../../logic/AddAndDeleteMostUsedAnnouncements.js";

	let props = $props();
	let announcementID = props.announcementID;
</script>

<button
	class="btn dull"
	aria-label="Delete announcement"
	onclick={() => DeleteMostUsedAnnouncement(announcementID)}
>
	<i class="nf nf-md-trash_can_outline"></i></button
>
