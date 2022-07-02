const textEL = document.getElementById("typingText");
const text = "An apprentice software developer.";

let idx = 1;
let speed = 300 / 4;

writeText();

let blink = false;
function showBlink() {
	if (blink) {
		textEL.innerText = `${text.slice(0, idx)}`;
		blink = false;
		showCursorBlinking();
	} else {
		textEL.innerText = `${text.slice(0, idx)} |`;
		blink = true;
		showCursorBlinking();
	}
}

function showCursorBlinking() {
	setTimeout(showBlink, 500);
}

function writeText() {
	textEL.innerText = `${text.slice(0, idx)} |`;

	idx++;

	if (textEL.innerText.length < 35) {
		setTimeout(writeText, speed);
	} else {
		showCursorBlinking();
	}
}
