import toast from "svelte-5-french-toast";
import { QuestionsData } from "./create.svelte.js";

export function IsAllValuesFilled() {
	if (QuestionsData.v.length === 0) {
		return false;
	}

	for (let i = 0; i < QuestionsData.v.length; i++) {
		const question = QuestionsData.v[i];

		if (!question.questionText || question.questionText.trim() === "") {
			toast.error(`Please fill in the question text for question ${i + 1}.`);
			return false;
		}

		for (let j = 0; j < question.options.length; j++) {
			if (!question.options[j] || question.options[j].trim() === "") {
				toast.error(`Please fill in all answers for question ${i + 1}.`);
				return false;
			}
		}

		if (question.CorrectOption.SingleAnswer === null) {
			toast.error(`Please select in the correct answer text for question ${i + 1}.`);
			return false;
		}
	}

	return true;
}
