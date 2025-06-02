
import { DefaultQuestions } from "$lib/config.js";
import toast from "svelte-5-french-toast";

export let Wait = $state({ v: false });
export let questions = $state({
	v: [
		{
			name: "",
			answers: ["", "", "", ""],
			correctAnswer: undefined,
			timeLimit: 30,
		},
	],
});

export function SetQuestionsToDemoQuestions() {
	questions.v = DefaultQuestions;
}

export function AddQuestion() {
	questions.v.push({
		name: "",
		answers: ["", "", "", ""],
		correctAnswer: undefined,
		timeLimit: 30,
	});
}

export function DeleteQuestion(index) {
	if (questions.v.length > 1) {
		if (confirm("Are you sure you want to delete this question? You cant undo this.")) {
			questions.v.splice(index, 1);
		}
	} else {
		toast.error("You need at least one question.");
	}
}
