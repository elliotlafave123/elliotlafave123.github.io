const GithubStatsContainer = document.getElementById("GithubStats");

function yyyymmdd(dateIn) {
	var yyyy = dateIn.getFullYear();
	var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
	var dd = dateIn.getDate();
	return ` ${dd}/${mm}/${yyyy}`;
}

const init = () => {
	fetch("https://api.github.com/users/elliotlafave123", {
		method: "GET",
		headers: {
			Authorization: `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 `,
		},
	})
		.then((res) => res.json())
		.then((data) => {
			ShowGithubStats(data);
		});
};
init();

const ShowGithubStats = (data) => {
	console.log(data);
	let markup = `
    <p class="githubStats-NameOfComponent">GitHub Statistics</p>
    <img src="./img/logo-dark.png" alt="" />
    <div class="githubStats-container">
        <div class="githubStats-top">
            <h2>${data.name}</h2>
            <p>Joined ${yyyymmdd(new Date(data.created_at))}</p>
        </div>

        <span>@${data.login}</span>
        <p>${data.bio.slice(0, 142)}.</p>

        <div class="githubStats-stats">
            <div class="githubStats-stats-section">
                <p>Repos</p>
                <span>${data.public_repos}</span>
            </div>
            <div class="githubStats-stats-section">
                <p>Following</p>
                <span>${data.followers}</span>
            </div>
            <div class="githubStats-stats-section">
                <p>Commits</p>
                <span>879</span>
            </div>
        </div>

        <div class="githubStats-info">
            <div class="githubStats-info-section">
                <i class="fa-solid fa-location-dot"></i>
                <p>Manchester, UK</p>
            </div>
            <div class="githubStats-info-section">
                <i class="fa-brands fa-twitter"></i>
                <p>${data.login}</p>
            </div>
            <div class="githubStats-info-section">
                <i class="fa-solid fa-link"></i>
                <p>${data.blog}</p>
            </div>
            <div class="githubStats-info-section">
                <i class="fa-solid fa-city"></i>
                <p>@GMC</p>
            </div>
        </div>
    </div>
    `;

	GithubStatsContainer.innerHTML = markup;
};
