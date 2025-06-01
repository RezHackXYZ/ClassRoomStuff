import { questions } from "./GameCreateData.svelte.js";
import { AiPrompts } from "$lib/config.js";
import toast from "svelte-5-french-toast";

export function GenerateOptionsUsingAI(index) {
	if (!questions.v[index].name) {
		toast.error("Please enter a question to generate options.");
		return;
	}

	const fetchOptions = async () => {
		const response = await fetch("https://ai.hackclub.com/chat/completions", {
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
		});
		const data = await response.json();
		let question = questions.v[index].name;
		questions.v[index] = JSON.parse(data.choices[0].message.content);
		questions.v[index].name = question;
	};

	toast.promise(
		fetchOptions(),
		{
			loading: "Generating options...",
			success: "Options generated!",
			error: (err) => "Error: " + (err?.message || err),
		}
	);
}
