import { supabase } from "$lib/supabase.js";
import { players } from "./HostsData.svelte.js";

export async function GetCurrentPlayers(gamePin) {
	const { data, error } = await supabase
		.from("players")
		.select("playername")
		.eq("gameid", Number(gamePin));

	console.log("Current players data:", JSON.stringify(data));

	if (error) {
		console.error("Error fetching players:", error);
		return;
	}

	players.v = data ? data.map(player => player.playername) : [];
}
