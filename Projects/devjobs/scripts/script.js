const container = document.querySelector(".app");
const search = document.querySelector(".search");

const phraseInput = document.getElementById("searchPhrase");
const locationInput = document.getElementById("searchLocation");
const fullTimeCheckbox = document.getElementById("fullTimeOnly");

const searchButton = document.getElementById("SearchButton");

let state = {};

const getData = () => {
	const request = new XMLHttpRequest();
	request.open("GET", "../data/data.json", false);
	request.send(null);
	state.data = JSON.parse(request.responseText);
};
getData();

const showJob = (job) => {
	const markup = `
        <div class="card">
            <div class="card-logo" style="background-color: ${job.logoBackground}">
                <img src="${job.logo}" alt="${job.position}" />
            </div>
            <div class="card-top">
                <p>${job.postedAt}</p>
                <div class="card-dot"></div>
                <p>${job.contract}</p>
            </div>
            <a href="#${job.id}">${job.position}</a>
            <p>${job.company}</p>
            <span class="card-location">${job.location}</span>
        </div>
    `;

	container.insertAdjacentHTML("beforeend", markup);
};

const showAllJobs = () => {
	container.innerHTML = "";
	search.classList.remove("invisible");

	let data;

	if (fullTimeCheckbox.checked) {
		console.log("checked");
		data = state.data.filter((job) => job.contract === "Full Time");

		data.forEach((job) => {
			showJob(job);
		});
	} else {
		state.data.forEach((job) => {
			showJob(job);
		});
	}
};

const generateLi = (item) => {
	return `
        <li>${item}</li>
    `;
};

const showJobInfomation = (id) => {
	const job = state.data.find((el) => el.id === id);
	if (!job) return showAllJobs();
	search.classList.add("invisible");

	const markup = `
    <div class="info">
				<div class="info-header">
					<div class="info-header-logo" style="background-color: ${job.logoBackground}">
						<img src="${job.logo}" alt="${job.position}" />
					</div>

					<div class="info-right">
						<div class="info-header-content">
							<h2>${job.company}</h2>
							<p>${job.website}</p>
						</div>

						<button class="btn btn-2">Company Site</button>
					</div>
				</div>
				<div class="info-body">
					<div class="info-body-top">
						<div class="info-body-top__content">
							<p>${job.postedAt}</p>
							<div class="info-body-top-dot"></div>
							<p>${job.contract}</p>
						</div>
						<a href="#${job.id}">${job.position}</a>
						<span class="info-body-top-location">United Kingdom</span>
					</div>
					<button class="btn">Apply Now</button>
				</div>
				<div class="info-content">
					<p>
						${job.description}
					</p>
					<h3>Requirements</h3>
					<p>
						${job.requirements.content}
					</p>
					<ul>
                        ${job.requirements.items.map((el) => generateLi(el)).join("")}
					</ul>
					<h3>What You Will Do</h3>
					<p>
                        ${job.role.content}
					</p>
					<ol>
                        ${job.role.items.map((el) => generateLi(el)).join("")}
					</ol>
				</div>
			</div>
			<footer class="footer">
				<div class="footer-content hide-mobile">
					<h3>${job.position}</h3>
					<p>${job.company}</p>
				</div>
				<button class="btn">Apply Now</button>
			</footer>
    `;

	container.innerHTML = markup;
};

function locationHashChanged() {
	id = parseInt(location.hash.slice(1));
	search.classList.add("invisible");
	showJobInfomation(id);
}

window.onhashchange = locationHashChanged;
const init = () => {
	if (location.hash === undefined || location.hash === null || location.hash === "#") {
		showAllJobs();
	} else {
		id = parseInt(location.hash.slice(1));
		showJobInfomation(id);
	}
};
init();

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

searchButton.addEventListener("click", (e) => {
	e.preventDefault();
	let data = [];
	let phrase = phraseInput.value;
	let location = locationInput.value;

	if (!phrase && !location) return showAllJobs();

	console.log(phrase);
	console.log(location);

	// Only phrase it inputted
	if (!locationInput.value && phrase != null) {
		console.log("Only Phrase");
		data.push(state.data.filter((job) => job.company.toLowerCase().includes(phrase.toLowerCase())));
		data.push(state.data.filter((job) => job.position.toLowerCase().includes(phrase.toLowerCase())));
		data.push(state.data.filter((job) => job.description.toLowerCase().includes(phrase.toLowerCase())));
	}

	if (location != "" && phrase != "") {
		console.log("Both");
		data.push(state.data.filter((job) => job.company.toLowerCase().includes(phrase.toLowerCase())));
		data.push(state.data.filter((job) => job.position.toLowerCase().includes(phrase.toLowerCase())));
		data.push(state.data.filter((job) => job.description.toLowerCase().includes(phrase.toLowerCase())));
		data.push(state.data.filter((job) => job.location.toLowerCase().includes(location.toLowerCase())));
	}

	if (!phrase && location != null) {
		console.log("Only Location");
		data.push(state.data.filter((job) => job.location.toLowerCase().includes(location.toLowerCase())));
	}

	let merged = [].concat.apply([], data);
	console.log(merged);
	let unique = merged.filter(onlyUnique);
	let fullTimeChecked;

	if (fullTimeCheckbox.checked) {
		console.log("checked");
		fullTimeChecked = unique.filter((job) => job.contract === "Full Time");
	}

	if (fullTimeChecked) {
		container.innerHTML = "";

		fullTimeChecked.forEach((job) => {
			showJob(job);
		});
	}
});
