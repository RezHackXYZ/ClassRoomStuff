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

	const fetchQuestions = async () => {
		const response = await fetch("https://ai.hackclub.com/chat/completions", {
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
		});
		const data = await response.json();
		questions.v = JSON.parse(data.choices[0].message.content);
	};

	toast.promise(
		fetchQuestions(),
		{
			loading: "Generating questions...",
			success: "Questions added!",
			error: (err) => "Error: " + err.message || err,
		}
	);
}