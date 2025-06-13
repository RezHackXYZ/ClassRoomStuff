export let card = $state({ Q: "", a: "" });

export let statusOfCard = $state({
	currentlyAnswered: false,
	flipped: false,
	exiting: false,
	exitingToRight: false,
	entering: false,
});

export let StorageDeck = $state({ v: [] });

export let deck = $state({ v: [] });

export function SetNewDeck(newDeck, ThisIsOfPageLoad = true) {
	StorageDeck.v = newDeck;
	resetDeck();
	stats.isDeckEmpty = ThisIsOfPageLoad;
}

export function SelectNewDeck(deckNumber) {
	deck.v = StorageDeck.v[deckNumber].cards;
	resetDeck();
}

export let stats = $state({
	isDeckEmpty: true,
	AnswerKnown: 0,
	AnswerNotKnown: 0,
	AnswerNotChecked: deck.v.length,
});

let CurrentDeck = {
	AnswersKnown: [],
	AnswersNotKnown: [],
	AnswersNotChecked: $state.snapshot(deck).v,
};

export function resetDeck() {
	CurrentDeck.AnswersKnown = [];
	CurrentDeck.AnswersNotKnown = [];
	CurrentDeck.AnswersNotChecked = $state.snapshot(deck).v;
	stats.AnswerKnown = 0;
	stats.AnswerNotKnown = 0;
	stats.AnswerNotChecked = deck.v.length;
	stats.isDeckEmpty = false;
	SetNewCard();
}

function SetNewCard() {
	// Check if deck is complete
	if (CurrentDeck.AnswersNotChecked.length === 0 && CurrentDeck.AnswersNotKnown.length === 0) {
		stats.isDeckEmpty = true;
		return;
	}

	let sourceArray;

	// First go through unchecked cards, then cycle through unknown cards
	if (CurrentDeck.AnswersNotChecked.length > 0) {
		sourceArray = CurrentDeck.AnswersNotChecked;
	} else {
		sourceArray = CurrentDeck.AnswersNotKnown;
	}

	let randomIndex = Math.floor(Math.random() * sourceArray.length);
	let selectedCard = sourceArray[randomIndex];

	card.Q = selectedCard.Q;
	card.a = selectedCard.a;

	// Remove from source array
	sourceArray.splice(randomIndex, 1);

	// Update stats
	updateStats();
}

function updateStats() {
	stats.AnswerKnown = CurrentDeck.AnswersKnown.length;
	stats.AnswerNotKnown = CurrentDeck.AnswersNotKnown.length;
	stats.AnswerNotChecked = CurrentDeck.AnswersNotChecked.length;
}

SetNewCard();

function AnimateCard() {
	statusOfCard.exiting = true;

	setTimeout(() => {
		statusOfCard.exiting = false;
		statusOfCard.entering = true;
		SetNewCard();

		setTimeout(() => {
			statusOfCard.entering = false;

			setTimeout(() => {
				statusOfCard.currentlyAnswered = false;
			}, 500);
		}, 400);
	}, 400);
}

export function nextCard(side) {
	if (statusOfCard.currentlyAnswered) {
		return;
	}

	// Create a copy of current card before moving to next
	let currentCard = { Q: card.Q, a: card.a };

	if (side == "right") {
		// User knows this card
		CurrentDeck.AnswersKnown.push(currentCard);
	} else {
		// User doesn't know this card - add to unknown pile for re-asking
		CurrentDeck.AnswersNotKnown.push(currentCard);
	}

	statusOfCard.currentlyAnswered = true;

	if (side == "right") {
		statusOfCard.exitingToRight = true;
	} else {
		statusOfCard.exitingToRight = false;
	}

	if (statusOfCard.flipped) {
		statusOfCard.flipped = false;
		setTimeout(() => {
			AnimateCard();
		}, 300);
	} else {
		AnimateCard();
	}
}
