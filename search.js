let data;
let featuredData;

const cardsContainer = document.getElementById("cardsContainer");
const searchInput = document.querySelector(".search-input");
const dropdown = document.getElementById("dropdown");
const featured = document.getElementById("cardGrid3");
const featuredHome = document.getElementById("cardGrid3-home");
const refreshBtn = document.getElementById("refreshBtn");
const refreshBtnAllProjects = document.getElementById("refreshBtnAllProjects");

const nextPage = document.getElementById("nextPage");
const lastPage = document.getElementById("lastPage");
const pageNumberCurrent = document.getElementById("pageNumberCurrent");
const pageNumberTotal = document.getElementById("pageNumberTotal");

const nextPageMobile = document.getElementById("nextPageMobile");
const lastPageMobile = document.getElementById("lastPageMobile");
const pageNumberCurrentMobile = document.getElementById(
	"pageNumberCurrentMobile"
);
const pageNumberTotalMobile = document.getElementById("pageNumberTotalMobile");

let mobile = false;
if (window.innerWidth < 500) {
	mobile = true;
}

const getGridColumnCount = function () {
	const gridComputedStyle = window.getComputedStyle(cardsContainer);

	return gridComputedStyle
		.getPropertyValue("grid-template-columns")
		.split(" ").length;
};

let page = 0;

const displayProjectsOnPages = function (data) {
	const columns = getGridColumnCount();

	let perChunk;
	if (mobile) {
		perChunk = 10;
	} else {
		perChunk = columns * 4;
	}

	// const inputArray = data.reverse();

	const result = data.reduce((resultArray, item, index) => {
		const chunkIndex = Math.floor(index / perChunk);

		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []; // start a new chunk
		}

		resultArray[chunkIndex].push(item);

		return resultArray;
	}, []);
	pageNumberTotal.innerText = result.length;
	if (pageNumberTotalMobile) {
		pageNumberTotalMobile.innerText = result.length;
	}

	if (result[page]) {
		displayProjects(result[page]);
		pageNumberCurrent.innerText = page + 1;

		if (pageNumberCurrentMobile) {
			pageNumberCurrentMobile.innerText = page + 1;
		}
	} else {
		page = result.length - 1;
	}
};

/* *********** Get Json Data *********** */
fetch("projects.json")
	.then((response) => {
		return response.json();
	})
	.then((jsondata) => {
		data = jsondata;
		featuredData = [
			jsondata[28],
			jsondata[27],
			jsondata[26],
			jsondata[23],
			jsondata[24],
			jsondata[21],
			jsondata[22],
			jsondata[19],
			jsondata[18],
			jsondata[16],
			jsondata[15],
			jsondata[14],
		];

		if (cardsContainer) {
			displayProjectsOnPages(data.reverse());
		}

		getFeaturedData(featuredData);
	});

/* *********** Generate random featured data then call show functions *********** */
const displayFeaturedData = function (pickedData) {
	if (featuredHome) {
		displayFeaturedHome(pickedData);
	}

	if (featured) {
		displayFeatured(pickedData);
	}
};

const getFeaturedData = function () {
	const picked = [];
	const data1 = [];

	const getRandomPositions = function () {
		let i = Math.floor(Math.random() * featuredData.length);

		if (!picked.includes(i)) {
			picked.push(i);
		} else {
			getRandomPositions();
		}
	};

	while (picked.length < 3) {
		getRandomPositions();
	}

	const addData = function (picked) {
		for (let i = 0; i < 3; i++) {
			data1.push(featuredData[picked[i]]);
		}
	};
	addData(picked);

	if (data1[0] && data1[1] && data1[2]) {
		displayFeaturedData(data1);
	} else {
		getFeaturedData();
	}
};

/* *********** Featured home display function *********** */
const displayFeaturedHome = function (data) {
	featuredHome.innerHTML = "";

	data.forEach(function (project, i) {
		const html = `
        <div class="card ${i === 1 ? "card--middle" : ""}">
                <img src="${project.linkImg}" alt="" class="card__img" ${
			mobile ? 'loading="lazy"' : ""
		}>
                <div class="card__content">
                    <h4 class="card__title u-margin-bottom-medium">${
						project.title
					}</h4>
					<span class="card__date">${project.date}</span>
                    <p class="card__text">${project.paragraph}</p>
                    <div class="tags">
                    ${
						project.tags.includes("html")
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

	data.forEach(function (project, i) {
		const html = `
        <div class="card card--2 ${i === 1 ? "card--middle" : ""}">
                <img src="${project.linkImg}" alt="" class="card__img" ${
			mobile ? 'loading="lazy"' : ""
		}>
                <div class="card__content">
                    <h4 class="card__title u-margin-bottom-medium">${
						project.title
					}</h4>
					<span class="card__date">${project.date}</span>
                    <p class="card__text">${project.paragraph}</p>
                    <div class="tags">
                    ${
						project.tags.includes("html")
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
const displayProjects = function (data) {
	cardsContainer.innerHTML = "";

	data.forEach(function (project, i) {
		const html = `
        <div class="cardjs">
				<img
					src="${project.linkImg}"
					alt="A Project Card Image" 
                    class="cardjs-img"
					${mobile ? 'loading="lazy"' : ""}
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

		cardsContainer.insertAdjacentHTML("beforeend", html);
	});
};

/* *********** Search functionality *********** */
refreshBtn.addEventListener("click", function () {
	getFeaturedData(featuredData);
	refreshBtn.style.animation = "spin 0.7s linear";
	setTimeout(() => {
		refreshBtn.style.animation = "";
	}, 700);
});

if (refreshBtnAllProjects) {
	refreshBtnAllProjects.addEventListener("click", function () {
		page = 0;
		dropdown.value = "";
		pageNumberCurrent.innerText = 1;
		displayProjectsOnPages(data);
		refreshBtnAllProjects.style.animation = "spin 0.7s linear";
		setTimeout(() => {
			refreshBtnAllProjects.style.animation = "";
		}, 700);
	});
}

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

	displayProjects(isThere);
};

let selection = [];
if (dropdown) {
	dropdown.value = "";
}
if (dropdown) {
	dropdown.addEventListener("input", (e) => {
		e.preventDefault();
		selection = [];

		data.forEach(function (project, i) {
			if (project.tags.includes(dropdown.value)) {
				selection.push(project);
				displayProjects(selection);
			}
		});
	});
}

if (nextPage) {
	nextPage.addEventListener("click", function (e) {
		e.preventDefault();
		page++;
		displayProjectsOnPages(data);
	});
}

if (lastPage) {
	lastPage.addEventListener("click", function (e) {
		e.preventDefault();
		if (page == 0) {
			return;
		} else {
			page--;
		}
		displayProjectsOnPages(data);
	});
}
if (nextPageMobile) {
	nextPageMobile.addEventListener("click", function (e) {
		e.preventDefault();
		page++;
		displayProjectsOnPages(data);
	});
}

if (lastPageMobile) {
	lastPageMobile.addEventListener("click", function (e) {
		e.preventDefault();
		if (page == 0) {
			return;
		} else {
			page--;
		}
		displayProjectsOnPages(data);
	});
}
