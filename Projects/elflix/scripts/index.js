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
		default:
			console.log(state.view);
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

/* ----------------------------------- */
/*        Initialize state             */
/* ----------------------------------- */
const state = {
	view: "Home",
	data: {},
};
const INITIALIZE_STATE = async () => {
	// Get data
	let data = [
		{
			title: "Beyond Earth",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/beyond-earth/trending/small.jpg",
					large: "./assets/thumbnails/beyond-earth/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/beyond-earth/regular/small.jpg",
					medium: "./assets/thumbnails/beyond-earth/regular/medium.jpg",
					large: "./assets/thumbnails/beyond-earth/regular/large.jpg",
				},
			},
			year: 2019,
			category: "Movie",
			rating: "PG",
			isBookmarked: false,
			isTrending: true,
		},
		{
			title: "Bottom Gear",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/bottom-gear/trending/small.jpg",
					large: "./assets/thumbnails/bottom-gear/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/bottom-gear/regular/small.jpg",
					medium: "./assets/thumbnails/bottom-gear/regular/medium.jpg",
					large: "./assets/thumbnails/bottom-gear/regular/large.jpg",
				},
			},
			year: 2021,
			category: "Movie",
			rating: "PG",
			isBookmarked: false,
			isTrending: true,
		},
		{
			title: "Undiscovered Cities",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/undiscovered-cities/trending/small.jpg",
					large: "./assets/thumbnails/undiscovered-cities/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/undiscovered-cities/regular/small.jpg",
					medium: "./assets/thumbnails/undiscovered-cities/regular/medium.jpg",
					large: "./assets/thumbnails/undiscovered-cities/regular/large.jpg",
				},
			},
			year: 2019,
			category: "TV Series",
			rating: "E",
			isBookmarked: false,
			isTrending: true,
		},
		{
			title: "1998",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/1998/trending/small.jpg",
					large: "./assets/thumbnails/1998/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/1998/regular/small.jpg",
					medium: "./assets/thumbnails/1998/regular/medium.jpg",
					large: "./assets/thumbnails/1998/regular/large.jpg",
				},
			},
			year: 2021,
			category: "Movie",
			rating: "18+",
			isBookmarked: false,
			isTrending: true,
		},
		{
			title: "Dark Side of the Moon",
			thumbnail: {
				trending: {
					small: "./assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
					large: "./assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
				},
				regular: {
					small: "./assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
					medium: "./assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
					large: "./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
				},
			},
			year: 2018,
			category: "TV Series",
			rating: "PG",
			isBookmarked: true,
			isTrending: true,
		},
		{
			title: "The Great Lands",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/the-great-lands/regular/small.jpg",
					medium: "./assets/thumbnails/the-great-lands/regular/medium.jpg",
					large: "./assets/thumbnails/the-great-lands/regular/large.jpg",
				},
			},
			year: 2019,
			category: "Movie",
			rating: "E",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "The Diary",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/the-diary/regular/small.jpg",
					medium: "./assets/thumbnails/the-diary/regular/medium.jpg",
					large: "./assets/thumbnails/the-diary/regular/large.jpg",
				},
			},
			year: 2019,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Earth’s Untouched",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/earths-untouched/regular/small.jpg",
					medium: "./assets/thumbnails/earths-untouched/regular/medium.jpg",
					large: "./assets/thumbnails/earths-untouched/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "18+",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "No Land Beyond",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/no-land-beyond/regular/small.jpg",
					medium: "./assets/thumbnails/no-land-beyond/regular/medium.jpg",
					large: "./assets/thumbnails/no-land-beyond/regular/large.jpg",
				},
			},
			year: 2019,
			category: "Movie",
			rating: "E",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "During the Hunt",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/during-the-hunt/regular/small.jpg",
					medium: "./assets/thumbnails/during-the-hunt/regular/medium.jpg",
					large: "./assets/thumbnails/during-the-hunt/regular/large.jpg",
				},
			},
			year: 2016,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Autosport the Series",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/autosport-the-series/regular/small.jpg",
					medium: "./assets/thumbnails/autosport-the-series/regular/medium.jpg",
					large: "./assets/thumbnails/autosport-the-series/regular/large.jpg",
				},
			},
			year: 2016,
			category: "TV Series",
			rating: "18+",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Same Answer II",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/same-answer-2/regular/small.jpg",
					medium: "./assets/thumbnails/same-answer-2/regular/medium.jpg",
					large: "./assets/thumbnails/same-answer-2/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "E",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Below Echo",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/below-echo/regular/small.jpg",
					medium: "./assets/thumbnails/below-echo/regular/medium.jpg",
					large: "./assets/thumbnails/below-echo/regular/large.jpg",
				},
			},
			year: 2016,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "The Rockies",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/the-rockies/regular/small.jpg",
					medium: "./assets/thumbnails/the-rockies/regular/medium.jpg",
					large: "./assets/thumbnails/the-rockies/regular/large.jpg",
				},
			},
			year: 2015,
			category: "TV Series",
			rating: "E",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Relentless",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/relentless/regular/small.jpg",
					medium: "./assets/thumbnails/relentless/regular/medium.jpg",
					large: "./assets/thumbnails/relentless/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "PG",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Community of Ours",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/community-of-ours/regular/small.jpg",
					medium: "./assets/thumbnails/community-of-ours/regular/medium.jpg",
					large: "./assets/thumbnails/community-of-ours/regular/large.jpg",
				},
			},
			year: 2018,
			category: "TV Series",
			rating: "18+",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Van Life",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/van-life/regular/small.jpg",
					medium: "./assets/thumbnails/van-life/regular/medium.jpg",
					large: "./assets/thumbnails/van-life/regular/large.jpg",
				},
			},
			year: 2015,
			category: "Movie",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "The Heiress",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/the-heiress/regular/small.jpg",
					medium: "./assets/thumbnails/the-heiress/regular/medium.jpg",
					large: "./assets/thumbnails/the-heiress/regular/large.jpg",
				},
			},
			year: 2021,
			category: "Movie",
			rating: "PG",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Off the Track",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/off-the-track/regular/small.jpg",
					medium: "./assets/thumbnails/off-the-track/regular/medium.jpg",
					large: "./assets/thumbnails/off-the-track/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "18+",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Whispering Hill",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/whispering-hill/regular/small.jpg",
					medium: "./assets/thumbnails/whispering-hill/regular/medium.jpg",
					large: "./assets/thumbnails/whispering-hill/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "E",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "112",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/112/regular/small.jpg",
					medium: "./assets/thumbnails/112/regular/medium.jpg",
					large: "./assets/thumbnails/112/regular/large.jpg",
				},
			},
			year: 2013,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Lone Heart",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/lone-heart/regular/small.jpg",
					medium: "./assets/thumbnails/lone-heart/regular/medium.jpg",
					large: "./assets/thumbnails/lone-heart/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "E",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Production Line",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/production-line/regular/small.jpg",
					medium: "./assets/thumbnails/production-line/regular/medium.jpg",
					large: "./assets/thumbnails/production-line/regular/large.jpg",
				},
			},
			year: 2018,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Dogs",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/dogs/regular/small.jpg",
					medium: "./assets/thumbnails/dogs/regular/medium.jpg",
					large: "./assets/thumbnails/dogs/regular/large.jpg",
				},
			},
			year: 2016,
			category: "TV Series",
			rating: "E",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Asia in 24 Days",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/asia-in-24-days/regular/small.jpg",
					medium: "./assets/thumbnails/asia-in-24-days/regular/medium.jpg",
					large: "./assets/thumbnails/asia-in-24-days/regular/large.jpg",
				},
			},
			year: 2020,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "The Tasty Tour",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/the-tasty-tour/regular/small.jpg",
					medium: "./assets/thumbnails/the-tasty-tour/regular/medium.jpg",
					large: "./assets/thumbnails/the-tasty-tour/regular/large.jpg",
				},
			},
			year: 2016,
			category: "TV Series",
			rating: "PG",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Darker",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/darker/regular/small.jpg",
					medium: "./assets/thumbnails/darker/regular/medium.jpg",
					large: "./assets/thumbnails/darker/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "18+",
			isBookmarked: true,
			isTrending: false,
		},
		{
			title: "Unresolved Cases",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/unresolved-cases/regular/small.jpg",
					medium: "./assets/thumbnails/unresolved-cases/regular/medium.jpg",
					large: "./assets/thumbnails/unresolved-cases/regular/large.jpg",
				},
			},
			year: 2018,
			category: "TV Series",
			rating: "18+",
			isBookmarked: false,
			isTrending: false,
		},
		{
			title: "Mission: Saturn",
			thumbnail: {
				regular: {
					small: "./assets/thumbnails/mission-saturn/regular/small.jpg",
					medium: "./assets/thumbnails/mission-saturn/regular/medium.jpg",
					large: "./assets/thumbnails/mission-saturn/regular/large.jpg",
				},
			},
			year: 2017,
			category: "Movie",
			rating: "PG",
			isBookmarked: true,
			isTrending: false,
		},
	];

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
/*           Change View Page          */
/* ----------------------------------- */
document.addEventListener("click", (e) => {
	e.preventDefault();
	if (e.target.classList.contains("sidebar-icon")) {
		state.view = e.target.dataset.page;
		UPDATE_VIEW();
	}
});
