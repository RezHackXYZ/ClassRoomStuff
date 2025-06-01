import { questions } from "./GameCreateData.svelte.js";
import { AiPrompts } from "$lib/config.js";
import toast from "svelte-5-french-toast";

export function GenerateQuestionsUsingAI() {
	let topic = window.prompt(
		"What is the topic of the questions?\nand the number of questions in the topic?",
	);

	if (!topic) {
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
					content: AiPrompts.GenerateQuestionsUsingAI.replace("[topic]", topic),
				},
			],
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			questions.v = JSON.parse(data.choices[0].message.content);
		})
		.catch((error) => {
			toast.error("Error:" + error);
			return;
		});

	toast.success("added!");
}