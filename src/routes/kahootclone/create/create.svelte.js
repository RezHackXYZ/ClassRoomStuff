export let selectedQuestionIndex = $state({ v: 0 });
export let QuestionsData = $state({
	v: [
		{
			questionText: "",
			timeLimit: 15,
			type: "SingleAnswer",
			options: ["", "", "", ""],
			CorrectOption: { SingleAnswer: null },
            hasMedia: false,
            mediaURL: null
		},
	],
});
export let wait = $state({ v: false });