import { Constants } from "../../../Constants/Constants";
import { DisplayCardWithinContainer } from "../displayCards";

const loader = document.querySelector(".loader") as HTMLElement;

export const initJsPortfolioFeaturedCards = () => {
  let data;
  let featuredData;

  const featured: HTMLElement = document.getElementById("featuredCardsContainer") as HTMLElement;
  const LINODE_IP = `${Constants.API_BASE_URL}/api/v1/projects`;

  /* *********** Get Json Data *********** */
  fetch(LINODE_IP)
    .then((response) => {
      return response.json();
    })
    .then((jsondata) => {
      data = jsondata;

      featuredData = [
        data[2],
        data[4],
        data[6],
        data[7],
        data[9],
        data[10],
        data[15],
        data[16],
        data[18],
        data[19],
        data[20],
        data[21],
      ];

      getFeaturedData();
    });

  /* *********** Generate random featured data then call show functions *********** */
  const displayFeaturedData = function (pickedData) {
    if (featured) {
      displayFeatured(pickedData);
    }
  };

  const getFeaturedData = function () {
    const picked = [];
    const data1 = [];

    const getRandomPositions = function () {
      const i = Math.floor(Math.random() * featuredData.length);

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

  /* *********** Featured portfolio display function *********** */
  const displayFeatured = function (data) {
    if (loader) {
      loader.style.display = "none";
    }

    data.forEach((element) => {
      DisplayCardWithinContainer(element, featured);
    });
  };
};
