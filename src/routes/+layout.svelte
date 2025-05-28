<script>
	import "./app.css";

	import { Toaster } from "svelte-5-french-toast";
	let { children } = $props();
</script>

<Toaster />
<div class="h-full font-[Sour_Gummy]">{@render children()}</div>
