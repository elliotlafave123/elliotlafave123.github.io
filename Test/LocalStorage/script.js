const text = document.getElementById("text");
const btn = document.getElementById("btn");
localStorage.setItem("played", "true");

let x = localStorage.getItem("incrementer");
text.textContent = localStorage.getItem("incrementer");

btn.addEventListener("click", () => {
	x = localStorage.getItem("incrementer");
	y = Number(x) + 1;
	localStorage.setItem("incrementer", y);
	text.textContent = localStorage.getItem("incrementer");
});
