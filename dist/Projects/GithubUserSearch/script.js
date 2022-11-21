const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
	try {
		const { data } = await axios(APIURL + username);

		createUserCard(data);
		getRepos(username);
	} catch (e) {
		if ((e.response.status = 404)) {
			createErrorCard("No profile with this username");
		} else {
			console.log(`Error: ${e}`);
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios(APIURL + username + "/repos?sort=updated");

		addReposToCard(data);
	} catch (e) {
		createErrorCard("Problem fetching repos");
	}
}

function createUserCard(user) {
	const date = new Date(user.created_at);
	// const day = date.getDay();
	// const month = date.getMonth();

	function dateToYMD(date) {
		var strArray = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		var d = date.getDate();
		var m = strArray[date.getMonth()];
		var y = date.getFullYear();
		return "" + (d <= 9 ? "0" + d : d) + " " + m + " " + y;
	}

	const cardHTML = `
        <div class="card">
            <div>
                <img
                    src="${user.avatar_url}"
                    alt="${user.name}"
                    class="avatar"
                />
            </div>
            <div class="user-info">
				<div class="name-date">
                	<h2>${user.name ? user.name : "No username"}</h2>
					<span>Joined ${dateToYMD(date)}</span> 
				</div>
                <p>
                    ${user.bio ? user.bio : "This profile has no bio"}
                </p>

                <ul>
					<li>${user.public_repos}<strong>Repos</strong></li>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li> 
                </ul>

                <div id="repos"></div>
            </div>
        </div>
    `;

	main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
	const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

	main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
	const reposEl = document.getElementById("repos");

	repos.slice(0, 10).forEach((repo) => {
		const repoEl = document.createElement("a");
		repoEl.classList.add("repo");
		repoEl.href = repo.html_url;
		repoEl.targer = "_blank";
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = "";
	}
});
