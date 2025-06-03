import {
	Totalplayers,
	PeopleAwnseredQ,
	currentQuestion,
	totalQuetions,
} from "./HostsData.svelte.js";
import { GameOver } from "./GameOver.js";
import { WaitForAwnser } from "./WaitForAwnser.js";

export async function onNewPlayerAwnsered(GamePin) {
	PeopleAwnseredQ.v++;

	if (PeopleAwnseredQ.v == Totalplayers.v) {
		currentQuestion.v++;
		if (currentQuestion.v == totalQuetions.v) {
			GameOver(GamePin);
			return;
		}
		PeopleAwnseredQ.v = 0;

		WaitForAwnser(currentQuestion.v, GamePin);
	}
}
