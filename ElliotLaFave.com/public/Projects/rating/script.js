const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const rating = document.getElementById("ratingContainer");
const selectedNum = document.getElementById("selected");
const submitBtn = document.querySelector(".submit");

page2.classList.add("hidden");
let numberSelected = false;

const clearActiveButtons = function () {
	rating.children[0].classList.remove("active");
	rating.children[1].classList.remove("active");
	rating.children[2].classList.remove("active");
	rating.children[3].classList.remove("active");
	rating.children[4].classList.remove("active");
};

rating.addEventListener("click", function (e) {
	e.preventDefault();
	clearActiveButtons();
	x = e.target.closest("button").dataset.number;
	selectedNum.textContent = x;
	e.target.closest("button").classList.add("active");
	numberSelected = true;
});

submitBtn.addEventListener("click", function (e) {
	e.preventDefault();
	if (numberSelected === true) {
		page1.classList.add("hidden");
		page2.classList.remove("hidden");
	}
});
