import { addPlayer } from "./InsertPlayerInDB.js";
import { validateGamePin } from "./validateGamePin.js";
import { Checking } from "./JoinGameData.svelte.js";

export async function joinGame(pin, name) {
	Checking.v = true;

	if (!(await validateGamePin(pin))) {
		alert("Invalid game pin. Please try again.");
		Checking.v = false;
		return;
	}

	let id = await addPlayer(name, pin);

	Checking.v = false;

	window.location.href = `./play/${pin}?name=${name}&playerid=${id}`;
}
