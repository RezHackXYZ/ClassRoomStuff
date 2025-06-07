<script>
	import { PlayingAnnouncement, CurrentText } from "./logic/announcerData.svelte.js";

	import List from "./components/CommonAnounceedTexts/list.svelte";
	import Add from "./components/CustomText/add.svelte";
	import CustomText from "./components/CustomText/CustomText.svelte";

	import { onMount } from "svelte";
	import { LoadMostUsedAnnouncement } from "./logic/LoadMostUsedAnnouncement.js";
	onMount(() => LoadMostUsedAnnouncement());
</script>

<div class="flex h-full flex-col items-center justify-center gap-5 p-5">
	<div class="w-fit rounded border-2 p-3">
		{#if PlayingAnnouncement.v == true}
			<p class="text-center text-5xl">{CurrentText.v}</p>
		{:else}
			<h1 class="text-center text-4xl">Reuse past announcements:</h1>
			<List />
			<hr class="my-5 w-full border-gray-600" />
			<h1 class="text-center text-4xl">Or announce something new:</h1>
			<CustomText />
			<Add />{/if}
	</div>
</div>
