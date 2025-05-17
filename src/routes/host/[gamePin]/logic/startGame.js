import { supabase } from "$lib/supabase.js";
import { LobbyConnection } from "./UpdatePlayersList.js";
import { questions, Status, CurrentQuestion, currentQuestion } from "./HostsData.svelte.js";

export async function startGame(gamePin) {
	await supabase.removeChannel(LobbyConnection);

	Status.v = "started";

	const { data } = await supabase
		.from("questions")
		.select("*")
		.eq("gameid", Number(gamePin))
		.order("id", { ascending: true });
	questions.v = data;

	CurrentQuestion.v = 0;

	await supabase
		.from("games")
		.update({ status: `question-${currentQuestion.v}` })
		.eq("gamepin", gamePin);

    
}
