<script>
	import tools from "./tools.json"
</script>

<div id="galarry" class="flex items-center justify-center p-3">
    <div
		class="flex flex-wrap justify-center gap-5"
	>
		{#each tools as tool}
			<a href={tool.link} class="flex justify-center">
				<div class="card flex w-full max-w-xs flex-col items-center text-center">
					<img
						class="mb-2 w-full rounded border-2 border-white"
						src={tool.image}
						alt="how the tool {tool.name} looks like"
					/>
					<div
						class="flex items-center justify-center text-2xl whitespace-nowrap md:text-3xl lg:text-4xl"
					>
						<i class="nf {tool.icon}"></i>
						<span class="ml-2">{tool.name}</span>
					</div>
					<p>{@html tool.description}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
