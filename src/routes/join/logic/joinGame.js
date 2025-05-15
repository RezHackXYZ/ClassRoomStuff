import { goto } from '$app/navigation';
import { addPlayer } from './InsertPlayerInDB.js';
import { validateGamePin } from './validateGamePin.js';
import { Checking} from "./JoinGameData.svelte.js"

export async function joinGame(pin, name) {
	Checking.v = true;

	if (!(await validateGamePin())) {
		alert('Invalid game pin. Please try again.');
		Checking.v = false;
		return;
	}

	addPlayer(name, pin);

	goto('/play/' + pin, {
		state: { name }
	});
}
