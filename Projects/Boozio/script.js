"use strict";

//////////////////////////
// DRINKS

/////   VODKA   /////
const absolut = {
	name: "Absolut",
	img: "img/vodka.png",
};

const smirnoff = {
	name: "Smirnoff",
	img: "img/smirnoff.png",
};

const russianStandard = {
	name: "Russian Standard",
	img: "img/russianStandard.jpg",
};

const valdivar = {
	name: "Valdivar",
	img: "img/valdivar.jfif",
};

const absolutRaspberry = {
	name: "Absolut Raspberry",
	img: "img/absolutRaspberry.jfif",
};

const absolutWatermelon = {
	name: "Absolut Watermelon",
	img: "img/absolutWatermelon.jfif",
};

const vodka = [
	absolut,
	absolutWatermelon,
	absolutRaspberry,
	smirnoff,
	russianStandard,
	valdivar,
];

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

const bells = {
	name: "Bells",
	img: "img/bells.jpeg",
};

const glenlivet = {
	name: "Glenlivet",
	img: "img/glenlivet.jpeg",
};

const highland = {
	name: "Highland Park",
	img: "img/highlandPark.jpeg",
};

const jura = {
	name: "Jura",
	img: "img/jura.jpeg",
};

const whiskey = [jamersons, JD, famousGrouse, bells, jura, highland, glenlivet];

/////   GIN   /////
const gordons = {
	name: "Gordons",
	img: "img/gin.png",
};

const bombaySapphire = {
	name: "Bombay Sapphire",
	img: "img/bombaySapphire.png",
};

const gordonsPink = {
	name: "Gordons Pink",
	img: "img/gordonsPink.jpeg",
};

const tanqueray = {
	name: "Tanqueray",
	img: "img/tanqueray.jpeg",
};

const whitleyRhubarb = {
	name: "Whitley Rhubarb",
	img: "img/whitleyRhubarb.jpeg",
};

const gin = [gordons, bombaySapphire, gordonsPink, tanqueray, whitleyRhubarb];

/////   RUM   /////
const bacardi = {
	name: "Bacardi",
	img: "img/rum.png",
};

const bacardiDark = {
	name: "Bacardi Dark",
	img: "img/bacardiDark.jfif",
};

const captainMorganTiki = {
	name: "Captain Morgan's Tiki",
	img: "img/captainMorganTiki.jfif",
};

const malibu = {
	name: "Malibu",
	img: "img/malibu.jfif",
};

const dmf = {
	name: "Dead Man's Fingers",
	img: "img/deadMansFingers.jfif",
};

const captainMorgan = {
	name: "Captain Morgans",
	img: "img/captainMorgan.png",
};

const rum = [
	bacardi,
	captainMorgan,
	captainMorganTiki,
	malibu,
	dmf,
	bacardiDark,
];

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

const sambuca = {
	name: "Sambuca",
	img: "img/sambuca.png",
};

const shots = [tequila, sourzApple, sourzCherry, sourzRaspberry, sambuca];

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

const group1 = document.querySelector(".sidebar-content-1");
const group2 = document.querySelector(".sidebar-content-2");
const group3 = document.querySelector(".sidebar-content-3");
const group4 = document.querySelector(".sidebar-content-4");
const group5 = document.querySelector(".sidebar-content-5");

const toggle1 = document.getElementById("toggle-1");
const toggle2 = document.getElementById("toggle-2");
const toggle3 = document.getElementById("toggle-3");
const toggle4 = document.getElementById("toggle-4");
const toggle5 = document.getElementById("toggle-5");
let groups = [group1, group2, group3, group4, group5];

let delay = 2500;

const init = function (data) {
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

// check checkboxes by group
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

// spinwheel animation
const spinwheel = function (drinks) {
	let html = [];
	imgContainer.innerHTML = "";

	drinks.forEach(function (drink, i) {
		html.push(
			`<img src="${drink.img}" id="img" class="finalImg spinwheel"/>`
		);
	});

	function shuffle(array) {
		let currentIndex = array.length,
			randomIndex;

		// While there remain elements to shuffle...
		while (currentIndex != 0) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex],
				array[currentIndex],
			];
		}

		return array;
	}

	shuffle(html);
	console.log(html);

	imgContainer.insertAdjacentHTML("afterbegin", html.flat());
};

// add drinks to array based on checkboxes
const whatDrinks = function (data) {
	drinks = [];
	dataFlat.forEach(function (drink, i) {
		if (drink.checkbox.checked === true) {
			drinks.push(drink);
		}
	});

	spinwheel(drinks);

	setTimeout(() => {
		return drinks;
	}, delay);
};

// show the random drink
function getDrink() {
	whatDrinks(data);
	let position;
	position = Math.trunc(Math.random() * drinks.length);
	let picked = drinks[position];

	drinkName.textContent = `. . .`;

	// imgContainer.innerHTML = `
	//     <img src="img/questionMark.png" id="img" class="finalImg"/>
	// `;

	setTimeout(function () {
		//your code to be executed after 1 second
		imgContainer.innerHTML = `<img src="${picked.img}" id="img" class="finalImg"/>`;

		const img = document.getElementById("img");

		drinkName.textContent = picked.name;
		spin.classList.add("hidden");
		again.classList.remove("hidden");

		img.src = `${picked.img}`;
	}, 2800);
}

spin.addEventListener("click", getDrink);
again.addEventListener("click", getDrink);

// open sidebar
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

// code for the collapsing containers in menu
const button1 = document.querySelector(".sidebar-title-1");
const button2 = document.querySelector(".sidebar-title-2");
const button3 = document.querySelector(".sidebar-title-3");
const button4 = document.querySelector(".sidebar-title-4");
const button5 = document.querySelector(".sidebar-title-5");

let btn1 = false;
let btn2 = false;
let btn3 = false;
let btn4 = false;
let btn5 = false;

groups.forEach(function (group, i) {
	group.classList.add("hidden");
});

const closeAll = function (x) {
	if (x != 1) {
		group1.classList.add("hidden");
	}
	if (x != 2) {
		group2.classList.add("hidden");
	}
	if (x != 3) {
		group3.classList.add("hidden");
	}
	if (x != 4) {
		group4.classList.add("hidden");
	}
	if (x != 5) {
		group5.classList.add("hidden");
	}
};

button1.addEventListener("click", () => {
	if (!btn1) {
		closeAll(1);
		group1.classList.remove("hidden");
		btn1 = true;
	} else {
		group1.classList.add("hidden");
		btn1 = false;
	}
});

button2.addEventListener("click", () => {
	if (!btn2) {
		closeAll(2);
		group2.classList.remove("hidden");
		btn2 = true;
	} else {
		group2.classList.add("hidden");
		btn2 = false;
	}
});

button3.addEventListener("click", () => {
	if (!btn3) {
		closeAll(3);
		group3.classList.remove("hidden");
		btn3 = true;
	} else {
		group3.classList.add("hidden");
		btn3 = false;
	}
});

button4.addEventListener("click", () => {
	if (!btn4) {
		closeAll(4);
		group4.classList.remove("hidden");
		btn4 = true;
	} else {
		group4.classList.add("hidden");
		btn4 = false;
	}
});

button5.addEventListener("click", () => {
	if (!btn5) {
		closeAll(5);
		group5.classList.remove("hidden");
		btn5 = true;
	} else {
		group5.classList.add("hidden");
		btn5 = false;
	}
});
