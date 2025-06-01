export let AnswersSymbolAndColorScheme = [
	{
		Color: "#6E0000",
		SelectedColor: "#AA2222",
		HoverBorderColor: "#FF5D5D",
		SelectedBorderColor: "#FF0000",
		Symbol: "nf-md-triangle",
	},
	{
		Color: "#00316E",
		SelectedColor: "#2255AA",
		HoverBorderColor: "#5D9CFF",
		SelectedBorderColor: "#0000FF",
		Symbol: "nf-fa-square",
	},
	{
		Color: "#6E6E00",
		SelectedColor: "#AAAA22",
		HoverBorderColor: "#FFFF5D",
		SelectedBorderColor: "#DDFF00",
		Symbol: "nf-fa-circle",
	},
	{
		Color: "#006E00",
		SelectedColor: "#22AA22",
		HoverBorderColor: "#5DFF5D",
		SelectedBorderColor: "#00FF00",
		Symbol: "nf-fa-diamond",
	},
	{
		Color: "#4B0082",
		SelectedColor: "#7F33B5",
		HoverBorderColor: "#B066FF",
		SelectedBorderColor: "#9932CC",
		Symbol: "nf-md-star",
	},
	{
		Color: "#FF8C00",
		SelectedColor: "#FFB347",
		HoverBorderColor: "#FFD580",
		SelectedBorderColor: "#FFA500",
		Symbol: "nf-md-hexagon",
	},
	{
		Color: "#008B8B",
		SelectedColor: "#33CCCC",
		HoverBorderColor: "#66FFFF",
		SelectedBorderColor: "#00CED1",
		Symbol: "nf-md-octagon",
	},
	{
		Color: "#8B4513",
		SelectedColor: "#CD853F",
		HoverBorderColor: "#DEB887",
		SelectedBorderColor: "#A0522D",
		Symbol: "nf-md-heart",
	},
];

export let DefaultQuestions = [
	{
		name: "What should you do when you're free?",
		answers: ["Do something in real life!", "Play video games", "Code!", "Touch grass!"],
		correctAnswer: 2,
		timeLimit: 30,
	},
	{
		name: "Is RezHackXYZ the best programmer in the world?",
		answers: ["Yes :)", "No :("],
		correctAnswer: 0,
		timeLimit: 5,
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
		timeLimit: 120,
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
`,
};
