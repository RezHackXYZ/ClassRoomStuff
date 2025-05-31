import { supabase } from "$lib/supabase";
import toast from "svelte-5-french-toast";


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
		toast.error("Failed to join game: " + error.message + "\n\nPlease try again.");
		return;
	}

	return data[0].id;
}
