const bill = document.getElementById("bill");
const numPeople = document.getElementById("people");

const buttons = document.querySelectorAll(".btn");
const customPercentage = document.getElementById("custom");

const reset = document.getElementById("reset");

const tipAmount = document.getElementById("tipAmount");
const tipTotal = document.getElementById("tipTotal");

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const warning = document.getElementById("warning");

bill.addEventListener("focus", function () {
	green.classList.add("focusedGreen");
});

bill.addEventListener("blur", function () {
	green.classList.remove("focusedGreen");
});

numPeople.addEventListener("focus", function () {
	red.classList.add("focusedRed");
});

numPeople.addEventListener("blur", function () {
	red.classList.remove("focusedRed");
});

const allowResetButton = function () {
	if (!reset.classList.contains("allowed")) {
		reset.classList.add("allowed");
	}
};

const clearActiveButtons = function () {
	buttons.forEach((btn) => {
		btn.classList.remove("active");
	});
};

let tipPercentage = 0;

buttons.forEach((btn) => {
	btn.addEventListener("click", function () {
		setTipPercentage(btn);
		clearActiveButtons();
		btn.classList.add("active");
	});
});

customPercentage.addEventListener("input", function (e) {
	e.preventDefault();
	clearActiveButtons();
	if (customPercentage.value < 100) {
		tipPercentage = customPercentage.value;
		setTotals(bill.value, numPeople.value);
	}
});

const setTipPercentage = function (btn) {
	tipPercentage = btn.dataset.percentage;
	setTotals(bill.value, numPeople.value);
};

bill.addEventListener("input", function (e) {
	e.preventDefault();
	allowResetButton();

	setTotals(bill.value, numPeople.value);
});

const setTotals = function (bill, numPeople) {
	if (bill.value != 0 && tipPercentage != 0 && numPeople > 0) {
		allowResetButton();

		warning.textContent = "";

		let tipAmountNum = ((bill * (tipPercentage / 100)) / numPeople).toFixed(
			2
		);
		tipAmount.textContent = `£${tipAmountNum}`;
		let totalNum = (
			bill / numPeople +
			(bill * (tipPercentage / 100)) / numPeople
		).toFixed(2);
		tipTotal.textContent = `£${totalNum}`;
	} else {
		if (numPeople < 1) {
			warning.textContent = "Can't be zero";
		}
	}
};

numPeople.addEventListener("input", () => {
	setTotals(bill.value, numPeople.value);
});

reset.addEventListener("click", function () {
	clearActiveButtons();
	warning.textContent = "";
	tipAmount.textContent = "";
	tipTotal.textContent = "";
	customPercentage.value = null;
	numPeople.value = null;
	bill.value = null;
	reset.classList.remove("allowed");
});
