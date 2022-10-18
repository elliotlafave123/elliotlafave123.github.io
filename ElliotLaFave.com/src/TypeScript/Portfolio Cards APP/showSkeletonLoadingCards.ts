import { State } from "./State";

export function showSkeletonLoading() {
  let Markup = ``;

  for (let i = 0; i < State.gridColumnCount * 3; i++) {
    Markup += `
        <div class="cardjs">
            <div class="skeleton skeleton-img"></div>
            <div class="JScard-content">
            <div>
                <h4 class="skeleton skeleton-text skeleton-text-large"></h4>
                <div class="tags-container">
                <h3 class="skeleton skeleton-tag"></h3>
                <h3 class="skeleton skeleton-tag"></h3>
                <h3 class="skeleton skeleton-tag"></h3>
                <h3 class="skeleton skeleton-tag"></h3>
                </div>
                <h4 class="skeleton skeleton-text skeleton-text-small"></h4>
            </div>
            <div>
                <p class="skeleton skeleton-paragraph"></p>
            </div>
            </div>
            <div class="buttons-container">
            <a href="#all-projects" class="JSbtn-live-preview "
                ><p class="blur">Live Preview</p>
                <i class="fa-solid fa-up-right-from-square"></i>
            </a>
            <a href="#all-projects" class="btn-git blur">
                <img
                src="https://d33wubrfki0l68.cloudfront.net/f78349611e6cb9ec98b8b2851b3b1e616e7e4ea3/1c471/img/github-logo.png"
                alt=""
                />
            </a>
            </div>
        </div>
    `;
  }

  State.appContainer.innerHTML = Markup;
}
