import { supabase } from "$lib/supabase";

export async function addPlayer(name, gamePin) {
	const { data, error } = await supabase
		.from("players")
		.insert({
			gameid: gamePin,
			score: 0,
			playername: name,
		})
		.select("id");

	if (error) {
		alert("Failed to join game: " + error.message + "\n\nPlease try again.");
		return;
	}

	return data[0].id;
}
