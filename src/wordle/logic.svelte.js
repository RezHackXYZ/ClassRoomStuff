import wordExists from "word-exists";
import {generate} from "random-words";

export let CorrectWord = generate({ minLength: 5, maxLength: 5 });
export let words = $state([]);
export let CurrentWord = $state({ v: [] });
export let keys = $state([
	["Q", "n"],
	["W", "n"],
	["E", "n"],
	["R", "n"],
	["T", "n"],
	["Y", "n"],
	["U", "n"],
	["I", "n"],
	["O", "n"],
	["P", "n"],
	["A", "n"],
	["S", "n"],
	["D", "n"],
	["F", "n"],
	["G", "n"],
	["H", "n"],
	["J", "n"],
	["K", "n"],
	["L", "n"],
	["⌫", "o"],
	["Z", "n"],
	["X", "n"],
	["C", "n"],
	["V", "n"],
	["B", "n"],
	["N", "n"],
	["M", "n"],
	["⏎", "o"],
]);

function SendWord(word) {}

export function ButtonPressed(key) {
	if (key === "⏎") {
		if (CurrentWord.v.length === 5) {
			let word = CurrentWord.v.join("");
			if (wordExists(word)) {
				SendWord(CurrentWord.v);
				CurrentWord.v = [];
			} else {
				alert("Not a valid word");
			}
		}
		return;
	} else if (key === "⌫") {
		CurrentWord.v.pop();
		return;
	}
	if (CurrentWord.v.length === 5) {
		return;
	}

	CurrentWord.v.push(key);
}
