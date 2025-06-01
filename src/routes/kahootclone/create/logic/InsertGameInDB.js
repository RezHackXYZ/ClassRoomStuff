import { supabase } from "$lib/supabase";
import toast from "svelte-5-french-toast";
import { Wait } from "./GameCreateData.svelte.js";

export async function createGame(questions, gamePin) {
	// Insert game
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
		return;
		Wait.v = false;
	}

	// Prepare questions and answers for batch insertion
	const questionsData = questions.map((q) => ({
		gameid: gamePin,
		questionstext: q.name,
		correctanswer: q.correctAnswer,
		timelimit: q.timeLimit,
		media: q.media || null,
	}));

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
		return;
		Wait.v = false;
	}

	const answersData = [];
	questionsResult.forEach((question, index) => {
		questions[index].answers.forEach((answer) => {
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
		return;
		Wait.v = false;
	}

	window.location.href = `/kahootclone/host?gamepin=${gamePin}`;
}
