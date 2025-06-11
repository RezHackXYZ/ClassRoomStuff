<script>
	import { stats } from "./logic.svelte.js";
</script>

<div class="flex gap-5">
	<span class="text-green-500"><i class="nf nf-md-check"></i>: {stats.AnswerKnown}</span>
	<span class="text-red-500"><i class="nf nf-md-close"></i>: {stats.AnswerNotKnown}</span>
	<span class="text-blue-500"><i class="nf nf-md-help"></i>: {stats.AnswerNotChecked}</span>
</div>
