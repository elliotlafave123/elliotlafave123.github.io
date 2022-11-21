// Mobie nav menu
let navOpen = false;
const mobileNav = document.querySelector(".navigation__links");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

const toggleNav = function () {
	if (navOpen) {
		navOpen = false;
		mobileNav.style.display = "none";
		mobileNavToggle.innerHTML = `
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
        `;
	} else {
		navOpen = true;
		mobileNav.style.display = "flex";
		mobileNavToggle.innerHTML = `
        <i class="fas fa-times" style="font-size:3.7rem;"></i>
        `;
	}
};

if (window.innerWidth < 600) {
	mobileNav.style.display = "none";
	navOpen = false;
	mobileNavToggle.innerHTML = `
        <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fill-rule="evenodd"/></svg>
        `;
} else {
	mobileNavToggle.style.display = "none";
}

mobileNavToggle.addEventListener("click", toggleNav);
