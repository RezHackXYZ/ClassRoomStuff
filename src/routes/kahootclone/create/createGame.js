import { supabase } from "$lib/supabase.js";
import { QuestionsData } from "./create.svelte.js";
import toast from "svelte-5-french-toast";

export async function createGame() {
	let GamesData;
	try {
		GamesData = await toast.promise(
			(async () => {
				let { data, error } = await supabase.from("games").insert([{}]).select("id,gamepin");
				if (error) {
					throw new Error(error.message);
				}
				return data;
			})(),
			{
				loading: "Adding Game...",
				success: "Game added!",
				error: (err) => `Could not add game.\nError: ${err.message}\n\n Please try again.`,
			},
		);

		await toast.promise(
			(async () => {
				const { data, error } = await supabase
					.from("questions")
					.insert(
						QuestionsData.v.map((_, index) => ({
							...QuestionsData.v[index],
							gameid: GamesData[0].id,
						})),
					)
					.select();
				if (error) {
					throw new Error(error.message);
				}
				return data;
			})(),
			{
				loading: "Adding Questions and Answers...",
				success: "Questions and Answers added!",
				error: (err) =>
					`Could not add Questions and Answers.\nError: ${err.message}\n\n Please try again.`,
			},
		);
	} catch (error) {
		return;
	}

	toast.success(`Game created! Your game pin is: ${GamesData[0].gamepin}`);
}
