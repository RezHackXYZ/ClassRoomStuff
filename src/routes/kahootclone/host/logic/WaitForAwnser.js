import { supabase } from "$lib/supabase.js";
import { onNewPlayerAwnsered } from "./onNewPlayerAwnsered.js";
import {
	currentQuestion,
	questions,
	CurrentQuestionDetails,
	TotalTimeLeft,
	timeLeft,
	PeopleAwnseredQ,
	totalQuetions,
} from "./HostsData.svelte.js";
import { GameOver } from "./GameOver.js";

let WaitingForAwnserConection;
let TimeLimitInterval;

export async function WaitForAwnser(questionid, gamePin) {
	if (questionid != 0) {
		await supabase.removeChannel(WaitingForAwnserConection);
		clearInterval(TimeLimitInterval);
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
		timeLimit: questionsData[currentQuestion.v].timelimit,
	};

	TotalTimeLeft.v = CurrentQuestionDetails.v.timeLimit;
	timeLeft.v = CurrentQuestionDetails.v.timeLimit;

	if (TotalTimeLeft.v != null) {
		TimeLimitInterval = setInterval(() => {
			if (timeLeft.v > 0) {
				timeLeft.v--;
			} else {
				supabase.removeChannel(WaitingForAwnserConection);
				currentQuestion.v++;
				if (currentQuestion.v == totalQuetions.v) {
					//GameOver(gamePin);
					return;
				}
				PeopleAwnseredQ.v = 0;

				WaitForAwnser(currentQuestion.v, gamePin);
			}
		}, 1000);
	}
}
