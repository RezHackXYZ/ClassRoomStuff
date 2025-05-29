<script>
	import { onMount } from "svelte";
	import Ascii from "./ascii.svelte";
	import RightCards from "./rightCards.svelte";

	let FlagAscii = false;
	onMount(() => {
		FlagAscii = new URLSearchParams(window.location.search).has("ascii");
	});
</script>

<div class="flex h-full flex-col items-center justify-between">
	<div class="flex h-full w-full items-center justify-around">
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
				<span class="inline-block">
					<span class="inline-flex items-center gap-1 rounded-full bg-blue-800 px-3 py-1 text-3xl">
						<i class="nf nf-cod-sparkle"></i>
						<span>ultimate</span>
						<i class="nf nf-cod-sparkle"></i>
					</span>
				</span>
				classroom
				<span class="inline-block">
					<span class="inline-flex items-center gap-1 rounded-full bg-green-800 px-3 py-1 text-3xl">
						<i class="nf nf-cod-tools"></i>
						<span>toolkit</span>
						<i class="nf nf-cod-tools"></i>
					</span>
				</span>
				for all the teachers and students needs!
			</h1>
		</div>
		<RightCards />
	</div>
	<div class="m-3 w-fit rounded-full bg-gray-900 px-3 py-1 text-xl text-gray-500">
		<i class="nf-fa-angles_down nf"></i>
		Scroll to see more tools!
		<i class="nf-fa-angles_down nf"></i>
	</div>
</div>
