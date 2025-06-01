import { questions } from "./GameCreateData.svelte.js";
import { AiPrompts } from "$lib/config.js";
import toast from "svelte-5-french-toast";

export function GenerateOptionsUsingAI(index) {
	if (!questions.v[index].name) {
		toast.error("Please enter a question to generate options.");
		return;
	}

	fetch("https://ai.hackclub.com/chat/completions", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			messages: [
				{
					role: "user",
					content: AiPrompts.GenerateOptionsUsingAI.replace(
						"[question]",
						questions.v[index].name,
					),
				},
			],
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			let question = questions.v[index].name;
			questions.v[index] = JSON.parse(data.choices[0].message.content);
			questions.v[index].name = question;
		})
		.catch((error) => {
			toast.error("Error:" + error);
			return;
		});

	toast.success("added!");
}
