import { supabase } from "$lib/supabase.js";
import toast from "svelte-5-french-toast";
import { players } from "./HostsData.svelte.js";

export async function GetCurrentPlayers(gamePin) {
	const { data, error } = await supabase
		.from("players")
		.select("playername")
		.eq("gameid", Number(gamePin));

	if (error) {
		toast.error("Error fetching players:"+ error);
		return;
	}

	players.v = data ? data.map(player => player.playername) : [];
}
