import { supabase } from "$lib/supabase.js";
import { NewStatus } from "./NewStatus.js";

export async function IntializeGameStart(gamepin) {
	supabase
		.channel(`game_status_${gamepin}`)
		.on(
			"postgres_changes",
			{
				event: "UPDATE",
				schema: "public",
				table: "games",
				filter: `gamepin=eq.${gamepin}`,
			},
			(payload) => {
				if (payload.new.status) {
					NewStatus(payload.new.status, gamepin);
				}
			},
		)
		.subscribe();
}
