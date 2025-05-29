<script>
	import { onMount } from "svelte";
	import Ascii from "./ascii.svelte";
	import RightCards from "./rightCards.svelte";

	let FlagAscii = false;
	onMount(() => {
		FlagAscii = new URLSearchParams(window.location.search).has("ascii");
	});
</script>

<div class="flex  flex-col h-full justify-between items-center">
	<div class="flex h-full items-center justify-around w-full">
		<div class="flex w-[600px] flex-col items-baseline gap-3">
			{#if FlagAscii == true}
				<Ascii />
			{:else}
				<img
					src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/77e7a04f27807b4e0c16bcda09ea222f9e091616_group_18.svg"
					alt="ClassRoomStuff Logo"
					class="w-[600px]"
				/>
			{/if}
			<h1 class="text-center text-5xl">
				The
				<span class="rounded-full bg-blue-800 px-3 py-1 text-3xl">
					<i class="nf nf-cod-sparkle"></i> ultimate <i class="nf nf-cod-sparkle"></i>
				</span>
				classroom
				<span class="rounded-full bg-green-800 px-3 py-1 text-3xl">
					<i class="nf nf-cod-tools"></i> toolkit <i class="nf nf-cod-tools"></i>
				</span> for all the teachers and students needs!
			</h1>
		</div>
		<RightCards />
	</div>
	<div class="rounded-full bg-gray-900 px-3 py-1 text-xl text-gray-500 w-fit m-3">
		<i class="nf-fa-angles_down nf"></i>
		Scroll to see more tools!
		<i class="nf-fa-angles_down nf"></i>
	</div>
</div>
