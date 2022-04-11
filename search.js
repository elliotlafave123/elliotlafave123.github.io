let data;
let featuredData;
let featuredProjects;

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.querySelector(".search-input");
const dropdown = document.getElementById("dropdown");
const featured = document.getElementById("cardGrid3");
const featuredHome = document.getElementById("cardGrid3-home");

/* *********** Get Json Data *********** */
fetch("projects.json")
	.then((response) => {
		return response.json();
	})
	.then((jsondata) => {
		data = jsondata;
		featuredData = [
			jsondata[18],
			jsondata[16],
			jsondata[19],
			jsondata[12],
			jsondata[11],
			jsondata[20],
			jsondata[21],
			jsondata[27],
		];
		featuredProjects = featuredData;
		console.log(jsondata);
		console.log(featuredData);

		if (cardsContainer) {
			displayMovements(data);
		}

		getFeaturedData(featuredData);
	});

/* *********** Generate random featured data then call show functions *********** */
const getFeaturedData = function (data) {
	let picked = [];
	let data1 = [];

	const getRandomPositions = function () {
		let i = Math.floor(Math.random() * featuredProjects.length);

		if (!picked.includes(i)) {
			picked.push(i);
		}
	};

	while (picked.length < 3) {
		getRandomPositions();
	}

	const addData = function (picked) {
		for (let i = 0; i < 3; i++) {
			data1.push(featuredProjects[picked[i]]);
		}
	};
	addData(picked);
	console.log(picked);

	featuredProjects = data1;

	if (featuredHome) {
		displayFeaturedHome(featuredProjects);
	}

	if (featured) {
		displayFeatured(featuredProjects);
	}
};

/* *********** Featured home display function *********** */
const displayFeaturedHome = function (data) {
	featuredHome.innerHTML = "";

	data.forEach(function (project, i) {
		const html = `
        <div class="card ${i === 1 ? "card--middle" : ""}">
                <img src="${project.linkImg}" alt="" class="card__img">
                <div class="card__content">
                    <h4 class="card__title u-margin-bottom-medium">${
						project.title
					}</h4>
					<span>${project.date}</span>
                    <p class="card__text">${project.paragraph}</p>
                    <div class="tags">
                    ${
						project.tags.includes("css")
							? '<span class="tags__tag tags__tag--html">HTML</span>'
							: ""
					}
                    ${
						project.tags.includes("css")
							? '<span class="tags__tag tags__tag--css">CSS</span>'
							: ""
					}
                    ${
						project.tags.includes("js")
							? '<span class="tags__tag tags__tag--js">JS</span>'
							: ""
					}
					${
						project.tags.includes("scss")
							? '<span class="tags__tag tags__tag--scss">SCSS</span>'
							: ""
					}
                    </div> 
					
                    <div class="card__buttons">
                        <a href="${
							project.linkLivePreview
						}" class="btn btn--card" target="blank">Live Preview <span class="btn--card-icon"><i class="fa-solid fa-up-right-from-square"></i></span></a>
                        <a href="${
							project.linkGit
						}" class="btn btn--git" target="blank"><img src="img/github-logo.png" alt=""></a>
                    </div>                  
                </div>
            </div> 
      `;

		featuredHome.insertAdjacentHTML("afterbegin", html);
	});
};

/* *********** Featured portfolio display function *********** */
const displayFeatured = function (data) {
	featured.innerHTML = "";
	console.log(data);

	data.forEach(function (project, i) {
		const html = `
        <div class="card card--2 ${i === 1 ? "card--middle" : ""}">
                <img src="${project.linkImg}" alt="" class="card__img">
                <div class="card__content">
                    <h4 class="card__title u-margin-bottom-medium">${
						project.title
					}</h4>
					<span>${project.date}</span>
                    <p class="card__text">${project.paragraph}</p>
                    <div class="tags">
                    ${
						project.tags.includes("css")
							? '<span class="tags__tag tags__tag--html">HTML</span>'
							: ""
					}
                    ${
						project.tags.includes("css")
							? '<span class="tags__tag tags__tag--css">CSS</span>'
							: ""
					}
                    ${
						project.tags.includes("js")
							? '<span class="tags__tag tags__tag--js">JS</span>'
							: ""
					}

					${
						project.tags.includes("scss")
							? '<span class="tags__tag tags__tag--scss">SCSS</span>'
							: ""
					}
                    </div> 
					
                    <div class="card__buttons">
                        <a href="${
							project.linkLivePreview
						}" class="btn btn--card" target="blank">Live Preview <span class="btn--card-icon"><i class="fa-solid fa-up-right-from-square"></i></span></a>
                        <a href="${
							project.linkGit
						}" class="btn btn--git" target="blank"><img src="img/github-logo.png" alt=""></a>
                    </div>                  
                </div>
            </div> 
      `;

		featured.insertAdjacentHTML("afterbegin", html);
	});
};

/* *********** Projects portfolio display function *********** */
const displayMovements = function (data) {
	cardsContainer.innerHTML = "";

	data.forEach(function (project, i) {
		const html = `
        <div class="cardjs">
				<img
					src="${project.linkImg}"
					alt="A Project Card Image" 
                    class="cardjs-img"
				/>
				<div class="JScard-content">
					<h4>${project.title}</h4>
					<div class="tags-container">
                        ${
							project.tags.includes("html")
								? '<div class="tag tag-html">HTML</div>'
								: ""
						}
						${project.tags.includes("css") ? '<div class="tag tag-css">CSS</div>' : ""}
						${project.tags.includes("js") ? '<div class="tag tag-js">JS</div>' : ""}
						${project.tags.includes("api") ? '<div class="tag tag-api">API</div>' : ""}
						${project.tags.includes("scss") ? '<div class="tag tag-scss">SCSS</div>' : ""}
					</div>
					<span>${project.date}</span>
					<p>
						${project.paragraph}
					</p>
				</div>
				<div class="buttons-container">
					<a href="${project.linkLivePreview}" class="JSbtn-live-preview"
						>Live Preview
						<i class="fa-solid fa-up-right-from-square"></i>
					</a>
					<a href="${project.linkGit}" class="btn-git">
						<img
							src="https://d33wubrfki0l68.cloudfront.net/f78349611e6cb9ec98b8b2851b3b1e616e7e4ea3/1c471/img/github-logo.png"
							alt=""
						/>
					</a>
				</div>
			</div>
      `;

		cardsContainer.insertAdjacentHTML("afterbegin", html);
	});
};

/* *********** Search functionality *********** */
if (searchInput) {
	searchInput.addEventListener("input", (e) => {
		e.preventDefault();

		search(searchInput.value);
	});
}

let isThere = [];
const search = function (input) {
	isThere = [];

	data.forEach(function (project, i) {
		let words = project.title.toLowerCase().split(" ");
		let wordsStr = words.join("");

		if (wordsStr.includes(input.toLowerCase())) {
			isThere.push(project);
		}
	});

	displayMovements(isThere);
};

let selection = [];
if (dropdown) {
	dropdown.addEventListener("input", (e) => {
		e.preventDefault();
		selection = [];

		data.forEach(function (project, i) {
			if (project.tags.includes(dropdown.value)) {
				selection.push(project);
				displayMovements(selection);
			}
		});
	});
}
