<script>
	import Nav from "./nav.svelte";
	import "./tailwind.css";

	import { Toaster } from "svelte-5-french-toast";
	let { children } = $props();
</script>

<Toaster />
<div class="h-full">
	<!--
	will be used for the nav bar later as i asked my friend to 
	make a design for it and the whole app so ill make it 
	functional once he gives me the design

	<div class="m-3 flex w-[calc(100%-1.5rem)] items-center justify-between rounded border-2 p-1">
		<Nav />
	</div>
	-->

	{@render children()}
</div>
