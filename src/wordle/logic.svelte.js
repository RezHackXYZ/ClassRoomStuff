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

export let CurrentWord = $state([]);

export function ButtonPressed(key) {
	CurrentWord.push(key);
}

function getRandomWord() {
	let fiveLetterWords = commonWords
		.map((entry) => entry.word)
		.filter((word) => word.length === 5);
	return fiveLetterWords[Math.floor(Math.random() * fiveLetterWords.length)];
}
