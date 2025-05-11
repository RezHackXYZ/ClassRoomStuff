<script>
	import { goto } from '$app/navigation';

</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div class="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg">
		<h1 class="m-[0] mb-3 text-5xl">Join a game here</h1>
		<input placeholder="Enter game pin" class="rounded-lg bg-gray-800 p-2 text-center text-white" />
		<input
			placeholder="Enter your name"
			class="rounded-lg bg-gray-800 p-2 text-center text-white"
		/>
		<button
			class="cursor-pointer rounded-full bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
			>Join the game</button
		>
	</div>
</div>