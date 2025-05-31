import {
	CurrentQuestion,
	Status,
	questions,
	isWait,
	Selected,
	playerid,
	TotalQuestions,
} from "./HostsData.svelte.js";
import { supabase } from "$lib/supabase.js";

export async function NewStatus(NewStatus, gamePin) {
	if (NewStatus == "completed") {
		window.location.replace("/kahootclone/results?gamepin=" + gamePin  + "&playerID=" + playerid.v);
		return;
	}

	Status.v = "started";
	CurrentQuestion.v = Number(NewStatus.replace("question-", ""));

	const { data: questionsData } = await supabase
		.from("questions")
		.select("*")
		.eq("gameid", Number(gamePin))
		.order("id", { ascending: true });

	TotalQuestions.v = questionsData.length;

	const { data: answers } = await supabase
		.from("answers")
		.select("content")
		.eq("questionid", Number(questionsData[CurrentQuestion.v].id))
		.order("id", { ascending: true });

	questions.v = {
		question: questionsData[CurrentQuestion.v].questionstext,
		correctAnswer: questionsData[CurrentQuestion.v].correctanswer,
		answers: answers.map((answer) => answer.content),
		questionid: questionsData[CurrentQuestion.v].id,
		media: questionsData[CurrentQuestion.v].media || null,
	};

	isWait.v = false;
	Selected.v = null;
}
