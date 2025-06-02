<script>
	import toast from "svelte-5-french-toast";

	import { DefaultQuestions } from "$lib/config.js";
	import { QuestionsData } from "./create.svelte";
	import { createGame } from "./createGame.js";

	let userInput = "";

	let AIPrompt = `
		You are the AI of a quiz game.
Generate a list of quiz questions with possible answers and the correct answer index.
Each question must have:
- A "questionText" (what the question is about)
- A "timeLimit" (in seconds, any of these: null (no time limit), 5, 10, 15, 30, 60, 120, 300)
- An "type" (only set to  "SingleAnswer" for now)
- An "options" (an array of options with at least 2 and at most 8 options)
- A "CorrectOption" (an object with a key "SingleAnswer" and a value that is the index of the correct answer)
- A "hasMedia" (boolean indicating if the question has media)  only set to true if you are sure the URL is valid and related to the question.
- A "mediaURL" (a URL to the media, can be null if no media is present) only add this if you are sure the URL is valid and related to the question.
Ensure the questions are diverse.
Example format:
[{"questionText":"What should you do when you're free?","timeLimit":15,"type":"SingleAnswer","options":["Do something in real life!","Play video games","Code!","Touch grass!"],"CorrectOption":{"SingleAnswer":2},"hasMedia":false,"mediaURL":null},{"questionText":"Is RezHackXYZ the best programmer in the world?","timeLimit":5,"type":"SingleAnswer","options":["Yes :)","No :("],"CorrectOption":{"SingleAnswer":0},"hasMedia":true,"mediaURL":"https://github.com/RezHackXYZ.png"},{"questionText":"Best place in the world?","timeLimit":5,"type":"SingleAnswer","options":["Google","Microsoft","Apple","Samsung","Hack Club!! :D","Amazon","Facebook","Twitter"],"CorrectOption":{"SingleAnswer":4},"hasMedia":false,"mediaURL":null}]

JUST PROVIDE THE JSON AND NOTHING ELSE.

The user's topic of interest is:
[topic]
`;

	async function ApiCall() {
		const response = await fetch("https://ai.hackclub.com/chat/completions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				messages: [
					{
						role: "user",
						content: AIPrompt.replace("[topic]", userInput),
					},
				],
			}),
		});
		const data = await response.json();

		try {
			QuestionsData.v = JSON.parse(data.choices[0].message.content);
		} catch (error) {
			if (ParsingTry <= 5) {
				ParsingTry++;
				return ApiCall();
			}
			throw new Error("Failed to parse AI response after multiple attempts.");
		}
	}

	let ParsingTry = 0;
	async function GenerateQuestionsUsingAI() {
		ParsingTry = 0;
		userInput = prompt(
			"Enter the topic and number of questions you want with any instructions for the ai, note: doing this will delete all you previous questions and its not undo able",
		);

		await toast.promise(
			(async () => {
				try {
					await ApiCall();
				} catch (error) {
					throw new Error(error);
				}
			})(),
			{
				loading: "Generating...",
				success: "Questions and Answers Generated and added!",
				error: (err) => `Could not generate..\nError: ${err.message}\n\n Please try again.`,
			},
		);
	}
</script>

<div class="flex w-full justify-center gap-2 overflow-y-auto rounded border-2 p-3 pr-5">
	<button class="btn flex items-center gap-1" onclick={() => (QuestionsData.v = DefaultQuestions)}>
		<i class="nf nf-md-flash"></i> Use Demo Questions
	</button>
	<button class="btn flex items-center gap-1" onclick={() => GenerateQuestionsUsingAI()}>
		<i class="nf nf-md-cpu_64_bit"></i> Generate Questions Using AI
	</button>
	<button class="btn flex items-center gap-1" onclick={() => createGame()}>
		<i class="nf nf-md-play"></i> Start Game
	</button>
</div>
