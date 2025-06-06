<script>
	import Nav from "./nav.svelte";
	import "./tailwind.css";

	import { Toaster } from "svelte-5-french-toast";
	let { children } = $props();

	import { page } from "$app/stores";
</script>

<Toaster />
{#if $page.url.pathname == "/"}
	<div class="h-full">
		{@render children()}
	</div>
{:else}
	<div class="flex h-full flex-col">
		<Nav />

		<div class="flex-1">{@render children()}</div>
	</div>
{/if}
