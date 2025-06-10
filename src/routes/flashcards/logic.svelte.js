export let card = $state({ Q: "What is the capital of France?", a: "Paris" });

export let statusOfCard = $state({
	currentlyAnswered: false,
	flipped: false,
	exiting: false,
	exitingToRight: false,
	entering: false,
});

function AnimateCard() {
	statusOfCard.exiting = true;

	setTimeout(() => {
		statusOfCard.exiting = false;
		statusOfCard.entering = true;

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
