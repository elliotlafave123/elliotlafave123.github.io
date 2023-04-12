interface Tag {
  id: number;
  name: string;
  color: string;
  fontAwesomeIconClass: string;
}

interface ProjectDto {
  id: number;
  title: string;
  paragraph: string;
  linkLivePreview: string;
  linkImg: string;
  linkGit: string | null;
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}

const API_URL = "https://projectsapi.elliotapiserver.com/api/Projects";

const getCards = async (pageNumber: number, pageSize: number): Promise<ProjectDto[]> => {
  const res = await fetch(`${API_URL}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  const data = await res.json();
  return data.items;
};

const generateTagMarkup = (tag: Tag): string => `
  <div class="c-tag">
    <i class="${tag.fontAwesomeIconClass}" style="color: #${tag.color};"></i>
    <span class="tag__text">${tag.name}</span>
  </div>
`;

const generateCardMarkup = (card: ProjectDto): string => `
  <div class="c-project-card c-project-card--semi-round" tabindex="0">
    <div class="c-project-card__content">
      <img class="c-project-card__image" src="${card.linkImg}" />
      <h3 class="c-project-card__title">${card.title}</h3>
      <p class="c-project-card__paragraph">${card.paragraph}</p>
      <div class="c-project-card__tags">
        ${card.tags.map((tag) => generateTagMarkup(tag)).join("")}
      </div>
    </div>
    <div class="c-project-card__hover">
      <div class="c-project-card__hover-content">
        <a class="c-button c-button--medium c-button--primary c-button--semi-round c-button--primary--with-border" href="${
          card.linkLivePreview
        }">View live preview<i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
      
      </div>
    </div>
  </div>
`;

// ${
//   card.linkGit
//     ? `<a class="c-button c-button--medium c-button--semi-round c-button--primary-secondary c-button--primary-secondary--with-border" href="${card.linkGit}">View GitHub code<i class="fa-brands fa-github"></i></a>`
//     : ""
// }

const trimTags = (tagContainer: Element) => {
  if (tagContainer.clientHeight > 20) {
    let tags = tagContainer.querySelectorAll(".c-tag");
    let lastTag = tags[tags.length - 1];

    while (tagContainer.clientHeight > 20 && tags.length > 0) {
      tagContainer.removeChild(lastTag);
      tags = tagContainer.querySelectorAll(".c-tag");
      lastTag = tags[tags.length - 1];
    }

    tagContainer.innerHTML += `...`;
  }
};

export const initJsPortfolioFeaturedCards = async () => {
  const cards = await getCards(1, 3);
  const cardContainer = document.getElementById("featuredCardsContainer");

  if (cardContainer) {
    cardContainer.innerHTML = cards.map((card) => generateCardMarkup(card)).join("");
    const tags = document.querySelectorAll(".c-project-card__tags");
    tags.forEach((tag) => {
      trimTags(tag);
    });
  }
};
