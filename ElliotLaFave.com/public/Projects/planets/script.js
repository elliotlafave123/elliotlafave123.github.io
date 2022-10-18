const planetName = document.getElementById("planetName");
const paragraph = document.getElementById("paragraph");
const wikipediaLink = document.getElementById("wikipediaLink");
const planetImg = document.querySelector(".planet");
const geologyImg = document.querySelector(".geologyImg");

const dataRotation = document.getElementById("dataRotation");
const dataRevolution = document.getElementById("dataRevolution");
const dataRadius = document.getElementById("dataRadius");
const dataTemp = document.getElementById("dataTemp");

const overviewBtn = document.getElementById("overviewBtn");
const structureBtn = document.getElementById("structureBtn");
const geologyBtn = document.getElementById("geologyBtn");

const overviewBtnMob = document.getElementById("overviewBtnMob");
const structureBtnMob = document.getElementById("structureBtnMob");
const geologyBtnMob = document.getElementById("geologyBtnMob");

const openMenuBtn = document.getElementById("openMenu");
const mobileMenu = document.getElementById("mobileNavContainer");

const planetColor = document.querySelector(":root");
let dataPage = 0;

// Open mobile nav menu
// mobileMenu.classList.add("hidden");
openMenuBtn.addEventListener("click", function () {
	mobileMenu.classList.toggle("slideIn");
	overviewBtnMob.classList.add("linkMobActive");
});

// User clicks a nav link
// THEN: Data Updated on the page
// AND: image changed
function setImageSrc(obj) {
	if (dataPage == 0) {
		planetImg.src = obj.images.planet;
		geologyImg.classList.add("hidden");
		wikipediaLink.href = `${obj.overview.source}`;
	} else if (dataPage == 1) {
		planetImg.src = obj.images.internal;
		geologyImg.classList.add("hidden");
		wikipediaLink.href = `${obj.structure.source}`;
	} else {
		planetImg.src = obj.images.planet;
		geologyImg.src = obj.images.geology;
		geologyImg.classList.remove("hidden");
		wikipediaLink.href = `${obj.geology.source}`;
	}
}

// AND: active button reset to overview
// AND: Color changed to that planets color
const updateData = function (obj) {
	planetName.textContent = obj.name;
	planetImg.src = obj.images.planet;
	dataPage = 0;
	geologyImg.classList.add("hidden");
	mobileMenu.classList.toggle("slideIn");
	window.scrollTo(0, 0);

	function updateDataCards() {
		dataRotation.textContent = obj.rotation;
		dataRevolution.textContent = obj.revolution;
		dataRadius.textContent = obj.radius;
		dataTemp.textContent = obj.temperature;
	}
	updateDataCards();

	paragraph.textContent = `${obj.overview.content}`;

	wikipediaLink.href = `${obj.overview.source}`;

	clearActiveButtons();
	overviewBtn.classList.add("active");
	overviewBtnMob.classList.add("linkMobActive");

	planetColor.style.setProperty("--planet-color", `${obj.color}`);

	setImageSrc(obj);
};

// User clicks on buttons
// THEN: Update data on info section
// AND: change image to core
overviewBtn.classList.add("active");

let infoPageNum = 0;

const infoButtons = document.querySelectorAll(".btn");
const infoButtonsMob = document.querySelectorAll(".linkMob");

overviewBtnMob.classList.add("linkMobActive");

const changeInfoData = function (dataPage) {
	if (dataPage == 0) {
		paragraph.textContent = `${pageData.overview.content}`;
		setImageSrc(pageData);
	} else if (dataPage == 1) {
		console.log(pageData);
		paragraph.textContent = `${pageData.structure.content}`;

		setImageSrc(pageData);
	} else {
		paragraph.textContent = `${pageData.geology.content}`;
		setImageSrc(pageData);
	}
};

infoButtons.forEach((btn) => {
	btn.addEventListener("click", function () {
		dataPage = btn.dataset.info;

		clearActiveButtons();
		btn.classList.add("active");

		changeInfoData(dataPage);
	});
});

const clearActiveButtons = function () {
	infoButtons.forEach((btn) => btn.classList.remove("active"));
	infoButtonsMob.forEach((btn) => btn.classList.remove("linkMobActive"));
};

infoButtonsMob.forEach((link) => {
	link.addEventListener("click", function () {
		dataPage = link.dataset.info;

		clearActiveButtons();
		link.classList.add("linkMobActive");

		changeInfoData(dataPage);
	});
});

// 1. Create a function that gets data from JSON
// taking in an input of 'venus' etc.

let data;
let pageData;
const setData = function (jsondata) {
	data = jsondata;
	pageData = jsondata[0];
	console.log(pageData);
};

fetch("./data.json")
	.then((response) => {
		return response.json();
	})
	.then((jsondata) => {
		setData(jsondata);
	});

// add event listeners to buttons and print the corrosponding
// data based on the data- value on the html element
const getData = function (planet) {
	let result;
	data.forEach((obj) => {
		if (obj.name === planet) {
			result = obj;
		}
	});
	updateData(result);
	pageData = result;
};

const navLinks = document.querySelectorAll(".link");

navLinks.forEach((link) => {
	link.addEventListener("click", function () {
		getData(link.dataset.planet);
		dataPage = 0;
		infoPageNum = 0;
	});
});
