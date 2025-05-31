import { createGame } from "./InsertGameInDB.js";
import { questions,Wait } from "./GameCreateData.svelte.js";
import toast from "svelte-5-french-toast";

export async function startGame() {
	if (questions.v.some((q) => q.name === "")) return toast.error("Please fill all questions");
	if (questions.v.some((q) => q.answers.some((a) => a === ""))) return toast.error("Fill all options");
	if (questions.v.some((q) => q.correctAnswer === undefined))
		return toast.error("Select correct answers");

	const gamePin = Math.floor(Math.random() * 1000000)
		.toString()
		.padStart(6, "0");

	Wait.v = true;

	await createGame(questions.v, gamePin);}
