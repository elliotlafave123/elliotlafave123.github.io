const projectsIndex = [0, 1, 3];

const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const linkImg = document.getElementById("linkImg");
const linkGit = document.getElementById("linkGit");
const linkLivePreview = document.getElementById("linkLivePreview");

const tagHTML = document.getElementById("tagHTML");
const tagCSS = document.getElementById("tagCSS");
const tagJS = document.getElementById("tagJS");
const tagAPI = document.getElementById("tagAPI");

const button = document.getElementById("button");
const d = String(new Date()).split(" ");
const dateString = `${d[2]} ${d[1]} ${d[3]}`;

// ***************** Pre Check Checkboxes ****************** //
tagHTML.checked = true;
tagCSS.checked = true;
tagJS.checked = true;

// ***************** Create JSON Data Function ****************** //
button.addEventListener("click", (e) => {
	e.preventDefault();
	console.log(`
        {${projectsIndex.length} = {
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
	}${tagJS.checked ? `"js",` : ""}${tagAPI.checked ? `"api"` : ""}],
        },
    `);

	title.value = "";
	date.value = "";
	paragraph.value = "";
	linkGit.value = "";
	linkImg.value = "";
	linkLivePreview.value = "";

	projectsIndex.push(projectsIndex.length);

	// tagHTML.checked = false;
	// tagCSS.checked = false;
	// tagJS.checked = false;
	// tagAPI.checked = false;
});
