<script>
	let questions = ["Question 1", "Question 2", "Question 3"];
</script>

<div class="flex h-full w-[15%] flex-col gap-2 overflow-y-auto rounded-r border-2 p-3 pr-5">
	<h1 class="text-4xl">Questions</h1>
	{#each questions as questions, questionIndex}
		<div class="card flex flex-col">
			<span class="text-3xl">{questionIndex + 1}.</span><span>{questions}</span>
		</div>
	{/each}
    <div class="flex justify-center mt-2"><button class="btn"><i class="nf nf-oct-diff_added"></i> New Question</button></div>
</div>
