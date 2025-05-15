import { supabase } from "$lib/supabase";

export async function addPlayer(name, gamePin) {
	const { error } = await supabase.from("players").insert({
		gameid: gamePin,
		score: 0,
		playername: name,
	});

	if (error) {
		alert("Failed to join game: " + error.message + "\n\nPlease try again.");
		return;
	}
}
