<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabase';

	let pin;
	let name;
	let Checking = false;

	async function validateGamePin() {
		const { data, error } = await supabase
			.from('games')
			.select('gamePIN')
			.eq('gamePIN', Number(pin))
			.maybeSingle();

		// Return true if valid
		return data !== null && !error;
	}

	async function joinGame() {
		if (!pin || !name) {
			alert('Please fill in the game pin and your name.');
			return;
		}

		Checking = true;

		const isValid = await validateGamePin();
		if (!isValid) {
			alert('Invalid game pin. Please try again.');
			Checking = false;
			return;
		}

		goto('/play/' + pin, {
			state: {
				name
			}
		});
	}
</script>

<div class="bg-grey-900 flex h-full items-center justify-center">
	<div class="flex flex-col items-center justify-center gap-1 rounded-lg bg-gray-900 p-8 shadow-lg">
		<h1 class="m-[0] mb-3 text-5xl">Join a game here</h1>

		<input
			placeholder="Enter game pin"
			class="rounded-lg bg-gray-800 p-2 text-center text-white"
			bind:value={pin}
		/>

		<input
			placeholder="Enter your name"
			bind:value={name}
			class="rounded-lg bg-gray-800 p-2 text-center text-white"
		/>

		{#if !Checking}
			<button
				class="mt-4 cursor-pointer rounded-full bg-green-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
				on:click={joinGame}
			>
				Join game
			</button>
		{:else}<button
				class="mt-4 cursor-pointer rounded-full bg-gray-700 p-2 transition-all hover:scale-110 hover:-rotate-10"
			>
				Checking if pin is valid...
			</button>{/if}
	</div>
</div>
