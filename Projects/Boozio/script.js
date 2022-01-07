"use strict";

//////////////////////////
// DRINKS

/////   VODKA   /////
const absolut = {
	name: "absolut",
	img: "img/vodka.png",
};

const smirnoff = {
	name: "Smirnoff",
	img: "img/smirnoff.png",
};

const vodka = [absolut, smirnoff];

/////   WHISKEY   /////
const jamersons = {
	name: "Jamersons",
	img: "img/whiskey.png",
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
	img: "img/gin.png",
};

const bombaySapphire = {
	name: "Bombay Sapphire",
	img: "img/bombaySapphire.png",
};

const gin = [gordons, bombaySapphire];

/////   RUM   /////
const bacardi = {
	name: "Bacardi",
	img: "img/rum.png",
};

const captainMorgan = {
	name: "Captain Morgans",
	img: "img/captainMorgan.png",
};

const rum = [bacardi, captainMorgan];

/////   SHOTS   /////

const tequila = {
	name: "Tequila",
	img: "img/sierra.jpg",
};

const sourzCherry = {
	name: "Cherry Sourz",
	img: "img/sourz.jpg",
};

const sourzApple = {
	name: "Apple Sourz",
	img: "img/sourzApple.jpg",
};

const sourzRaspberry = {
	name: "Raspberry Sourz",
	img: "img/sourzRaspberry.jpg",
};

const jager = {
	name: "Jagermeister",
	img: "img/jager.jpg",
};

const shots = [tequila, sourzApple, sourzCherry, sourzRaspberry];

let data = [vodka, whiskey, gin, rum, shots];
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

const toggle1 = document.getElementById("toggle-1");
const toggle2 = document.getElementById("toggle-2");
const toggle3 = document.getElementById("toggle-3");
const toggle4 = document.getElementById("toggle-4");
const toggle5 = document.getElementById("toggle-5");
let groups = [group1, group2, group3, group4, group5];

let delayInMilliseconds = 3000;

const init = function (data) {
	// check group checkboxes
	toggle1.checked = true;
	toggle2.checked = true;
	toggle3.checked = true;
	toggle4.checked = true;
	toggle5.checked = true;

	// add drinks to sidebar
	data.forEach(function (group, i) {
		let z = 0;
		let groupDIV = groups[i];

		group.forEach(function (drink, i) {
			let html;

			html = `
			<div class="form-item">
				<input type="checkbox" class="checkbox" id="${drink.name}" />
				<label for="${drink.name}">${drink.name}</label>
			</div>
			`;

			groupDIV.insertAdjacentHTML("beforeend", html);

			drink.checkbox = document.getElementById(`${drink.name}`);
			drink.checkbox.checked = true;
			z++;
		});
	});

	// check checkboxes
	dataFlat.forEach(function (drink, i) {});
};
init(data);

const setGroups = function () {
	if (toggle1.checked) {
		data.push(vodka);
		vodka.forEach(function (check, i) {
			check.checkbox.checked = true;
		});
	} else {
		vodka.forEach(function (check, i) {
			check.checkbox.checked = false;
		});
	}

	if (toggle2.checked) {
		data.push(whiskey);
		whiskey.forEach(function (check, i) {
			check.checkbox.checked = true;
		});
	} else {
		whiskey.forEach(function (check, i) {
			check.checkbox.checked = false;
		});
	}

	if (toggle3.checked) {
		data.push(gin);
		gin.forEach(function (check, i) {
			check.checkbox.checked = true;
		});
	} else {
		gin.forEach(function (check, i) {
			check.checkbox.checked = false;
		});
	}

	if (toggle4.checked) {
		data.push(rum);
		rum.forEach(function (check, i) {
			check.checkbox.checked = true;
		});
	} else {
		rum.forEach(function (check, i) {
			check.checkbox.checked = false;
		});
	}

	if (toggle5.checked) {
		data.push(shots);
		shots.forEach(function (check, i) {
			check.checkbox.checked = true;
		});
	} else {
		shots.forEach(function (check, i) {
			check.checkbox.checked = false;
		});
	}
};

toggle1.addEventListener("change", setGroups);
toggle2.addEventListener("change", setGroups);
toggle3.addEventListener("change", setGroups);
toggle4.addEventListener("change", setGroups);
toggle5.addEventListener("change", setGroups);

let drinks = [];

const whatDrinks = function (data) {
	drinks = [];
	dataFlat.forEach(function (drink, i) {
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
		navBtn.innerHTML = `<i class="fas fa-times"></i>`;
	} else {
		sidebar.style.transform = "translate(-100vw,0)";
		open = false;
		navBtn.innerHTML = `<i class="fas fa-bars"></i>`;
	}
});
