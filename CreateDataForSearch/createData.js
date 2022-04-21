const projectsIndex = [0, 1, 3];

const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const linkImg = document.getElementById("linkImg");
const linkGit = document.getElementById("linkGit");
const linkLivePreview = document.getElementById("linkLivePreview");

const allCheckboxes = document.querySelectorAll(".checkboxBox");
const tagHTML = document.getElementById("tagHTML");
const tagCSS = document.getElementById("tagCSS");
const tagJS = document.getElementById("tagJS");
const tagAPI = document.getElementById("tagAPI");
const tagSCSS = document.getElementById("tagSCSS");
const tagsContainer = document.getElementById("tags");

const cardImg = document.getElementById("cardImg");
const cardTitle = document.getElementById("cardTitle");
const cardDate = document.getElementById("cardDate");
const cardPara = document.getElementById("cardPara");
const cardGit = document.getElementById("cardGit");
const cardPreview = document.getElementById("cardPreview");

const button = document.getElementById("button");
const d = String(new Date()).split(" ");
const dateString = `${d[2]} ${d[1]} ${d[3]}`;
cardDate.textContent = dateString;

// ***************** Pre Check Checkboxes ****************** //
tagHTML.checked = true;
tagCSS.checked = true;
tagJS.checked = true;

const addTags = function () {
	tagsContainer.innerHTML = "";

	if (tagHTML.checked) {
		const html = `
		<div class="tag tag-html">HTML</div>
		`;
		tagsContainer.insertAdjacentHTML("beforeend", html);
	}

	if (tagCSS.checked) {
		const html = `
		<div class="tag tag-css">CSS</div>
		`;
		tagsContainer.insertAdjacentHTML("beforeend", html);
	}

	if (tagJS.checked) {
		const html = `
		<div class="tag tag-js">JS</div>
		`;
		tagsContainer.insertAdjacentHTML("beforeend", html);
	}

	if (tagAPI.checked) {
		const html = `
		<div class="tag tag-api">API</div>
		`;
		tagsContainer.insertAdjacentHTML("beforeend", html);
	}

	if (tagSCSS.checked) {
		const html = `
		<div class="tag tag-scss">SCSS</div>
		`;
		tagsContainer.insertAdjacentHTML("beforeend", html);
	}
};
addTags();

allCheckboxes.forEach((box) => {
	box.addEventListener("change", function (e) {
		addTags();
	});
});

// ***************** Show data in cards ****************** //
const allInputs = document.querySelectorAll(".input");
linkLivePreview.value = "Projects/";
linkImg.value = "img/Projects/";

const updateCard = function () {
	if (cardTitle.textContent != null) {
		cardTitle.textContent = title.value;
	}

	if (cardPara.textContent != null) {
		cardPara.textContent = paragraph.value;
	}

	if (linkGit.value != null) {
		cardGit.href = `${linkGit.value}`;
	}

	if (linkLivePreview.value != null) {
		cardPreview.href = `../${linkLivePreview.value}`;
	}

	cardImg.src = `../${linkImg.value}`;
};
updateCard();

allInputs.forEach((inp) => {
	inp.addEventListener("input", function (e) {
		e.preventDefault();
		updateCard();
	});
});

// ***************** Create JSON Data Function ****************** //
button.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(`
        {
            "title": "${title.value}",
			"date": "${dateString}",
            "paragraph":
                "${paragraph.value}",
            "linkLivePreview": "${linkLivePreview.value}",
            "linkGit":
                "${linkGit.value}",
            "linkImg":
                "${linkImg.value}",
            "tags": [${tagHTML.checked ? `"html",` : ""}${
		tagCSS.checked ? `"css",` : ""
	}${tagJS.checked ? `"js",` : ""}${tagAPI.checked ? `"api",` : ""}${
		tagSCSS.checked ? `"scss",` : ""
	}],
        },
    `);

	title.value = "";
	paragraph.value = "";
	linkGit.value = "";
	linkImg.value = "";
	linkLivePreview.value = "";
});
