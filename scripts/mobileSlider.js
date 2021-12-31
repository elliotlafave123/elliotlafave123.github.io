const project0 = {
	title: "Natours",
	paragraph:
		"I created a social media dashboard using HTML, CSS and JS to add data to the webpage.",
	linkLivePreview: "Projects/natours/index.html",
	linkGit:
		"https://github.com/elliotlafave123/elliotlafave123.github.io/tree/master/Projects/natours",
	linkImg: "img/Responsive-natours.png",
	tags: ["html", "css", "js"],
	imgBackCol: "#55c57a",
	backCol: "#4fb671",
};

const project1 = {
	title: "Trillo",
	paragraph:
		"I programmed a web application that sells hotels and flights. I used HTML and SCSS for the design and mainly used CSS Flexbox to create the layout. The design is 100% responsive.",
	linkLivePreview: "Projects/trillo/index.html",
	linkGit:
		"https://github.com/elliotlafave123/elliotlafave123.github.io/tree/master/Projects/trillo",
	linkImg: "img/Responsive-trillo.png",
	tags: ["html", "css", "js"],
	imgBackCol: "#D3356A",
	backCol: "#B92657",
};

let i = 0;
const projects = [project0, project1];
let currentProject = projects[i];

const container = document.getElementById("container");
const btnNext = document.getElementById("mobile-slider-btn-next");
const btnLast = document.getElementById("mobile-slider-btn-last");

console.log(btnNext);

const displayData = function (data) {
	container.innerHTML = "";

	const html = `
    <div class="mobile-slider__project">
        <div class="mobile-slider__img" id="imgBackCol">
            <img src="${data.linkImg}" alt="Responsive design showcase image">
        </div>
        <div class="mobile-slider__content" id="backCol">
            <h3 class="u-margin-bottom-small">${data.title}</h3>
            <p>${data.paragraph}</p>
            <div class="tags">
                <span class="tags__tag tags__tag--html">HTML</span>
                <span class="tags__tag tags__tag--css">CSS</span>
                <span class="tags__tag tags__tag--scss">SCSS</span>
            </div> 
            <div class="mobile-slider__buttons">
                <a href="${data.linkGit}" class="btn btn--github" target="blank">Github</a>
                <span class="mobile-slider__buttons--text">&larr; &nbsp; &nbsp;See the code</span>
                <a href="${data.linkLivePreview}" class="btn btn-purple-small u-margin-bottom-small mobile-slider__buttons--live-preview" target="blank">Live Preview&nbsp; &nbsp;&nbsp; &nbsp;<i class="fa-solid fa-up-right-from-square"></i></a>
            </div>
        </div>
    </div>
    `;

	container.innerHTML = html;

	document.getElementById("imgBackCol").style.backgroundColor =
		data.imgBackCol;

	document.getElementById("backCol").style.backgroundColor = data.backCol;
};

displayData(currentProject);

btnNext.addEventListener("click", () => {
	i = i + 1;
	currentProject = projects[i];

	if (currentProject) {
		displayData(currentProject);
	} else {
		i = i - 1;
	}
});

btnLast.addEventListener("click", () => {
	i = i - 1;
	currentProject = projects[i];

	if (currentProject) {
		displayData(currentProject);
	} else {
		i = i + 1;
	}
});
