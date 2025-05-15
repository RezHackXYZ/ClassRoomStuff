export let questions = $state({
	v: [
		{
			name: '',
			answers: ['', '', '', ''],
			correctAnswer: undefined
		}
	]
});

let DemoQuestions = [
	{
		name: 'Is hack club awesome?',
		answers: ['its ok', 'its the BEST place in the world', 'its bad', 'Gu Gu Ga Ga'],
		correctAnswer: 1
	},
	{
		name: 'Who is the best programer in the world?',
		answers: ['Some person', 'Bill Gates', 'RezHackXYZ', 'another person'],
		correctAnswer: 2
	},
	{
		name: 'What was the 5/11 incident?',
		answers: [
			'mass pings of @/birds',
			'twin towers getting blasted by planes',
			'the opening ceremony of the store of 7/11 on the 5/11 date',
			'the opening ceremony of the competitor store of 7/11'
		],
		correctAnswer: 0
	}
];

export function SetQuestionsToDemoQuestions() {
	questions.v = DemoQuestions;
}

export function AddQuestion() {
	questions.v.push({
		name: '',
		answers: ['', '', '', ''],
		correctAnswer: undefined
	});
}

export function DeleteQuestion(index) {
	if (questions.v.length > 1) {
		if (confirm('Are you sure you want to delete this question? You cant undo this.')) {
			questions.v.splice(index, 1);
		}
	} else {
		alert('You need at least one question.');
	}
}
