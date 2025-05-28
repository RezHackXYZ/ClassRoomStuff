<script>
	import { onMount } from "svelte";
	import Ascii from "./ascii.svelte";

	let FlagAscii = false;
	onMount(() => {
		FlagAscii = new URLSearchParams(window.location.search).has("ascii");
	});
</script>

<div class="flex h-17/20 items-center justify-center border-2 border-amber-400">
	<div class="w-2/3 gap-3 flex flex-col items-center">
		{#if FlagAscii == true}
			<Ascii />
		{:else}
			<img
				src="https://hc-cdn.hel1.your-objectstorage.com/s/v3/77e7a04f27807b4e0c16bcda09ea222f9e091616_group_18.svg"
				alt="ClassRoomStuff Logo"
				class="w-[600px]"
			/>
		{/if}
		<h1 class="text-center text-5xl">🎓 Your One-Stop Toolkit for Interactive Classrooms!</h1>
		<button class="btn">Get Stated</button>
	</div>
</div>
