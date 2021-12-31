const spin = document.getElementById("spin");
const again = document.getElementById("again");
const takeawayName = document.querySelector(".name");
const imgContainer = document.getElementById("imgContainer");
const main = document.querySelector("main");
const navBtn = document.getElementById("navBtn");
const sidebar = document.getElementById("sidebar");

let checkDominos = document.getElementById("Dominos");
let checkKFC = document.getElementById("KFC");
let checkPapaJhons = document.getElementById("PapaJohns");
let checkSubWay = document.getElementById("SubWay");
let checkMcDonalds = document.getElementById("McDonald's");

checkDominos.checked = true;
checkKFC.checked = true;
checkPapaJhons.checked = true;
checkSubWay.checked = true;
checkMcDonalds.checked = true;

const imgDominos = `<img src="img/Dominos.png" id="img" />`;
const imgPapaJohns = `<img src="img/PapaJohns.png" id="img" />`;
const imgKFC = `<img src="img/KFC.png" id="img" />`;
const imgMcDonalds = `<img src="img/McDonald's.png" id="img" />`;
const imgSubWay = `<img src="img/SubWay.png" id="img" />`;

let takeaways = [];

let delayInMilliseconds = 3000;

const whatTakeaways = function () {
	takeaways = [];
	if (checkDominos.checked) {
		takeaways.push("Dominos");
	}
	if (checkKFC.checked) {
		takeaways.push("KFC");
	}
	if (checkPapaJhons.checked) {
		takeaways.push("PapaJohns");
	}
	if (checkSubWay.checked) {
		takeaways.push("SubWay");
	}
	if (checkMcDonalds.checked) {
		takeaways.push("McDonald's");
	}
	console.log(takeaways);
};

const displayImages = function (takeaways) {
	// imgContainer.innerHTML = ``;
};

function getTakeaways() {
	whatTakeaways();
	position = Math.trunc(Math.random() * takeaways.length);
	takeawayName.textContent = `...`;

	imgContainer.innerHTML = `
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
        ${checkDominos.checked ? imgDominos : ""}
        ${checkKFC.checked ? imgKFC : ""}
        ${checkSubWay.checked ? imgSubWay : ""}
        ${checkPapaJhons.checked ? imgPapaJohns : ""}
        ${checkMcDonalds.checked ? imgMcDonalds : ""}
    `;

	setTimeout(function () {
		//your code to be executed after 1 second
		imgContainer.innerHTML = `<img src="img/" id="img" class="finalImg"/>`;
		console.log("hello");
		const img = document.getElementById("img");
		takeawayName.style.color = "#5f3dc4";

		takeawayName.textContent = takeaways[position];
		spin.classList.add("hidden");
		again.classList.remove("hidden");

		if (takeaways[position] === "Dominos") {
			takeawayName.style.color = "#2C628C";
		} else if (takeaways[position] === "KFC") {
			takeawayName.style.color = "#962918";
		} else if (takeaways[position] === "PapaJohns") {
			takeawayName.style.color = "#C83834";
		} else if (takeaways[position] === "SubWay") {
			takeawayName.style.color = "#265445";
		} else if (takeaways[position] === "McDonald's") {
			takeawayName.style.color = "#F7CD3D";
		}

		img.src = `img/${takeaways[position]}.png`;
	}, delayInMilliseconds);
}

spin.addEventListener("click", getTakeaways);
again.addEventListener("click", getTakeaways);

sidebar.style.transform = "translate(-100vw,0)";
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
