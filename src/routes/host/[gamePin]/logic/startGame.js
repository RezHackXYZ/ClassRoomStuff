import { supabase } from "$lib/supabase.js";
import { LobbyConnection } from "./UpdatePlayersList.js";
import {
	questions,
	Status,
	Totalplayers,
	totalQuetions,
	players,
} from "./HostsData.svelte.js";
import { WaitForAwnser } from "./WaitForAwnser.js";

export async function startGame(gamePin) {
	if (players.v.length == 0) {
		alert("you need at least 1 person to start the game!");
		return;
	}

	await supabase.removeChannel(LobbyConnection);

	Status.v = "started";

	const { data } = await supabase
		.from("questions")
		.select("*")
		.eq("gameid", Number(gamePin))
		.order("id", { ascending: true });

	questions.v = data;

	totalQuetions.v = data.length;

	const { data: playersData } = await supabase
		.from("players")
		.select("id")
		.eq("gameid", Number(gamePin))
		.order("id", { ascending: true });

	Totalplayers.v = playersData.length;

	WaitForAwnser(0, gamePin);
}
