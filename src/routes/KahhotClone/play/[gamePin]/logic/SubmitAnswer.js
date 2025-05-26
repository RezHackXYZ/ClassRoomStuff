import { CurrentQuestion, Selected, questions, playerid } from "./HostsData.svelte.js";
import { supabase } from "$lib/supabase.js";

export async function SubmitAnswer() {
	CurrentQuestion.v = null;

	if (Selected.v == questions.v.correctAnswer) {
		await supabase
			.from("answeredby")
			.insert([
				{ questionid: questions.v.questionid, nameofanswerer: playerid.v, correct: true },
			])
			.select();

		let { data: score } = await supabase.from("players").select("score").eq("id", playerid.v);

		await supabase
			.from("players")
			.update({ score: score[0].score + 1 })
			.eq("id", playerid.v)
			.select();
        
	} else {
		await supabase
			.from("answeredby")
			.insert([
				{ questionid: questions.v.questionid, nameofanswerer: playerid.v, correct: false },
			])
			.select();
	}
}
