import { supabase } from "$lib/supabase.js";
import { onNewPlayerAwnsered } from "./onNewPlayerAwnsered.js";
import { currentQuestion, questions, CurrentQuestionDetails } from "./HostsData.svelte.js";

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

	const { data: questionsData } = await supabase
		.from("questions")
		.select("*")
		.eq("gameid", Number(gamePin))
		.order("id", { ascending: true });

	const { data: answers } = await supabase
		.from("answers")
		.select("content")
		.eq("questionid", Number(questionsData[currentQuestion.v].id))
		.order("id", { ascending: true });

	CurrentQuestionDetails.v = {
		question: questionsData[currentQuestion.v].questionstext,
		correctAnswer: questionsData[currentQuestion.v].correctanswer,
		answers: answers.map((answer) => answer.content),
		questionid: questionsData[currentQuestion.v].id,
		media: questionsData[currentQuestion.v].media || null,
	};
}
