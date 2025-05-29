import { supabase } from "$lib/supabase.js";
import { players } from "./HostsData.svelte.js";

export let LobbyConnection;

function onNewPlayer(Newplayers) {
	players.v.push(Newplayers.playername);
}

export async function AutoUpdatePlayersList(gamePin) {
	LobbyConnection = supabase
		.channel("players-realtime")
		.on(
			"postgres_changes",
			{
				event: "INSERT",
				schema: "public",
				table: "players",
				filter: `gameid=eq.${gamePin}`,
			},
			(payload) => {
				onNewPlayer(payload.new);
			},
		)
		.subscribe();
}
