const spin = document.getElementById("spin");
const again = document.getElementById("again");
const takeawayName = document.querySelector(".name");
const imgContainer = document.getElementById("imgContainer");
const main = document.querySelector("main");

const takeaways = ["Dominos", "KFC", "PapaJohns", "SubWay", "McDonald's"];

let delayInMilliseconds = 3000;

function getTakeaways() {
	position = Math.trunc(Math.random() * takeaways.length);
	takeawayName.textContent = `...`;

	imgContainer.innerHTML = `
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
    <img src="img/PapaJohns.png" id="img" />
    <img src="img/KFC.png" id="img" />
    <img src="img/McDonald's.png" id="img" />
    <img src="img/SubWay.png" id="img" />
    <img src="img/Dominos.png" id="img" />
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
