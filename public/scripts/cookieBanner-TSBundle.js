(()=>{"use strict";var __webpack_modules__={2340:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.HandleCookies = void 0;\r\nconst bannerMarkup = `\r\n    <div class="cookie-banner">\r\n        <div class="cookie-banner-text-container">\r\n            <span>Let us know you agree to cookies</span>\r\n            <p>We use cookies to give you the best app experience. By continuing, you agree to the use of cookies.</p>\r\n        </div>\r\n        <div class="cookie-banner-interactions">\r\n            <button id="AcceptCookiesButton">Continue</button>\r\n            <a href="/CookiePolicy.html" target="_blank">See our cookies policy</a>\r\n        </div>\r\n    </div>\r\n`;\r\nconst HandleCookies = () => {\r\n    if (localStorage.getItem("acceptedCookies") !== "true") {\r\n        const loginContainer = document.getElementById("loginForm");\r\n        const signUpContainer = document.getElementById("signUpForm");\r\n        if (loginContainer || signUpContainer) {\r\n            const body = document.querySelector("body");\r\n            if (body) {\r\n                body.insertAdjacentHTML("beforeend", bannerMarkup);\r\n                const acceptButton = document.getElementById("AcceptCookiesButton");\r\n                if (acceptButton)\r\n                    acceptButton.addEventListener("click", (e) => {\r\n                        e.preventDefault();\r\n                        localStorage.setItem("acceptedCookies", "true");\r\n                        const banner = document.querySelector(".cookie-banner");\r\n                        if (banner)\r\n                            banner.style.display = "none";\r\n                    });\r\n            }\r\n        }\r\n    }\r\n};\r\nexports.HandleCookies = HandleCookies;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjM0MC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLFlBQVksR0FBRzs7Ozs7Ozs7Ozs7Q0FXcEIsQ0FBQztBQUVLLE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtJQUNoQyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxNQUFNLEVBQUU7UUFDdEQsTUFBTSxjQUFjLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsTUFBTSxlQUFlLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFM0UsSUFBSSxjQUFjLElBQUksZUFBZSxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDbkQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUVwRSxJQUFJLFlBQVk7b0JBQ2QsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUMzQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7d0JBRW5CLFlBQVksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBRWhELE1BQU0sTUFBTSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFnQixDQUFDO3dCQUNwRixJQUFJLE1BQU07NEJBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUM1QyxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQXhCVyxxQkFBYSxpQkF3QnhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvY29tcG9uZW50cy9Db29raWVCYW5uZXIvU2hvd0Nvb2tpZUJhbm5lci50cz84MThlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhbm5lck1hcmt1cCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjb29raWUtYmFubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvb2tpZS1iYW5uZXItdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+TGV0IHVzIGtub3cgeW91IGFncmVlIHRvIGNvb2tpZXM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxwPldlIHVzZSBjb29raWVzIHRvIGdpdmUgeW91IHRoZSBiZXN0IGFwcCBleHBlcmllbmNlLiBCeSBjb250aW51aW5nLCB5b3UgYWdyZWUgdG8gdGhlIHVzZSBvZiBjb29raWVzLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29va2llLWJhbm5lci1pbnRlcmFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIkFjY2VwdENvb2tpZXNCdXR0b25cIj5Db250aW51ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL0Nvb2tpZVBvbGljeS5odG1sXCIgdGFyZ2V0PVwiX2JsYW5rXCI+U2VlIG91ciBjb29raWVzIHBvbGljeTwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhhbmRsZUNvb2tpZXMgPSAoKSA9PiB7XHJcbiAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXB0ZWRDb29raWVzXCIpICE9PSBcInRydWVcIikge1xyXG4gICAgY29uc3QgbG9naW5Db250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbkZvcm1cIik7XHJcbiAgICBjb25zdCBzaWduVXBDb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWduVXBGb3JtXCIpO1xyXG5cclxuICAgIGlmIChsb2dpbkNvbnRhaW5lciB8fCBzaWduVXBDb250YWluZXIpIHtcclxuICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICBib2R5Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBiYW5uZXJNYXJrdXApO1xyXG4gICAgICAgIGNvbnN0IGFjY2VwdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQWNjZXB0Q29va2llc0J1dHRvblwiKTtcclxuXHJcbiAgICAgICAgaWYgKGFjY2VwdEJ1dHRvbilcclxuICAgICAgICAgIGFjY2VwdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2NlcHRlZENvb2tpZXNcIiwgXCJ0cnVlXCIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFubmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29va2llLWJhbm5lclwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGJhbm5lcikgYmFubmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2340\n')},936:(__unused_webpack_module,exports,__webpack_require__)=>{eval("var __webpack_unused_export__;\n\r\n__webpack_unused_export__ = ({ value: true });\r\n// Cookie Banner\r\nconst ShowCookieBanner_1 = __webpack_require__(2340);\r\n// Show cookie banner\r\n(0, ShowCookieBanner_1.HandleCookies)();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTM2LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLGdCQUFnQjtBQUNoQixxREFBbUQ7QUFFbkQscUJBQXFCO0FBQ3JCLG9DQUFhLEdBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L2NvbXBvbmVudHMvQ29va2llQmFubmVyL2luZGV4LnRzPzMxNGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29va2llIEJhbm5lclxyXG5pbXBvcnQgeyBIYW5kbGVDb29raWVzIH0gZnJvbSBcIi4vU2hvd0Nvb2tpZUJhbm5lclwiO1xyXG5cclxuLy8gU2hvdyBjb29raWUgYmFubmVyXHJcbkhhbmRsZUNvb2tpZXMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///936\n")}},__webpack_module_cache__={};function __webpack_require__(e){var c=__webpack_module_cache__[e];if(void 0!==c)return c.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}var __webpack_exports__=__webpack_require__(936)})();