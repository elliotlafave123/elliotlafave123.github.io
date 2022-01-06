"use strict";

const vodka = {
	name: "vodka",
	img: "img/Vodka.png",
};

const whiskey = {
	name: "whiskey",
	img: "img/Whiskey.png",
};

const gin = {
	name: "gin",
	img: "img/Gin.png",
};

const rum = {
	name: "rum",
	img: "img/Rum.png",
};

let data = [vodka, whiskey, gin, rum];

const spin = document.getElementById("spin");
const again = document.getElementById("again");
const drinkName = document.querySelector(".name");
const imgContainer = document.getElementById("imgContainer");
const main = document.querySelector("main");
const navBtn = document.getElementById("navBtn");
const sidebar = document.getElementById("sidebar");
const form = document.getElementById("sidebarForm");

let delayInMilliseconds = 3000;

const init = function (data) {
	form.innerHTML = "";

	// add drinks to sidebar
	data.forEach(function (drink, i) {
		let html = "";

		html = `
        <div class="form-item">
            <input type="checkbox" id="${drink.name}" />
            <label for="${drink.name}">${drink.name}</label>
        </div>
        `;

		form.insertAdjacentHTML("afterbegin", html);

		drink.checkbox = document.getElementById(`${drink.name}`);
	});

	// check checkboxes
	data.forEach(function (drink, i) {
		let x = drink.checkbox;
		x.checked = true;
	});
};
init(data);

let drinks = [];

const whatDrinks = function (data) {
	drinks = [];
	data.forEach(function (drink, i) {
		if (drink.checkbox.checked === true) {
			drinks.push(drink);
		}
	});
	return drinks;
};

function getTakeaways() {
	whatDrinks(data);
	let position;
	position = Math.trunc(Math.random() * drinks.length);
	let picked = drinks[position];

	drinkName.textContent = `. . .`;

	imgContainer.innerHTML = `
        <img src="img/questionMark.png" id="img" class="finalImg"/>
    `;
	// imgContainer.innerHTML = `
	//     ${checkDominos.checked ? imgDominos : ""}
	//     ${checkKFC.checked ? imgKFC : ""}
	//     ${checkSubWay.checked ? imgSubWay : ""}
	//     ${checkPapaJhons.checked ? imgPapaJohns : ""}
	//     ${checkMcDonalds.checked ? imgMcDonalds : ""}
	// `;

	setTimeout(function () {
		//your code to be executed after 1 second
		imgContainer.innerHTML = `<img src="${picked.img}" id="img" class="finalImg"/>`;

		const img = document.getElementById("img");

		drinkName.textContent = picked.name;
		spin.classList.add("hidden");
		again.classList.remove("hidden");

		img.src = `${picked.img}`;
	}, delayInMilliseconds);
}

spin.addEventListener("click", getTakeaways);
again.addEventListener("click", getTakeaways);

sidebar.style.transform = "translate(-120vw, 0)";
let open = false;
navBtn.addEventListener("click", () => {
	if (open === false) {
		sidebar.style.transform = "translate(0,0)";
		open = true;
	} else {
		sidebar.style.transform = "translate(-100vw,0)";
		open = false;
	}
});
