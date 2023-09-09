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
            <div class="buttons-container">
                <a href="#all-projects" class="JSbtn-live-preview"
                    >Live Preview
                    <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    `;
  }

  State.appContainer.innerHTML = Markup;
}
