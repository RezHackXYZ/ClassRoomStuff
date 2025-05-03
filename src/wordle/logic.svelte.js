import commonWords from "common-words";

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
	["⇦", "o"],
	["Z", "n"],
	["X", "n"],
	["C", "n"],
	["V", "n"],
	["B", "n"],
	["N", "n"],
	["M", "n"],
	["↵", "o"],
]);

export let words = $state([
	[
		["R", "c"],
		["A", "d"],
		["D", "w"],
		["I", "w"],
		["O", "w"],
	],
]);

export let CurrentWord = $state({v:[]});

export function ButtonPressed(key) {
	if (key === "↵") {
		if (CurrentWord.v.length === 5) {
			let word = CurrentWord.v.join("");
			if (commonWords.map((entry) => entry.word).includes(word)) {
				words.push(CurrentWord.v);
				CurrentWord.v = [];
			} else {
				alert("Not a valid word");
			}
		}
		return;
	} else if (key === "⇦") {
		CurrentWord.v.pop();
		return;
	}
	if (CurrentWord.v.length === 5) {
		return;
	}

	CurrentWord.v.push(key);
}

function getRandomWord() {
	let fiveLetterWords = commonWords
		.map((entry) => entry.word)
		.filter((word) => word.length === 5);
	return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}
