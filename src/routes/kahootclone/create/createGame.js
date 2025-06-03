import { supabase } from "$lib/supabase.js";
import { QuestionsData, wait } from "./create.svelte.js";
import toast from "svelte-5-french-toast";

export async function createGame() {
	if (wait.v) {
		return;
	}
	wait.v = true;
	const gamePin = Math.floor(Math.random() * 1000000)
		.toString()
		.padStart(6, "0");

	const questionsData = QuestionsData.v.map((q) => ({
		gameid: gamePin,
		questionstext: q.questionText,
		correctanswer: q.CorrectOption.SingleAnswer,
		timeLimit: q.timelimit,
		media: q.hasMedia ? q.mediaURL : null,
	}));

	const insertGamePromise = supabase.from("games").insert({
		creator: "anonymous",
		creationdate: new Date().toISOString(),
		status: "lobby",
		gamepin: gamePin,
	});

	const { data: gameData, error: gameError } = await toast.promise(insertGamePromise, {
		loading: "Creating game...",
		success: "Game created!",
		error: (err) =>
			"Failed to create game: " + (err?.message || "Unknown error") + "\n\nPlease try again.",
	});

	if (gameError) {
		wait.v = false;
		return;
	}

	const insertQuestionsPromise = supabase.from("questions").insert(questionsData).select("id");

	const { data: questionsResult, error: questionsError } = await toast.promise(
		insertQuestionsPromise,
		{
			loading: "Inserting questions...",
			success: "Questions inserted!",
			error: (err) =>
				"Failed to insert questions: " +
				(err?.message || "Unknown error") +
				"\n\nPlease try again.",
		},
	);

	if (questionsError) {
		wait.v = false;
		return;
	}

	const answersData = [];
	questionsResult.forEach((question, index) => {
		QuestionsData.v[index].options.forEach((answer) => {
			answersData.push({
				questionid: question.id,
				content: answer,
			});
		});
	});

	const insertAnswersPromise = supabase.from("answers").insert(answersData);

	const { error: answersError } = await toast.promise(insertAnswersPromise, {
		loading: "Inserting answers...",
		success: "Answers inserted!",
		error: (err) =>
			"Failed to insert answers: " + (err?.message || "Unknown error") + "\n\nPlease try again.",
	});

	if (answersError) {
		wait.v = false;
		return;
	}

	window.location.href = `/kahootclone/host?gamepin=${gamePin}`;
	wait.v = false;
}
