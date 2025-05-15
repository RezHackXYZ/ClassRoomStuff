import { goto } from '$app/navigation';
import { createGame } from './InsertGameInDB.js';
import { questions } from './GameCreateData.svelte.js';

export async function startGame() {
	if (questions.v.some((q) => q.name === '')) return alert('Please fill all questions');
	if (questions.v.some((q) => q.answers.some((a) => a === ''))) return alert('Fill all options');
	if (questions.v.some((q) => q.correctAnswer === undefined)) return alert('Select correct answers');

	const gamePin = Math.floor(Math.random() * 1000000)
		.toString()
		.padStart(6, '0');

	createGame($state.snapshot(questions), gamePin);

	goto('/host/' + gamePin);
}
