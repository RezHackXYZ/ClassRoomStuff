export let AnswersSymbolAndColorScheme = [
	{
		color: "#6E0000",
		selectedColor: "#AA2222",
		hoverBorderColor: "#FF5D5D",
		selectedBorderColor: "#FF0000",
		symbol: "nf-md-triangle",
	},
	{
		color: "#00316E",
		selectedColor: "#2255AA",
		hoverBorderColor: "#5D9CFF",
		selectedBorderColor: "#0000FF",
		symbol: "nf-fa-square",
	},
	{
		color: "#6E6E00",
		selectedColor: "#AAAA22",
		hoverBorderColor: "#FFFF5D",
		selectedBorderColor: "#DDFF00",
		symbol: "nf-fa-circle",
	},
	{
		color: "#006E00",
		selectedColor: "#22AA22",
		hoverBorderColor: "#5DFF5D",
		selectedBorderColor: "#00FF00",
		symbol: "nf-fa-diamond",
	},
	{
		color: "#4B0082",
		selectedColor: "#7F33B5",
		hoverBorderColor: "#B066FF",
		selectedBorderColor: "#9932CC",
		symbol: "nf-md-star",
	},
	{
		color: "#FF8C00",
		selectedColor: "#FFB347",
		hoverBorderColor: "#FFD580",
		selectedBorderColor: "#FFA500",
		symbol: "nf-md-hexagon",
	},
	{
		color: "#008B8B",
		selectedColor: "#33CCCC",
		hoverBorderColor: "#66FFFF",
		selectedBorderColor: "#00CED1",
		symbol: "nf-md-octagon",
	},
	{
		color: "#8B4513",
		selectedColor: "#CD853F",
		hoverBorderColor: "#DEB887",
		selectedBorderColor: "#A0522D",
		symbol: "nf-md-heart",
	},
];

export let DefaultQuestions = [
	{
		name: "What should you do when you're free?",
		answers: ["Do something in real life!", "Play video games", "Code!", "Touch grass!"],
		correctAnswer: 2,
	},
	{
		name: "Is RezHackXYZ the best programmer in the world?",
		answers: ["Yes :)", "No :("],
		correctAnswer: 0,
	},
	{
		name: "Best place in the world?",
		answers: [
			"Google",
			"Microsoft",
			"Apple",
			"Samsung",
			"Hack Club!! :D",
			"Amazon",
			"Facebook",
			"Twitter",
		],
		correctAnswer: 4,
	},
];

export let AiPrompts = {
	GenerateQuestionsUsingAI: `
You are the AI of a quiz game.
Generate a list of quiz questions with possible answers and the correct answer index.
Each question must have:
- A "name" (question text)
- An "answers" array (minimum 2, maximum 8 options)
- A "correctAnswer" (index starting from 0)
Ensure the questions are diverse.
Example format:
{
"name": "What is the capital of France?",
"answers": [
	"Paris",
	"London",
	"Berlin",
	"Madrid"
],
"correctAnswer": 0
}
JUST PROVIDE THE JSON AND NOTHING ELSE.

The user's topic of interest is:
[topic]`,
GenerateOptionsUsingAI: `
You are the AI of a quiz game.
Generate a list of answers relevant to the Question the correct answer index.
generate 2 things for the question:
- An "answers" array (minimum 2, maximum 8 options)
- A "correctAnswer" (index starting from 0)
Ensure the questions are diverse.
Example format if the question is "What is the capital of France?":
{
"answers": [
	"Paris",
	"London",
	"Berlin",
	"Madrid"
],
"correctAnswer": 0
}
JUST PROVIDE THE JSON AND NOTHING ELSE.

The user's Question that they want to generate options for is:
[question]
`
};