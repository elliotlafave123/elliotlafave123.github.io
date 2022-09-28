const btn = document.querySelector(".btn");
const adviceText = document.querySelector(".advice");
const number = document.querySelector("#num");

const showData = function (data) {
	adviceText.textContent = data.advice;
	number.textContent = data.id;
};

const getData = function (x) {
	fetch(`https://api.adviceslip.com/advice/${x}`)
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			showData(data.slip);
		});
};

btn.addEventListener("click", function () {
	let x = Math.random() * 223;
	getData(x);
});
