import { addPlayer } from "./InsertPlayerInDB.js";
import { validateGamePin } from "./validateGamePin.js";
import { Checking } from "./JoinGameData.svelte.js";
import toast from "svelte-5-french-toast";


export async function joinGame(pin, name) {
	Checking.v = true;

	if (!(await validateGamePin(pin))) {
		toast.error("Invalid game pin. Please try again.");
		Checking.v = false;
		return;
	}

	let id = await addPlayer(name, pin);

	Checking.v = false;

	window.location.href = `./play?gamepin=${pin}&name=${name}&playerid=${id}`;
}
