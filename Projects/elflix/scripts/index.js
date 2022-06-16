/* ----------------------------------- */
/*        Initialize state             */
/* ----------------------------------- */
const state = {
	view: "Home",
	data: {},
};
const INITIALIZE_STATE = async () => {
	// Get data
	let data;
	await fetch("../data.json")
		.then((response) => response.json())
		.then((json) => (data = json));

	// Split data
	const obj = {
		tvSeries: data.filter((video) => video.category === "TV Series"),
		tvSeriesBookmarked: data.filter((video) => video.category === "TV Series" && video.isBookmarked === true),

		movies: data.filter((video) => video.category === "Movie"),
		moviesBookmarked: data.filter((video) => video.category === "Movie" && video.isBookmarked === true),

		trending: data.filter((video) => video.isTrending === true),
	};

	// Set state.data to data
	state.data = obj;

	// Call update view
	UPDATE_VIEW();
};
INITIALIZE_STATE();

/* ----------------------------------- */
/*            Components               */
/* ----------------------------------- */
const View = document.getElementById("View");
const Recommended_Container = document.getElementById("RecommendedCardsContainer");
const Trending_Container = document.getElementById("TrendingCardsContainer");

/* ----------------------------------- */
/*          Helper Functions           */
/* ----------------------------------- */
const getShuffledArr = (arr) => {
	const newArr = arr.slice();
	for (let i = newArr.length - 1; i > 0; i--) {
		const rand = Math.floor(Math.random() * (i + 1));
		[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
	}
	return newArr;
};

/* ----------------------------------- */
/*             Update View             */
/* ----------------------------------- */
const UPDATE_VIEW = () => {
	const data = state.data;
	switch (state.view) {
		case "Home":
			SHOW_HOME_PAGE(data);
			break;
		case "Movies":
			SHOW_MOVIES_PAGE(data);
			break;
		case "TvSeries":
			SHOW_TVSERIES_PAGE(data);
			break;
		case "Bookmarked":
			SHOW_BOOKMARKED_PAGE(data);
			break;
		default:
			console.log(state.view);
	}
};

/* ----------------------------------- */
/*           Change View Page          */
/* ----------------------------------- */
document.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("sidebar-icon")) {
		state.view = e.target.dataset.page;
		UPDATE_VIEW();
	}
});

/* ----------------------------------- */
/*             Show Home Page          */
/* ----------------------------------- */
const SHOW_HOME_PAGE = (data) => {
	const Markup = `
        <div class="search-container">
            <img src="assets/icon-search.svg" alt="" />
            <input type="text" placeholder="Search for movies or TV series..." />
        </div>

        <div class="trending-container">
            <h1>Trending</h1>

            <div class="scrolling-wrapper" id="TrendingCardsContainer">
               ${GetTrendingMarkup(data.trending)}
            </div>
        </div>

        <div class="recommended-container">
            <h1>Recommended for you</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetRecommendedMarkup(data.movies, data.tvSeries)}</div>
        </div>
    `;
	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*           Show Movies Page          */
/* ----------------------------------- */
const SHOW_MOVIES_PAGE = (data) => {
	const Markup = `
        <div class="search-container">
            <img src="assets/icon-search.svg" alt="" />
            <input type="text" placeholder="Search for movies or TV series..." />
        </div>

        <div class="recommended-container">
            <h1>Movies</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data.movies)}</div>
        </div>
    `;
	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*           Show Movies Page          */
/* ----------------------------------- */
const SHOW_TVSERIES_PAGE = (data) => {
	const Markup = `
        <div class="search-container">
            <img src="assets/icon-search.svg" alt="" />
            <input type="text" placeholder="Search for movies or TV series..." />
        </div>

        <div class="recommended-container">
            <h1>Movies</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data.tvSeries)}</div>
        </div>
    `;
	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*           Show Movies Page          */
/* ----------------------------------- */
const SHOW_BOOKMARKED_PAGE = (data) => {
	const Markup = `
        <div class="search-container">
            <img src="assets/icon-search.svg" alt="" />
            <input type="text" placeholder="Search for movies or TV series..." />
        </div>

        <div class="recommended-container">
            <h1>Bookmarked Movies</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data.moviesBookmarked)}</div>
        </div>

        <div class="recommended-container">
            <h1 class="u-margin-top-medium">Bookmarked TV Series</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data.tvSeriesBookmarked)}</div>
        </div>
    `;
	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*       Generate Card Markup          */
/* ----------------------------------- */
const generateMarkupCard = (video) => {
	if (!video) return;

	return `
        <div class="card">
            <div class="card-bookmark">
                <img class="card-bookmark-img" src="${
					video.isBookmarked ? "assets/icon-bookmark-full.svg" : "assets/icon-bookmark-empty.svg"
				}" alt="" />
            </div>

            <div class="card-img-container">
                <img class="card-img" src="${video.thumbnail.regular.large}" alt="" />
                <div class="card-play-btn">
                    <button class="play-btn">
                        <img src="assets/icon-play.svg" alt="" />
                        <h2>Play</h2>
                    </button>
                </div>
            </div>

            <div class="card-details">
                <span>${video.year}</span>&#8226;
                <span>
                    <img src="assets/icon-category-movie.svg" alt="" />
                    ${video.category} </span
                >&#8226;
                <span>${video.rating}</span>
            </div>

            <h2 class="card-title">${video.title}</h2>
        </div>
    `;
};
/* ----------------------------------- */
/*     Insert Recommended Cards        */
/* ----------------------------------- */

const GetRecommendedMarkup = (movies, tvSeries) => {
	const allVideos = [...movies, ...tvSeries];
	const recommended = getShuffledArr(allVideos);
	return recommended.map((video) => generateMarkupCard(video)).join("");
};

const GetCardMarkup = (cards) => {
	const recommended = getShuffledArr(cards);
	return recommended.map((video) => generateMarkupCard(video)).join("");
};

/* ----------------------------------- */
/*   Generate Trending Card Markup     */
/* ----------------------------------- */
const generateMarkupTrendingCard = (video) => {
	if (!video) return;

	return `
    <div class="card-trending">
        <div class="card-trending-bookmark">
            <img class="card-trending-bookmark-img" src="assets/icon-bookmark-empty.svg" alt="" />
        </div>

        <div class="card-trending-img-container">
            <img class="card-trending-img" src="${video.thumbnail.trending.large}" alt="" />
            <div class="card-trending-play-btn">
                <button class="play-btn">
                    <img src="assets/icon-play.svg" alt="" />
                    <h2>Play</h2>
                </button>
            </div>
        </div>

        <div class="card-trending-details">
            <span>${video.year}</span>&#8226;
            <span>
                <img src="assets/icon-category-movie.svg" alt="" />
                ${video.category} </span
            >&#8226;
            <span>${video.rating}</span>
        </div>

        <h4 class="card-trending-title">${video.title}</h4>
    </div>
    `;
};

/* ----------------------------------- */
/*       Insert Trending Cards         */
/* ----------------------------------- */
const GetTrendingMarkup = (trending) => {
	const Trending = getShuffledArr(trending);
	return Trending.map((video) => generateMarkupTrendingCard(video)).join("");
};
