"use strict";

//////////////////////////
// DRINKS

/////   VODKA   /////
const absolut = {
	name: "absolut",
	img: "img/Vodka.png",
};

const smirnoff = {
	name: "Smirnoff",
	img: "img/smirnoff.png",
};

const vodka = [absolut, smirnoff];

/////   WHISKEY   /////
const jamersons = {
	name: "Jamersons",
	img: "img/Whiskey.png",
};

const JD = {
	name: "Jack Daniel's",
	img: "img/JD.png",
};

const famousGrouse = {
	name: "The Famous Grouse",
	img: "img/famousGrouse.png",
};

const whiskey = [jamersons, JD, famousGrouse];

/////   GIN   /////
const gordons = {
	name: "Gordons",
	img: "img/Gin.png",
};

const bombaySapphire = {
	name: "Bombay Sapphire",
	img: "img/bombaySapphire.png",
};

const gin = [gordons, bombaySapphire];

/////   RUM   /////
const bacardi = {
	name: "Bacardi",
	img: "img/Rum.png",
};

const captainMorgan = {
	name: "Captain Morgans",
	img: "img/captainMorgan.png",
};

const rum = [bacardi, captainMorgan];

/////   SHOTS   /////

const shots = [];

let data = [vodka, whiskey, gin, rum];
let dataFlat = data.flat(1);
console.log(data);

const spin = document.getElementById("spin");
const again = document.getElementById("again");
const drinkName = document.querySelector(".name");
const imgContainer = document.getElementById("imgContainer");
const main = document.querySelector("main");
const navBtn = document.getElementById("navBtn");
const sidebar = document.getElementById("sidebar");
const form = document.getElementById("sidebarForm");

const group1 = document.querySelector(".form-group-1");
const group2 = document.querySelector(".form-group-2");
const group3 = document.querySelector(".form-group-3");
const group4 = document.querySelector(".form-group-4");
const group5 = document.querySelector(".form-group-5");

const groups = [group1, group2, group3, group4, group5];
let delayInMilliseconds = 3000;

const init = function (data) {
	// form.innerHTML = `
	// <div class="form-group-1"><h5>vodkas</h5></div>
	// <div class="form-group-2"><h5>whiskeys</h5></div>
	// <div class="form-group-3"><h5>gins</h5></div>
	// <div class="form-group-4"><h5>rums</h5></div>
	// <div class="form-group-5"><h5>shots</h5></div>
	// `;
	let groupNumber = 1;
	let currentGroop;

	// add drinks to sidebar
	data.forEach(function (group, i) {
		console.log(group);

		let groupHTML = `
		<div class="form-group-1"><h5>vodkas</h5></div>
		`;
		group.insertAdjacentHTML("afterbegin", groupHTML);

		group.forEach(function (drink, i) {
			let html = "";

			html = `
			<div class="form-item">
				<input type="checkbox" class="checkbox" id="${drink.name}" />
				<label for="${drink.name}">${drink.name}</label>
			</div>
			`;

			currentGroop.insertAdjacentHTML("afterbegin", html);

			drink.checkbox = document.getElementById(`${drink.name}`);
		});
	});

	// check checkboxes
	dataFlat.forEach(function (drink, i) {
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
