import { supabase } from "$lib/supabase.js";
import { onNewPlayerAwnsered } from "./onNewPlayerAwnsered.js";
import { currentQuestion, questions } from "./HostsData.svelte.js";

let WaitingForAwnserConection;

export async function WaitForAwnser(questionid, gamePin) {
	if (questionid != 0) {
		await supabase.removeChannel(WaitingForAwnserConection);
	}

	await supabase
		.from("games")
		.update({ status: `question-${currentQuestion.v}` })
		.eq("gamepin", gamePin);

	WaitingForAwnserConection = supabase
		.channel("answeredby-realtime")
		.on(
			"postgres_changes",
			{
				event: "INSERT",
				schema: "public",
				table: "answeredby",
				filter: `questionid=eq.${questions.v[questionid].id}`,
			},
			(payload) => {
				onNewPlayerAwnsered(gamePin);
			},
		)
		.subscribe();
}
