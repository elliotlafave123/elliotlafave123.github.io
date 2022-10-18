/* ----------------------------------- */
/*            Components               */
/* ----------------------------------- */
const View = document.getElementById("View");
const Recommended_Container = document.getElementById("RecommendedCardsContainer");
const Trending_Container = document.getElementById("TrendingCardsContainer");

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
		case "Search":
			SHOW_SEARCH_PAGE(data.searchResults);
			break;
	}
};

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
/*             Show Home Page          */
/* ----------------------------------- */
const SHOW_HOME_PAGE = (data) => {
	const Markup = `
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
        <div class="recommended-container">
            <h1>Movies</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data.movies)}</div>
        </div>
    `;
	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*         Show Tv Series Page         */
/* ----------------------------------- */
const SHOW_TVSERIES_PAGE = (data) => {
	const Markup = `
        <div class="recommended-container">
            <h1>Tv Series</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data.tvSeries)}</div>
        </div>
    `;
	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*        Show Bookmarked Page         */
/* ----------------------------------- */
const SHOW_BOOKMARKED_PAGE = (data) => {
	const Markup = `
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
/*           Show Movies Page          */
/* ----------------------------------- */
const SHOW_SEARCH_PAGE = (data) => {
	let Markup;
	if (!data) {
		Markup = `
        <div class="recommended-container">
            <h1>Found 0 result for ${state.search}</h1>
            <div class="cards-container" id="RecommendedCardsContainer"></div>
        </div>
    `;
	} else {
		Markup = `
        <div class="recommended-container">
            <h1>Found ${data.length} result for '${state.search}'</h1>

            <div class="cards-container" id="RecommendedCardsContainer">
            ${GetCardMarkup(data)}</div>
        </div>
    `;
	}

	View.innerHTML = Markup;
};

/* ----------------------------------- */
/*       Generate Card Markup          */
/* ----------------------------------- */
const generateMarkupCard = (video) => {
	if (!video) return;

	return `
        <div class="card">
            <div class="card-bookmark" data-id="${video.id}">
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
	return allVideos.map((video) => generateMarkupCard(video)).join("");
};

const GetCardMarkup = (cards) => {
	return cards.map((video) => generateMarkupCard(video)).join("");
};

/* ----------------------------------- */
/*   Generate Trending Card Markup     */
/* ----------------------------------- */
const generateMarkupTrendingCard = (video) => {
	if (!video) return;

	return `
    <div class="card-trending">
        <div class="card-trending-bookmark" data-id="${video.id}">
            <img class="card-trending-bookmark-img" src="${
				video.isBookmarked ? "assets/icon-bookmark-full.svg" : "assets/icon-bookmark-empty.svg"
			}" alt="" />
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
	// const Trending = getShuffledArr(trending);
	return trending.map((video) => generateMarkupTrendingCard(video)).join("");
};

/* ----------------------------------- */
/*        Initialize state             */
/* ----------------------------------- */
const state = {
	view: "Home",
	search: "",
	data: {},
};
const INITIALIZE_STATE = async () => {
	const localStorageData = localStorage.getItem("Data");
	const localStorageAppData = localStorage.getItem("AppData");
	// Get data
	let data;

	if (!localStorageAppData) {
		data = JSON.parse(localStorageData);

		const obj = {
			tvSeries: data.filter((video) => video.category === "TV Series"),
			tvSeriesBookmarked: data.filter((video) => video.category === "TV Series" && video.isBookmarked === true),

			movies: data.filter((video) => video.category === "Movie"),
			moviesBookmarked: data.filter((video) => video.category === "Movie" && video.isBookmarked === true),

			trending: data.filter((video) => video.isTrending === true),
		};

		// Set state.data to data
		state.data = obj;

		// Save data object to localstorage
		localStorage.setItem("AppData", JSON.stringify(state.data));
	} else if (localStorageAppData) {
		data = JSON.parse(localStorageAppData);
		state.data = data;
	} else return;

	// Call update view
	if (window.location.hash) {
		state.view = window.location.hash.substring(1);
	} else {
		window.location.hash = "Home";
	}
	UPDATE_VIEW();
};
INITIALIZE_STATE();

const SAVE_DATA = () => {
	const data = JSON.stringify(state.data);
	localStorage.setItem("AppData", data);
};

const ADD_BOOKMARK = (location, video) => {
	video.isBookmarked = true;
	location.push(video);
	SAVE_DATA();
	UPDATE_VIEW();
};

const REMOVE_BOOKMARK = (location, video) => {
	video.isBookmarked = false;
	location.splice(
		location.findIndex((vid) => vid.id === video.id),
		1
	);
	SAVE_DATA();
	UPDATE_VIEW();
};

const HANDLE_BOOKMARKS = (ID) => {
	let movie = state.data.movies.find((vid) => vid.id == ID);
	let tvSeries = state.data.tvSeries.find((vid) => vid.id == ID);

	if (movie) {
		if (movie.isBookmarked === false) {
			ADD_BOOKMARK(state.data.moviesBookmarked, movie);
		} else {
			REMOVE_BOOKMARK(state.data.moviesBookmarked, movie);
		}
	} else if (!movie && tvSeries) {
		if (tvSeries.isBookmarked === false) {
			ADD_BOOKMARK(state.data.tvSeriesBookmarked, tvSeries);
		} else {
			REMOVE_BOOKMARK(state.data.tvSeriesBookmarked, tvSeries);
		}
	} else return;
};

/* ----------------------------------- */
/*           Change View Page          */
/* ----------------------------------- */
document.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("sidebar-icon")) {
		state.view = e.target.dataset.page;
		window.location.hash = `${state.view}`;
		UPDATE_VIEW();
	}
});

/* ----------------------------------- */
/*            Add a bookmark           */
/* ----------------------------------- */
document.addEventListener("click", (e) => {
	e.preventDefault();
	if (
		e.target.classList.contains("card-bookmark-img") ||
		e.target.classList.contains("card-bookmark") ||
		e.target.classList.contains("card-trending-bookmark-img") ||
		e.target.classList.contains("card-trending-bookmark")
	) {
		const Video_ID = e.target.closest("div").dataset.id;

		HANDLE_BOOKMARKS(Video_ID);
	}
});

/* ----------------------------------- */
/*            Make a search            */
/* ----------------------------------- */
const searchbar = document.getElementById("searchbar");
searchbar.addEventListener("keypress", function (event) {
	if (event.key === "Enter" && searchbar.value && searchbar.value !== state.search) {
		event.preventDefault();
		state.search = searchbar.value;
		state.view = "Search";

		let movie = state.data.movies.filter((vid) => vid.title.toLowerCase().includes(searchbar.value.toLowerCase()));
		let tvSeries = state.data.tvSeries.filter((vid) => vid.title.toLowerCase().includes(searchbar.value.toLowerCase()));
		state.data.searchResults = [...movie, ...tvSeries];

		UPDATE_VIEW();
	}
});
