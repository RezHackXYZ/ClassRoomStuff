import { supabase } from "$lib/supabase.js";
import { QuestionsData, wait } from "./create.svelte.js";
import { IsAllValuesFilled } from "./IsAllValuesFilled.js";
import toast from "svelte-5-french-toast";

export async function createGame() {
	if (!IsAllValuesFilled()) return;

	console.log("Creating game rn!");

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
		timelimit: q.timelimit,
		media: q.hasMedia ? q.mediaURL : null,
	}));

	const gameCreationPromise = async () => {
		const { data: gameData, error: gameError } = await supabase
			.from("games")
			.insert([
				{
					creator: "anonymous",
					creationdate: new Date().toISOString(),
					status: "lobby",
					gamepin: gamePin,
				},
			])
			.select();

		if (gameError) {
			throw gameError;
		}

		const { data: questionsResult, error: questionsError } = await supabase
			.from("questions")
			.insert(questionsData)
			.select("id");

		if (questionsError) {
			throw questionsError;
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

		const { error: answersError } = await supabase
			.from("answers")
			.insert(answersData)
			.select();

		if (answersError) {
			throw answersError;
		}
	};

	try {
		await toast.promise(gameCreationPromise(), {
			loading: "Creating game...",
			success: "Game created successfully!",
			error: (err) =>
				"Failed to create game: " + (err?.message || "Unknown error") + "\n\nPlease try again.",
		});
	} catch (error) {
		wait.v = false;
		return;
	}

	window.location.href = `/kahootclone/host?gamepin=${gamePin}`;
	wait.v = false;
}
