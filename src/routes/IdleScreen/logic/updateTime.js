export function updateTime(RowsObject, Digit, type) {
	let DigitsHeight = parseInt(type == "sec" ? "75" : "200");
	let LastZeroPos = Digit == 1 ? 10 : Digit == 0 && type == "hour" ? 2 : 6;
	let currentTime;

	if (type == "hour") {
		if (new Date().getHours() > 12) {
			currentTime = parseInt((new Date().getHours() - 12).toString().padStart(2, "0")[Digit]);
		} else {
			currentTime = parseInt(new Date().getHours().toString().padStart(2, "0")[Digit]);
		}
	} else if (type == "min") {
		currentTime = parseInt(new Date().getMinutes().toString().padStart(2, "0")[Digit]);
	} else if (type == "sec") {
		currentTime = parseInt(new Date().getSeconds().toString().padStart(2, "0")[Digit]);
	}

	if (currentTime == 0) {
		if (RowsObject.scrollTop != 0) {
			RowsObject.scrollTop = LastZeroPos * DigitsHeight;
			setTimeout(() => {
				RowsObject.scroll({
					top: 0,
					behavior: "instant",
				});
			}, 500);
		}
	} else {
		RowsObject.scrollTop = currentTime * DigitsHeight;
	}
}
