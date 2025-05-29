<script>
	import tools from "./tools.json";
</script>

<div class="hidden flex-col gap-3 lg:flex">
	{#each tools as tool, i}
		{#if i < 3}
			<div class="card max-w-[320px]">
				<div class="flex gap-2 text-4xl">
					<i class="nf {tool.icon}"></i>
					<h1>{tool.name}</h1>
				</div>

				<p>{@html tool.description}</p>
			</div>
		{/if}
	{/each}
	<div class="card max-w-[320px]">
		<div class="flex gap-2 text-4xl">
			<i class="nf nf-fa-angles_down"></i>
			<h1>and more!</h1>
		</div>
	</div>
</div>
