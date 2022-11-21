const app = document.querySelector(".cards");
const searchInput = document.getElementById("search");
const regionSelect = document.getElementById("Region");

const State = {
	Countries: undefined,
};

insertCard = (country) => {
	const markup = `
        <div class="card PartOfCard" data-name="${country.name.common}" tabindex="0">
            <img src="${country.flags.png}" alt="Flag of ${country.name.common}" class="PartOfCard" loading="lazy"/>

            <div class="card-content PartOfCard">
                <h2 class="PartOfCard">${country.name.common}</h2>
                <span class="PartOfCard">Population:</span>
                <p class="PartOfCard">${country.population}</p>
                <br />
                <span class="PartOfCard">Region:</span>
                <p class="PartOfCard">${country.region}</p>
                <br />
                <span class="PartOfCard">Capital:</span>
                <p class="PartOfCard">${country.capital ? country.capital[0] : ""}</p>
            </div>
        </div>
    `;

	app.insertAdjacentHTML("afterbegin", markup);
};

showCards = (data) => {
	app.innerHTML = "";
	data.forEach((country) => {
		insertCard(country);
	});
};

getAll = () => {
	searchInput.value = "";
	backButton.classList.add("invisible");
	inputs.classList.remove("invisible");

	if (regionSelect.value !== "All") {
		getByRegion(regionSelect.value);
	}

	// console.log(!State.Countries);
	console.log(State.Countries);
	if (!State.Countries) {
		console.log("False");
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => {
				State.Countries = data;
				showCards(data);
			});
	} else {
		console.log("true");
		showCards(State.Countries);
	}
};

getByName = (name) => {
	fetch(`https://restcountries.com/v3.1/name/${name}`)
		.then((res) => res.json())
		.then((data) => {
			if (!data) return;
			showCards(data);
		});
};

searchInput.addEventListener("input", function (e) {
	e.preventDefault();
	if (!searchInput.value) return;

	getByName(searchInput.value);
});

getByRegion = (region) => {
	fetch(`https://restcountries.com/v3.1/region/${region}`)
		.then((res) => res.json())
		.then((data) => {
			if (!data) return;
			showCards(data);
		});
};

regionSelect.addEventListener("change", function (e) {
	e.preventDefault();
	if (!regionSelect.value) return;
	if (regionSelect.value == "") return;
	if (regionSelect.value === "All") return getAll();

	getByRegion(regionSelect.value);
});

const getTag = (countryCode) => {
	fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
		.then((res) => res.json())
		.then((data) => {
			let country = data[0];
			console.log(`<div class="tag">${country.name.common}</div>`);
			return `<div class="tag">${country.name.common}</div>`;
		});
};

const inputs = document.querySelector(".inputs");
showInnerPage = (COUNTRY) => {
	backButton.classList.remove("invisible");
	app.innerHTML = "";

	let country = COUNTRY[0];

	// let bordersMarkup = [];
	// country.borders.forEach((border) => {
	// 	bordersMarkup.push(getTag(border));
	// });

	const markup = `
    <div class="inner-page">
					<div class="inner-page__image">
						<img src="${country.flags.png}" alt="Flag of ${country.name.common}" />
					</div>

					<div class="inner-page__content">
						<h1>${country.name.common}</h1>

						<div class="inner-page__data">
							<div class="inner-page__data-row">
								<span>Native Name:</span>
								<p>${country.name.common}</p>
							</div>
							<div class="inner-page__data-row">
								<span>Top Level Domain:</span>
								<p>${country.tld}</p>
							</div>
							<div class="inner-page__data-row">
								<span>Population:</span>
								<p>${country.population.toLocaleString("en-UK")}</p>
							</div>
							<div class="inner-page__data-row">
								<span>Currency:</span>
								<p>${Object.values(country.currencies)[0].name}</p>
							</div>
							<div class="inner-page__data-row">
								<span>Region:</span>
								<p>${country.region}</p>
							</div>
							<div class="inner-page__data-row">
								<span>Sub Region:</span>
								<p>${country.subregion}</p>
							</div>
							<div class="inner-page__data-row">
								<span>Capital:</span>
								<p>${country.capital[0]}</p>
							</div>
						</div>

						
					</div>
				</div>
    `;

	// <div class="inner-page__border-countries">
	// 	<span>Border Countries: </span>
	// 	${bordersMarkup}
	// </div>

	app.innerHTML = markup;

	inputs.classList.add("invisible");
};

function remove_hash_from_url() {
	var uri = window.location.toString();

	if (uri.indexOf("#") > 0) {
		var clean_uri = uri.substring(0, uri.indexOf("#"));

		window.history.replaceState({}, document.title, clean_uri);
	}
}

const backButton = document.getElementById("back");
backButton.addEventListener("click", function (e) {
	e.preventDefault();

	remove_hash_from_url();
	init();
});

init = () => {
	if (!window.location.hash) {
		getAll();
	} else {
		console.log(window.location.hash.slice(1));
		fetch(`https://restcountries.com/v3.1/name/${window.location.hash.slice(1)}`)
			.then((res) => res.json())
			.then((data) => {
				if (!data) {
					return getAll();
				} else {
					showInnerPage(data);
				}
			});
	}
};
init();

document.addEventListener("click", (e) => {
	if (e.target.classList.contains("PartOfCard")) {
		window.location.hash = e.target.closest(".card").dataset.name;
	}
});

addEventListener("hashchange", (e) => {
	if (!window.location.hash) {
		getAll();
	} else {
		console.log(window.location.hash.slice(1));
		fetch(`https://restcountries.com/v3.1/name/${window.location.hash.slice(1)}`)
			.then((res) => res.json())
			.then((data) => {
				if (!data) {
					return getAll();
				}
				showInnerPage(data);
			});
	}
});

document.addEventListener("keydown", (event) => {
	if (event.code === "Enter" || event.code === "NumpadEnter") {
		document.activeElement.click();
	}
});
