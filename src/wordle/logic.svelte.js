import wordExists from "word-exists";
import { generate } from "random-words";	import {ShowAlert} from "../app.svelte";


export let WordLegnth = $state({ v: 5 });

let CorrectWord = generate({
	minLength: WordLegnth.v,
	maxLength: WordLegnth.v,
});

console.log("CorrectWord: ", CorrectWord);
export let words = $state({ v: [] });
export let CurrentWord = $state({ v: [] });
export let keys = $state({
	v: [
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
	],
});

export function newGame() {
	CorrectWord = generate({
		minLength: WordLegnth.v,
		maxLength: WordLegnth.v,
	});
	console.log("CorrectWord: ", CorrectWord);
	words.v = [];
	CurrentWord.v = [];
	keys.v = [
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
	];
}

function GameWin() {
	ShowAlert("You win!", "success");
	data.value[WordLegnth.v].push(words.v.length);
	localStorage.setItem("WordleGamesData", JSON.stringify(data.value));
	newGame();
}

function SendWord(word) {
	let result = Array(word.length).fill(null);
	let used = Array(CorrectWord.length).fill(false);

	// First pass: exact matches
	for (let i = 0; i < word.length; i++) {
		if (word[i].toLowerCase() === CorrectWord[i].toLowerCase()) {
			result[i] = [word[i].toUpperCase(), "c"];
			used[i] = true;
		}
	}

	// Second pass: wrong place but correct letter
	for (let i = 0; i < word.length; i++) {
		if (result[i]) continue;

		let found = false;
		for (let j = 0; j < CorrectWord.length; j++) {
			if (
				!used[j] &&
				word[i].toLowerCase() === CorrectWord[j].toLowerCase()
			) {
				found = true;
				used[j] = true;
				break;
			}
		}

		result[i] = found
			? [word[i].toUpperCase(), "d"]
			: [word[i].toUpperCase(), "w"];
	}

	words.v.push(result);

	setTimeout(() => {
		document.getElementById("DisplayOfWords").scrollTo({
			top: document.getElementById("DisplayOfWords").scrollHeight,
			behavior: "smooth",
		});
	}, 100);

	// Update keyboard status
	for (let [letter, status] of result) {
		let keyIndex = keys.v.findIndex(
			(k) => k[0].toLowerCase() === letter.toLowerCase()
		);
		if (keyIndex !== -1) {
			let current = keys.v[keyIndex][1];
			if (status === "c") {
				keys.v[keyIndex][1] = "c";
			} else if (status === "d" && current === "n") {
				keys.v[keyIndex][1] = "d";
			} else if (status === "w" && current === "n") {
				keys.v[keyIndex][1] = "w";
			}
		}
	}

	// Check for win
	if (result.every(([_, status]) => status === "c")) {
		GameWin();
	}
}

export function ButtonPressed(key) {
	document.getElementById("DisplayOfWords").scrollTo({
		top: document.getElementById("DisplayOfWords").scrollHeight,
		behavior: "smooth",
	});

	if (key === "⏎") {
		if (CurrentWord.v.length === WordLegnth.v) {
			let word = CurrentWord.v.join("").toUpperCase();
			if (wordExists(word)) {
				SendWord(CurrentWord.v);
				CurrentWord.v = [];
			} else {
				ShowAlert("Not a valid word", "error");
			}
		}
		return;
	} else if (key === "⌫") {
		CurrentWord.v.pop();
		return;
	}
	if (CurrentWord.v.length === WordLegnth.v) {
		return;
	}

	CurrentWord.v.push(key);
}
export function handleKey(event) {
	const key = event.key.toLowerCase();

	if (key === "enter") {
		ButtonPressed("⏎");
	} else if (key === "backspace") {
		ButtonPressed("⌫");
	} else if (/^[a-z]$/.test(key)) {
		ButtonPressed(key.toUpperCase());
	}
}

export let data = $state({
	value: {
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
		9: [],
		10: [],
	},
});

let WordleGamesData = localStorage.getItem("WordleGamesData") || "";

if (WordleGamesData != "") {
	data.value = JSON.parse(WordleGamesData);
} else {
	data.value = {
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
		9: [],
		10: [],
	};
}
