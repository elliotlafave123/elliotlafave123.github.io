(() => {
  "use strict";
  var e = {
      737: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.initKeyboardNavigation = void 0);
        class n {
          constructor() {
            (this.desktopNav = document.querySelector(".desktop__nav")),
              (this.allItems = Array.from(this.desktopNav.querySelectorAll("label, a"))),
              (this.currentElementIndex = void 0);
          }
          tabPressed() {
            this.allItems.forEach((e) => {
              document.activeElement === e && (this.currentElementIndex = this.allItems.indexOf(e));
            });
          }
          right() {
            this.currentElementIndex + 1 !== this.allItems.length &&
              ((this.currentElementIndex += 1), this.allItems[this.currentElementIndex].focus());
          }
          left() {
            0 !== this.currentElementIndex &&
              ((this.currentElementIndex -= 1), this.allItems[this.currentElementIndex].focus());
          }
        }
        t.initKeyboardNavigation = () => {
          const e = new n();
          document.addEventListener("keyup", (t) => {
            t.repeat ||
              (9 === t.keyCode && e.desktopNav && e.tabPressed(),
              39 === t.keyCode && e.desktopNav && e.right(),
              37 === t.keyCode && e.desktopNav && e.left());
          });
        };
      },
      235: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.startArticleSidebar = void 0),
          (t.startArticleSidebar = () => {
            window.addEventListener("DOMContentLoaded", () => {
              const e = new IntersectionObserver((e) => {
                e.forEach((e) => {
                  const t = e.target.getAttribute("id");
                  if (e.intersectionRatio > 0) {
                    const e = document.querySelector(`ol li a[href="#${t}"]`);
                    e && e.parentElement.classList.add("active");
                  } else {
                    const e = document.querySelector(`ol li a[href="#${t}"]`);
                    e && e.parentElement.classList.remove("active");
                  }
                });
              });
              document.querySelectorAll("div[id]").forEach((t) => {
                e.observe(t);
              });
            }),
              setInterval(function () {
                let e = !1;
                document.querySelectorAll("ol li a").forEach((t) => {
                  t.parentElement.classList.contains("active") && (e = !0);
                }),
                  e
                    ? document.querySelector(".article__sidebar").classList.remove("invisible")
                    : document.querySelector(".article__sidebar").classList.add("invisible");
              }, 50);
          });
      },
      529: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.initBreadcrumb = void 0);
        const n = document.querySelector(".breadcrumb");
        t.initBreadcrumb = () => {
          n &&
            (() => {
              const e = new URL(window.location.href).pathname.slice(1).split("/");
              e.pop(),
                e.forEach((t, o) => {
                  var a;
                  t.indexOf("-") > -1 && (t = t.replaceAll("-", " ")),
                    t.indexOf("%20") > -1 && (t = t.replaceAll("%20", " "));
                  const s = `\n            <p>\n            ${(t =
                    (a = t).charAt(0).toUpperCase() + a.slice(1))} \n            </p>\n        `;
                  n.insertAdjacentHTML("beforeend", s),
                    o !== e.length - 1 &&
                      n.insertAdjacentHTML("beforeend", '<i class="fa-solid fa-chevron-right"></i>');
                });
            })();
        };
      },
      195: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.startEnlargeImage = void 0),
          (t.startEnlargeImage = () => {
            let e = !1;
            const t = "article__image-enlarged";
            document.addEventListener("click", function (n) {
              const o = n.target;
              if ((o && o.classList.contains("articleImg")) || o.classList.contains("article__image")) {
                const n = o.closest(".article__image");
                e ? (n.classList.remove(t), (e = !1)) : (n.classList.add(t), (e = !0));
              }
            });
          });
      },
      705: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.addDataToInputs = void 0);
        const o = n(624);
        t.addDataToInputs = () => {
          if (!o.State.fullName || !o.State.emailAddress) return;
          const e = document.getElementById("fullname"),
            t = document.getElementById("email");
          e && t && ((e.value = o.State.fullName), (t.value = o.State.emailAddress));
        };
      },
      567: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.controller = void 0);
        const o = n(624),
          a = n(630),
          s = n(72),
          c = n(199),
          i = n(367),
          l = n(56);
        t.controller = () => {
          const e = document.getElementById("fullname");
          e.addEventListener("input", () => {
            const t = document.getElementById("SaveChanges");
            o.State.fullName !== e.value &&
              ((o.State.fullName = e.value), (0, a.displayDataInWidget)(), t && (t.disabled = !1));
          });
          const t = Array.from(document.querySelectorAll(".profileColorCheckbox"));
          t.length > 0 &&
            t.forEach((e) => {
              e.addEventListener("change", () => {
                (o.State.profileImgColor = e.dataset.color),
                  (0, s.clearCheckboxes)(),
                  (e.checked = !0),
                  (0, s.setCheckbox)(e.dataset.color);
              });
            });
          const n = document.getElementById("SaveChanges");
          n &&
            n.addEventListener("click", (t) => {
              t.preventDefault(), (o.State.fullName = e.value), (0, c.saveFullName)();
            });
          const r = document.getElementById("logOutButton");
          r &&
            r.addEventListener("click", (e) => {
              e.preventDefault(), (0, i.logOut)();
            });
          const d = document.getElementById("DeleteAccountButton");
          d &&
            d.addEventListener("click", (e) => {
              e.preventDefault(), (0, l.openDeleteAccountModal)();
            });
          const u = document.getElementById("confirmModal");
          u &&
            u.addEventListener("click", (e) => {
              e.preventDefault(), (0, l.deleteAccount)();
            });
        };
      },
      630: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.displayDataInWidget = void 0);
        const o = n(624);
        t.displayDataInWidget = () => {
          if (!o.State.fullName || !o.State.emailAddress) return;
          const e = document.querySelector(".user-info-text-container");
          if (!e) return;
          const t = e.querySelector(".widgetFullName"),
            n = e.querySelector(".widgetEmail");
          t && n && ((t.innerHTML = o.State.fullName), (n.innerHTML = o.State.emailAddress), a());
        };
        const a = () => {
          const e = document.querySelector(".profileImage");
          if (!e) return;
          const t = e.querySelector("p");
          switch (
            (t && (t.innerText = o.State.fullName.substring(0, 1)),
            e.removeAttribute("class"),
            e.classList.add("profileImage"),
            o.State.profileImgColor)
          ) {
            case "blue":
              e.classList.add("profileImage-blue");
              break;
            case "teal":
              e.classList.add("profileImage-teal");
              break;
            case "green":
              e.classList.add("profileImage-green");
              break;
            case "yellow":
              e.classList.add("profileImage-yellow");
              break;
            case "red":
              e.classList.add("profileImage-red");
              break;
            case "purple":
              e.classList.add("profileImage-purple");
              break;
            case "darkBlue":
              e.classList.add("profileImage-darkBlue");
          }
        };
      },
      669: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.fetchAccountDetails = void 0);
        const a = n(624),
          s = n(630),
          c = n(705),
          i = n(567),
          l = localStorage.getItem("token");
        t.fetchAccountDetails = () =>
          o(void 0, void 0, void 0, function* () {
            const e = document.getElementById("SaveChanges");
            e && (e.disabled = !0);
            try {
              const e = yield fetch("https://elliotapiserver.co.uk/Auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: l }),
              });
              if (201 !== e.status) throw new Error("Not Authenticated");
              {
                const t = yield e.json();
                (a.State.fullName = t.data.fullName),
                  (a.State.emailAddress = t.data.email),
                  (a.State.emailVerified = t.data.emailVerified),
                  (a.State.id = t.data.id),
                  (a.State.profileImgColor = t.data.profileImgColor),
                  console.log(a.State),
                  (0, s.displayDataInWidget)(),
                  (0, c.addDataToInputs)(),
                  (0, i.controller)();
              }
            } catch (e) {}
          });
      },
      56: function (e, t) {
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.deleteAccount = t.openDeleteAccountModal = void 0),
          (t.openDeleteAccountModal = () => {
            const e = document.querySelector(".modal-container");
            if (!e) return;
            e.style.display = "flex";
            const t = Array.from(document.querySelectorAll(".closeModal"));
            t.length > 0 &&
              t.forEach((t) => {
                t.addEventListener("click", (t) => {
                  const n = t.target;
                  t.stopPropagation(), n.classList.contains("closeModal") && (e.style.display = "none");
                });
              });
          }),
          (t.deleteAccount = () =>
            n(void 0, void 0, void 0, function* () {
              const e = localStorage.getItem("token");
              try {
                yield fetch("https://elliotapiserver.co.uk/Auth/delete-account", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ token: e }),
                }),
                  localStorage.setItem("token", "");
                const t = localStorage.getItem("backLink") || "../../index.html";
                window.location.replace(t);
              } catch (e) {}
            }));
      },
      367: function (e, t) {
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.logOut = void 0),
          (t.logOut = () =>
            n(void 0, void 0, void 0, function* () {
              const e = localStorage.getItem("token");
              yield fetch("https://elliotapiserver.co.uk/Auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: e }),
              }),
                localStorage.setItem("token", "");
              const t = localStorage.getItem("backLink") || "../../index.html";
              window.location.replace(t);
            }));
      },
      199: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.saveFullName = void 0);
        const a = n(624);
        t.saveFullName = () =>
          o(void 0, void 0, void 0, function* () {
            const e = document.getElementById("SaveChanges");
            e && (e.disabled = !0);
            const t = localStorage.getItem("token");
            if (
              200 !==
              (yield fetch("https://elliotapiserver.co.uk/Auth/editName", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: t, fullName: a.State.fullName }),
              })).status
            )
              throw new Error("Cannot update name, please try again later");
            {
              const e = document.querySelector(".savedName");
              e &&
                ((e.style.opacity = "1"),
                setTimeout(() => {
                  e.style.opacity = "0";
                }, 1e3));
            }
          });
      },
      72: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.clearCheckboxes = t.setCheckbox = void 0);
        const a = n(630);
        (t.setCheckbox = (e) =>
          o(void 0, void 0, void 0, function* () {
            try {
              const t = localStorage.getItem("token"),
                n = yield fetch("https://elliotapiserver.co.uk/Auth/setProfileImageColor", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ token: t, color: e }),
                });
              if ((console.log(n), 200 !== n.status))
                throw new Error("Cannot update profile color, please try again later");
              {
                (0, a.displayDataInWidget)();
                const e = document.querySelector(".savedColor");
                e &&
                  ((e.style.opacity = "1"),
                  setTimeout(() => {
                    e.style.opacity = "0";
                  }, 1e3));
              }
            } catch (e) {}
          })),
          (t.clearCheckboxes = () => {
            Array.from(document.querySelectorAll(".profileColorCheckbox")).forEach((e) => {
              e.checked = !1;
            });
          });
      },
      624: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.State = void 0);
        t.State = {
          fullName: void 0,
          emailAddress: void 0,
          emailVerified: void 0,
          id: void 0,
          profileImgColor: void 0,
        };
      },
      577: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initStoreBackLink = void 0),
          (t.initStoreBackLink = () => {
            const e = Array.from(document.querySelectorAll(".storeBackLink")),
              t = document.getElementById("signedInStripWarning").querySelector("a"),
              n = document.getElementById("verifyEmailButton");
            "true" === localStorage.getItem("BacklinkShouldScroll") &&
              (window.scrollTo(0, parseInt(localStorage.getItem("scrollPosition"))),
              localStorage.setItem("BacklinkShouldScroll", "false")),
              e.forEach((e) => {
                e.addEventListener("click", (t) => {
                  t.preventDefault(),
                    localStorage.setItem("scrollPosition", window.scrollY.toString()),
                    localStorage.setItem("backLink", window.location.href),
                    window.location.replace(e.href);
                });
              }),
              n.addEventListener("click", (e) => {
                e.preventDefault(),
                  localStorage.setItem("backLink", window.location.href),
                  localStorage.setItem("scrollPosition", window.scrollY.toString()),
                  window.location.replace(n.href);
              }),
              t.addEventListener("click", (e) => {
                e.preventDefault(),
                  localStorage.setItem("backLink", window.location.href),
                  localStorage.setItem("scrollPosition", window.scrollY.toString()),
                  window.location.replace(n.href);
              });
          });
      },
      105: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.displayComments = void 0);
        const a = n(839),
          s = n(173),
          c = n(223);
        let i;
        const l = document.getElementById("commentStreamContainer");
        l && (i = l.dataset.stream),
          (t.displayComments = function () {
            return o(this, void 0, void 0, function* () {
              if (i)
                try {
                  const e = yield fetch(
                    "https://elliotapiserver.co.uk/Comments?" + new URLSearchParams({ stream: i }).toString(),
                    { method: "GET", headers: { "Content-Type": "application/json" } }
                  );
                  if ((d(), 200 === e.status)) {
                    const t = yield e.json();
                    t.length > 0 && u(t);
                  } else 404 === e.status && (d(), r());
                } catch (e) {}
            });
          });
        const r = () => {
            document.getElementById("InsertCommentsContainer").innerHTML =
              '\n\t<div class="noCommentsContainer">\n\t\t<img src="../../../../img/CommentsSection.svg" alt="" />\n\t</div>\n\t';
          },
          d = () => {
            const e = document.getElementById("InsertCommentsContainer");
            e && (e.innerHTML = "");
          },
          u = (e) => {
            const t = document.getElementById("InsertCommentsContainer");
            t &&
              (e.forEach((e) =>
                o(void 0, void 0, void 0, function* () {
                  const n = `\n        <div class="comment" data-commentId="${
                    e.id
                  }">\n        <div class="comment-main">\n            <div class="comment-header">\n                <div>\n                    <div class="profileImage profileImage-${
                    e.profileImgColor || "purple"
                  }">\n                        <p>${e.fullname.slice(
                    0,
                    1
                  )}</p>\n                    </div>\n                    <div class="CommentHeaderDot"></div>\n                    <h2>${
                    e.fullname
                  }</h2>\n                    <div class="CommentHeaderDot"></div>\n                    <span>${(function (
                    e
                  ) {
                    const t = new Date(e),
                      n = t.getDate(),
                      o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][
                        t.getMonth()
                      ],
                      a = t.getFullYear(),
                      s = t.getHours(),
                      c = t.getMinutes();
                    return `${o} ${n <= 9 ? "0" + n : n}, ${a} at ${s >= 12 ? s - 12 : s}:${c <= 9 ? "0" + c : c} ${
                      s >= 12 && c > 0 ? "PM" : "AM"
                    }`;
                  })(new Date(e.time))}</span>\n                    <h3>${
                    e.hasBeenEdited ? "(Edited)" : ""
                  }</h3>\n                </div>\n                <div>${
                    a.State.fullName === e.fullname && void 0 !== a.State.fullName
                      ? '<button class="editLinkButton" tabindex="0">Edit Comment</button>'
                      : ""
                  }</div>\n            </div>\n            <p>\n                ${e.text}\n            </p>\n\t\t\t${
                    a.State.fullName === e.fullname && void 0 !== a.State.fullName
                      ? '<div class="editComment" style="display: none">\n\t\t\t<button class="deleteLinkButton u-margin-top-small" tabindex="0">Delete Comment</button>\n\t\t\t<button class="publish">Publish</button>\n\t\t</div>'
                      : ""
                  }\n            \n        </div>\n        <div class="comment-side">\n            <button class="upvoteComment">\n                <i class="fa-solid fa-chevron-up green"></i>\n            </button>\n            <p>${
                    e.upvotes
                  }</p>\n            <div class="CommentHeaderDot"></div>\n            <p>${
                    e.downvotes
                  }</p>\n            <button class="downvoteComment">\n                <i class="fa-solid fa-chevron-down red"></i>\n            </button>\n        </div>\n    </div>\n        `;
                  t.insertAdjacentHTML("afterbegin", n);
                })
              ),
              (0, s.initEditComments)(),
              (0, c.initVoting)());
          };
      },
      3: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.checkLogin = void 0);
        const a = n(839),
          s = n(455),
          c = n(838),
          i = localStorage.getItem("token"),
          l = document.getElementById("signedInStrip"),
          r = document.getElementById("signedInStripWarning"),
          d = document.getElementById("logOutButton"),
          u = document.getElementById("verifyEmailButton");
        t.checkLogin = () =>
          o(void 0, void 0, void 0, function* () {
            try {
              const e = yield fetch("https://elliotapiserver.co.uk/Auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token: i }),
              });
              if (201 !== e.status) throw (u && (u.style.display = "none"), new Error("Not Authenticated"));
              {
                const t = yield e.json();
                (0, c.setDarkModePreferenceOnServer)(),
                  (a.State.fullName = t.data.fullName),
                  (a.State.emailAddress = t.data.emailAddress),
                  (a.State.emailVerified = t.data.emailVerified),
                  (a.State.id = t.data.id),
                  (a.State.profileImgColor = t.data.profileImgColor),
                  l && a.State.emailVerified ? (l.style.display = "flex") : l && r && (r.style.display = "flex"),
                  m("loggedIn"),
                  (null === document.getElementById("commentStreamContainer") &&
                    void 0 === document.getElementById("commentStreamContainer")) ||
                    (0, s.hideLoginButtons)();
              }
            } catch (e) {}
          });
        const m = (e) => {
          const t = document.querySelector(".navigation__button"),
            n = document.querySelector(".navigation__background");
          t &&
            n &&
            ("loggedIn" === e
              ? ((t.style.top = "8.5rem"), (n.style.top = "8.5rem"))
              : "signedOut" === e && ((t.style.top = "5rem"), (n.style.top = "5.4rem")));
        };
        d &&
          d.addEventListener("click", (e) => {
            e.preventDefault(),
              o(void 0, void 0, void 0, function* () {
                yield fetch("https://elliotapiserver.co.uk/Auth/logout", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ token: i }),
                }),
                  localStorage.setItem("token", ""),
                  l && (l.style.display = "none"),
                  (a.State.emailAddress = void 0),
                  (a.State.fullName = void 0),
                  (a.State.id = void 0),
                  (a.State.emailVerified = void 0),
                  (a.State.profileImgColor = void 0),
                  m("signedOut"),
                  (0, s.showLoginButtons)();
              });
          });
      },
      173: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.initEditComments = void 0);
        const a = n(105),
          s = "https://elliotapiserver.co.uk/Comments",
          c = localStorage.getItem("token");
        function i() {
          const e = document.querySelectorAll(".editLinkButton");
          e.length > 0 &&
            e.forEach((e) => {
              e.addEventListener("click", (t) => {
                t.preventDefault(), l(e);
              });
            });
        }
        t.initEditComments = i;
        const l = (e) => {
          var t;
          if (null !== e.closest(".comment")) {
            const n = e.closest("div.comment-main").querySelector(".editComment");
            if (n && "none" === n.style.display) {
              (e.innerText = "Cancel Editing"), (n.style.display = "block");
              const o = null === (t = e.closest("div.comment-main")) || void 0 === t ? void 0 : t.querySelector("p");
              if (!o) return;
              const a = o.innerText;
              if (a) {
                const t = e.closest("div.comment-header");
                if (!t) return;
                t.insertAdjacentHTML(
                  "afterend",
                  '\n                    <textarea \n                        name="commentTextarea" \n                        class="commentTextarea" \n                        minlength="3"\n                        maxlength="120"\n                        requiredminlength="3"\n\t\t\t\t\t\tmaxlength="120"\n\t\t\t\t\t\trequired\n                    ></textarea>\n                '
                ),
                  (o.style.display = "none");
              }
              e.closest("div.comment-main").querySelector("textarea").value = a;
              const s = e.closest("div.comment-main").querySelector(".deleteLinkButton"),
                c = e.closest("div.comment-main").querySelector(".publish"),
                i = e.closest(".comment"),
                l = null == i ? void 0 : i.dataset.commentid,
                d = document.getElementById("commentStreamContainer"),
                u = null == d ? void 0 : d.dataset.stream;
              s && c && void 0 !== l && void 0 !== u && r(s, c, l, u, e);
            } else {
              const t = e.closest("div.comment-main").querySelector("p");
              (e.innerText = "Edit Comment"),
                (t.style.display = "block"),
                e.closest("div.comment-main").querySelector("textarea").remove(),
                (n.style.display = "none");
            }
          }
        };
        i();
        const r = (e, t, n, a, s) => {
            e.addEventListener("click", (e) =>
              o(void 0, void 0, void 0, function* () {
                e.preventDefault(), yield d(n, a);
              })
            ),
              t.addEventListener("click", (e) =>
                o(void 0, void 0, void 0, function* () {
                  e.preventDefault(), yield u(n, s);
                })
              );
          },
          d = (e, t) =>
            o(void 0, void 0, void 0, function* () {
              const n = { token: c, commentStreamId: t };
              confirm("Are you sure you want to delete this comment?") &&
                204 ===
                  (yield fetch(s + "?" + new URLSearchParams({ id: e }).toString(), {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(n),
                  })).status &&
                (0, a.displayComments)();
            }),
          u = (e, t) =>
            o(void 0, void 0, void 0, function* () {
              const n = { token: c, id: e, text: t.closest("div.comment-main").querySelector("textarea").value },
                o = yield fetch(s + "?" + new URLSearchParams({ id: e }).toString(), {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(n),
                });
              if (201 === o.status) (0, a.displayComments)();
              else if (301 === o.status) {
                (0, a.displayComments)();
                try {
                  const e = document.getElementById("verifyEmailButton");
                  e && e.focus();
                } catch (e) {}
              }
            });
      },
      763: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.handlePostComment = void 0);
        const a = n(105),
          s = document.getElementById("publishCommentButton"),
          c = document.getElementById("commentStreamContainer"),
          i = document.getElementById("commentTextarea"),
          l = localStorage.getItem("token");
        t.handlePostComment = function () {
          null == s ||
            s.addEventListener("click", (e) =>
              o(this, void 0, void 0, function* () {
                if ((e.preventDefault(), i && "" === i.value)) return;
                const t = { token: l, text: i.value.toString(), stream: null == c ? void 0 : c.dataset.stream };
                try {
                  201 ===
                    (yield fetch(
                      "https://elliotapiserver.co.uk/Comments?" +
                        new URLSearchParams({ stream: "633d4dbc76066edc99546269" }).toString(),
                      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }
                    )).status && ((0, a.displayComments)(), (i.value = ""));
                } catch (e) {}
              })
            );
        };
      },
      455: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.showLoginButtons = t.hideLoginButtons = void 0);
        const a = n(839);
        (t.hideLoginButtons = function () {
          return o(this, void 0, void 0, function* () {
            const e = document.querySelector(".add-comment-container-notAllowed");
            if (e)
              if (a.State.emailVerified) null == e || e.classList.add("allowed");
              else
                try {
                  const e = document.getElementById("logInButton"),
                    t = document.getElementById("signUpButton");
                  e && t && ((e.style.display = "none"), (t.style.display = "none"));
                } catch (e) {}
          });
        }),
          (t.showLoginButtons = function () {
            return o(this, void 0, void 0, function* () {
              const e = document.querySelector(".add-comment-container-notAllowed"),
                t = document.getElementById("verifyEmailButton"),
                n = document.getElementById("logInButton"),
                o = document.getElementById("signUpButton");
              e && e.classList.remove("allowed"),
                n && (n.style.display = "inline-block"),
                o && (o.style.display = "inline-block"),
                t && (t.style.display = "none");
            });
          });
      },
      839: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.State = void 0);
        t.State = {
          fullName: void 0,
          emailAddress: void 0,
          emailVerified: void 0,
          id: void 0,
          profileImgColor: void 0,
        };
      },
      223: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.initVoting = void 0);
        const a = n(105),
          s = "https://elliotapiserver.co.uk/Comments/vote",
          c = localStorage.getItem("token");
        t.initVoting = function () {
          const e = document.querySelectorAll(".upvoteComment"),
            t = document.querySelectorAll(".downvoteComment");
          e.length > 0 &&
            e.forEach((e) => {
              e.addEventListener("click", (t) => {
                t.preventDefault(), i(e);
              });
            }),
            t.length > 0 &&
              t.forEach((e) => {
                e.addEventListener("click", (t) => {
                  t.preventDefault(), l(e);
                });
              });
        };
        const i = (e) =>
            o(void 0, void 0, void 0, function* () {
              if (null !== e.closest(".comment")) {
                const t = e.closest(".comment");
                if (!t) return;
                const n = t.dataset.commentid,
                  o = { token: c, id: n, votetype: "up" };
                try {
                  200 ===
                    (yield fetch(s, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(o),
                    })).status && (0, a.displayComments)();
                } catch (e) {}
              }
            }),
          l = (e) =>
            o(void 0, void 0, void 0, function* () {
              if (null !== e.closest(".comment")) {
                const t = e.closest(".comment");
                if (!t) return;
                const n = t.dataset.commentid,
                  o = { token: c, id: n, votetype: "down" };
                try {
                  200 ===
                    (yield fetch(s, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(o),
                    })).status && (0, a.displayComments)();
                } catch (e) {}
              }
            });
      },
      702: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HandleCookies = void 0),
          (t.HandleCookies = () => {
            if ("true" !== localStorage.getItem("acceptedCookies")) {
              const e = document.querySelector("body");
              if (e) {
                e.insertAdjacentHTML(
                  "beforeend",
                  '\n    <div class="cookie-banner">\n        <div class="cookie-banner-text-container">\n            <span>Let us know you agree to cookies</span>\n            <p>We use cookies to give you the best app experience. By continuing, you agree to the use of cookies.</p>\n        </div>\n        <div class="cookie-banner-interactions">\n            <button id="AcceptCookiesButton">Continue</button>\n            <a href="https://elliotlafave.com/CookiePolicy.html" target="_blank">See our cookies policy</a>\n        </div>\n    </div>\n'
                );
                const t = document.getElementById("AcceptCookiesButton");
                t &&
                  t.addEventListener("click", (e) => {
                    e.preventDefault(), localStorage.setItem("acceptedCookies", "true");
                    const t = document.querySelector(".cookie-banner");
                    t && (t.style.display = "none");
                  });
              }
            }
          });
      },
      858: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.handleDarkMode = void 0);
        const n = Array.from(document.querySelectorAll(".toggle")),
          o = document.documentElement,
          a = document.querySelector(".deleteMobile"),
          s = Array.from(document.querySelectorAll("label")),
          c = document.getElementById("wave1-light"),
          i = document.getElementById("wave2-light"),
          l = document.getElementById("wave3-light"),
          r = document.getElementById("wave4-light"),
          d = document.getElementById("wave5-light"),
          u = document.getElementById("wave1-dark"),
          m = document.getElementById("wave2-dark"),
          g = document.getElementById("wave3-dark"),
          p = document.getElementById("wave4-dark"),
          v = document.getElementById("wave5-dark"),
          h = function () {
            o.style.setProperty("--color-grey--extra-dark", "rgba(84, 97, 102, 0.3)"),
              o.style.setProperty("--color-grey-dark", "#F2F2F2"),
              o.style.setProperty("--color-grey-dark-2", "#CED4DA"),
              o.style.setProperty("--color-card", "#cbcfd4"),
              o.style.setProperty("--color-card-dark", "#E9ECEF"),
              o.style.setProperty("--text-light", "#212529"),
              o.style.setProperty("--text-dark", "#212529"),
              o.style.setProperty("--color-footer", "#7048e8"),
              o.style.setProperty("--colour-btn-expand-img", "rgba(255,255,255, 0.6)"),
              o.style.setProperty("--colour-btn-jump-to-top", "#a2a6ab"),
              o.style.setProperty("--colour-btn-git", "#a2a6ab"),
              o.style.setProperty("--color-tag", "#DEE2E6"),
              o.style.setProperty("--tech-stack-img-opacity", "85%"),
              o.style.setProperty("--link-card-background", "#CED4DA"),
              o.style.setProperty("--link-card-hover", "#c2c7cd"),
              o.style.setProperty("--link-card-before", "#b1b6bb"),
              o.style.setProperty("--link-card-before-hover", "#a2a6ab"),
              u && u.classList.add("hidden"),
              m && m.classList.add("hidden"),
              g && g.classList.add("hidden"),
              p && p.classList.add("hidden"),
              v && v.classList.add("hidden"),
              c && c.classList.remove("hidden"),
              i && i.classList.remove("hidden"),
              l && l.classList.remove("hidden"),
              r && r.classList.remove("hidden"),
              d && d.classList.remove("hidden");
          },
          f = function () {
            o.style.setProperty("--color-grey--extra-dark", "#15181991"),
              o.style.setProperty("--color-grey-dark", "#212529"),
              o.style.setProperty("--color-grey-dark-2", "#343a40"),
              o.style.setProperty("--color-card", "#343a40"),
              o.style.setProperty("--color-card-dark", "#212529"),
              o.style.setProperty("--text-light", "#CED4DA"),
              o.style.setProperty("--text-dark", "#212529"),
              o.style.setProperty("--color-footer", "#101214"),
              o.style.setProperty("--colour-btn-expand-img", "rgba(0, 0, 0, 0.6)"),
              o.style.setProperty("--colour-btn-jump-to-top", "#343a40"),
              o.style.setProperty("--colour-btn-git", "#33373a"),
              o.style.setProperty("--color-tag", "#495057"),
              o.style.setProperty("--tech-stack-img-opacity", "60%"),
              o.style.setProperty("--link-card-background", "#343a40"),
              o.style.setProperty("--link-card-hover", "#40484f"),
              o.style.setProperty("--link-card-before", "#2e3338"),
              o.style.setProperty("--link-card-before-hover", "#2e3338"),
              u && u.classList.remove("hidden"),
              m && m.classList.remove("hidden"),
              g && g.classList.remove("hidden"),
              p && p.classList.remove("hidden"),
              v && v.classList.remove("hidden"),
              c && c.classList.add("hidden"),
              i && i.classList.add("hidden"),
              l && l.classList.add("hidden"),
              r && r.classList.add("hidden"),
              d && d.classList.add("hidden");
          };
        t.handleDarkMode = () => {
          window.innerWidth < 400 && (a.innerHTML = ""),
            "true" == localStorage.getItem("darkMode") &&
              n.forEach((e) => {
                e.checked = !0;
              }),
            "true" == localStorage.getItem("darkMode") ? f() : h(),
            n.forEach((e) => {
              e.addEventListener("change", () => {
                e.checked
                  ? (f(), localStorage.setItem("darkMode", "true"))
                  : (h(), localStorage.setItem("darkMode", "false"));
              });
            }),
            s.forEach((e) =>
              e.addEventListener("keyup", (e) => {
                e &&
                  "Enter" === e.key &&
                  n.forEach((e) => {
                    (e.checked = !e.checked),
                      e.checked
                        ? (f(), localStorage.setItem("darkMode", "true"))
                        : (h(), localStorage.setItem("darkMode", "false"));
                  });
              })
            );
        };
      },
      557: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setDarkMode = void 0),
          (t.setDarkMode = () => {
            const e = document.querySelector(".toggle");
            localStorage.getItem("newUser") ||
              (localStorage.setItem("newUser", "true"), localStorage.setItem("darkMode", "true")),
              e.addEventListener("change", () => {
                e && e.checked ? localStorage.setItem("darkMode", "true") : localStorage.setItem("darkMode", "false");
              });
          });
      },
      838: function (e, t) {
        var n =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.setDarkModePreferenceOnServer = void 0),
          (t.setDarkModePreferenceOnServer = () =>
            n(void 0, void 0, void 0, function* () {
              if ("true" === localStorage.getItem("HasSentDarkModePreference")) return;
              const e = localStorage.getItem("token"),
                t = localStorage.getItem("darkMode");
              let n;
              n = !(!t || "true" !== t);
              try {
                200 ===
                  (yield fetch("https://elliotapiserver.co.uk/Auth/DarkMode", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: e, darkMode: n }),
                  })).status && localStorage.setItem("HasSentDarkModePreference", "true");
              } catch (e) {}
            }));
      },
      158: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initLoadingOverlay = void 0),
          (t.initLoadingOverlay = () => {
            const e = document.querySelector(".loading-text"),
              t = document.querySelector(".bg");
            let n = 0,
              o = setInterval(function () {
                n++,
                  n > 99 && (clearInterval(o), (t.style.zIndex = (-1).toString())),
                  (e.textContent = `${n}%`),
                  (e.style.opacity = a(n, 0, 100, 1, 0)),
                  (t.style.opacity = a(n, 0, 100, 1, 0));
              }, 9);
            function a(e, t, n, o, a) {
              return ((e - t) * (a - o)) / (n - t) + o;
            }
          });
      },
      427: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.writeText = void 0);
        const n = document.getElementById("typingText"),
          o = "An apprentice software developer.";
        let a = 1,
          s = !1;
        function c() {
          s
            ? ((n.innerText = `${o.slice(0, a)}`), (s = !1), i())
            : ((n.innerText = `${o.slice(0, a)} |`), (s = !0), i());
        }
        function i() {
          setTimeout(c, 500);
        }
        t.writeText = function e() {
          (n.innerText = `${o.slice(0, a)} |`), a++, n.innerText.length < 35 ? setTimeout(e, 75) : i();
        };
      },
      244: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.initGitStats = void 0);
        const n = document.getElementById("GithubStats");
        t.initGitStats = () => {
          fetch("https://api.github.com/users/elliotlafave123", {
            method: "GET",
            headers: { Authorization: "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 " },
          })
            .then((e) => e.json())
            .then((e) => {
              o(e);
            });
        };
        const o = (e) => {
          const t = `\n    <p class="githubStats-NameOfComponent">GitHub Statistics</p>\n    <img src="./img/logo-dark.png" alt="" />\n    <div class="githubStats-container">\n        <div class="githubStats-top">\n            <h2>${
            e.name
          }</h2>\n            <p>Joined ${(function (e) {
            const t = e.getFullYear(),
              n = e.getMonth() + 1;
            return ` ${e.getDate()}/${n}/${t}`;
          })(new Date(e.created_at))}</p>\n        </div>\n\n        <span>@${e.login}</span>\n        <p>${e.bio.slice(
            0,
            142
          )}.</p>\n\n        <div class="githubStats-stats">\n            <div class="githubStats-stats-section">\n                <p>Repos</p>\n                <span>${
            e.public_repos
          }</span>\n            </div>\n            <div class="githubStats-stats-section">\n                <p>Following</p>\n                <span>${
            e.following
          }</span>\n            </div>\n            <div class="githubStats-stats-section">\n                <p>Commits</p>\n                <span>944</span>\n            </div>\n        </div>\n\n        <div class="githubStats-info">\n            <div class="githubStats-info-section">\n                <i class="fa-solid fa-location-dot"></i>\n                <p>Manchester, UK</p>\n            </div>\n            <div class="githubStats-info-section">\n                <i class="fa-brands fa-twitter"></i>\n                <p>${
            e.login
          }</p>\n            </div>\n            <div class="githubStats-info-section">\n                <i class="fa-solid fa-link"></i>\n                <p>${
            e.blog
          }</p>\n            </div>\n            <div class="githubStats-info-section">\n                <i class="fa-solid fa-city"></i>\n                <p>@GMC</p>\n            </div>\n        </div>\n    </div>\n    `;
          n.innerHTML = t;
        };
      },
      261: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.HideNoneFoundError = t.DisplayNoneFoundError = void 0);
        const o = n(562);
        (t.DisplayNoneFoundError = function () {
          (o.State.appContainer.innerHTML = ""),
            document.querySelector(".ProjectsAppNotFound").classList.remove("invisible");
        }),
          (t.HideNoneFoundError = function () {
            document.querySelector(".ProjectsAppNotFound").classList.add("invisible");
          });
      },
      214: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initJsPortfolioFeaturedCards = void 0),
          (t.initJsPortfolioFeaturedCards = () => {
            let e, t;
            const n = document.getElementById("cardGrid3"),
              o = document.getElementById("cardGrid3-home"),
              a = document.getElementById("refreshBtn");
            function s(e) {
              const t = new Date(e),
                n = t.getDate();
              return (
                (n <= 9 ? "0" + n : n) +
                ",  " +
                ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()] +
                " " +
                t.getFullYear()
              );
            }
            let c = !1;
            window.innerWidth < 500 && (c = !0),
              fetch("https://elliotapiserver.co.uk/api/v1/projects")
                .then((e) => e.json())
                .then((n) => {
                  (e = n), (t = [e[2], e[4], e[6], e[7], e[9], e[10], e[15], e[16], e[18], e[19], e[20], e[21]]), i();
                });
            const i = function () {
                const e = [],
                  a = [],
                  s = function () {
                    const n = Math.floor(Math.random() * t.length);
                    e.includes(n) ? s() : e.push(n);
                  };
                for (; e.length < 3; ) s();
                var c;
                !(function (e) {
                  for (let n = 0; n < 3; n++) a.push(t[e[n]]);
                })(e),
                  a[0] && a[1] && a[2] ? ((c = a), o && l(c), n && r(c)) : i();
              },
              l = function (e) {
                (o.innerHTML = ""),
                  e.forEach(function (e, t) {
                    const n = `\n\t\t\t<div class="card ${1 === t ? "card--middle" : ""}">\n\t\t\t\t\t<img src="${
                      e.linkImg
                    }" alt="" class="card__img" ${
                      c ? 'loading="lazy"' : ""
                    }>\n\t\t\t\t\t<div class="card__content">\n\t\t\t\t\t\t<h4 class="card__title u-margin-bottom-medium">${
                      e.title
                    }</h4>\n\t\t\t\t\t\t<span class="card__date">${s(
                      e.date
                    )}</span>\n\t\t\t\t\t\t<p class="card__text">${
                      e.paragraph
                    }</p>\n\t\t\t\t\t\t<div class="tags">\n\t\t\t\t\t\t${
                      e.tags.includes("html")
                        ? '<span class="tags__tag tags__tag--html"><svg xmlns="http://www.w3.org/2000/svg" fill="#f0582f" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>HTML</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("css")
                        ? '<span class="tags__tag tags__tag--css"><svg xmlns="http://www.w3.org/2000/svg" fill="#007cc4" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>CSS</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("js")
                        ? '<span class="tags__tag tags__tag--js"><svg xmlns="http://www.w3.org/2000/svg" fill="#f48031" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>JS</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("api")
                        ? '<span class="tags__tag tags__tag--api"><svg xmlns="http://www.w3.org/2000/svg" fill="#f5f258" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"/></svg>API</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("scss")
                        ? '<span class="tags__tag tags__tag--scss"><svg xmlns="http://www.w3.org/2000/svg" fill="#cc6699" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>SCSS</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("course")
                        ? '<span class="tags__tag tags__tag--course"><svg xmlns="http://www.w3.org/2000/svg" fill="#8d66cc" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M240 97.25C232.3 104.8 219.3 131.8 216.6 176h46.88C260.8 131.8 247.8 104.8 240 97.25zM334.4 176c-5.25-31.25-25.62-57.13-53.25-70.38C288.8 124.6 293.8 149 295.3 176H334.4zM334.4 208h-39.13c-1.5 27-6.5 51.38-14.12 70.38C308.8 265.1 329.1 239.3 334.4 208zM263.4 208H216.5C219.3 252.3 232.3 279.3 240 286.8C247.8 279.3 260.8 252.3 263.4 208zM198.9 105.6C171.3 118.9 150.9 144.8 145.6 176h39.13C186.3 149 191.3 124.6 198.9 105.6zM448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM240 64c70.75 0 128 57.25 128 128s-57.25 128-128 128s-128-57.25-128-128S169.3 64 240 64zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448zM198.9 278.4C191.3 259.4 186.3 235 184.8 208H145.6C150.9 239.3 171.3 265.1 198.9 278.4z"/></svg>Course</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("challenge")
                        ? '<span class="tags__tag tags__tag--challenge"><svg xmlns="http://www.w3.org/2000/svg" fill="#66cc92" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M509.5 .0234c-6.145 0-12.53 1.344-18.64 4.227c-44.11 20.86-76.81 27.94-104.1 27.94c-57.89 0-91.53-31.86-158.2-31.87C195 .3203 153.3 8.324 96 32.38V32c0-17.75-14.25-32-32-32S32 14.25 32 32L31.96 496c0 8.75 7.25 16 16 16H80C88.75 512 96 504.8 96 496V384c51.74-23.86 92.71-31.82 128.3-31.82c71.09 0 120.6 31.78 191.7 31.78c30.81 0 65.67-5.969 108.1-23.09C536.3 355.9 544 344.4 544 332.1V30.74C544 12.01 527.8 .0234 509.5 .0234zM480 141.8c-31.99 14.04-57.81 20.59-80 22.49v80.21c25.44-1.477 51.59-6.953 80-17.34V308.9c-22.83 7.441-43.93 11.08-64.03 11.08c-5.447 0-10.71-.4258-15.97-.8906V244.5c-4.436 .2578-8.893 .6523-13.29 .6523c-25.82 0-47.35-4.547-66.71-10.08v66.91c-23.81-6.055-50.17-11.41-80-12.98V213.1C236.2 213.7 232.5 213.3 228.5 213.3C208.8 213.3 185.1 217.7 160 225.1v69.1C139.2 299.4 117.9 305.8 96 314.4V250.7l24.77-10.39C134.8 234.5 147.6 229.9 160 225.1V143.4C140.9 148.5 120.1 155.2 96 165.3V101.8l24.77-10.39C134.8 85.52 147.6 80.97 160 77.02v66.41c26.39-6.953 49.09-10.17 68.48-10.16c4.072 0 7.676 .4453 11.52 .668V65.03C258.6 66.6 274.4 71.55 293.2 77.83C301.7 80.63 310.7 83.45 320 86.12v66.07c20.79 6.84 41.45 12.96 66.71 12.96c4.207 0 8.781-.4766 13.29-.8594V95.54c25.44-1.477 51.59-6.953 80-17.34V141.8zM240 133.9v80.04c18.61 1.57 34.37 6.523 53.23 12.8C301.7 229.6 310.7 232.4 320 235.1V152.2C296.1 144.3 271.6 135.8 240 133.9z"/></svg>Challenge</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("nodejs")
                        ? '<span class="tags__tag tags__tag--nodejs"><svg xmlns="http://www.w3.org/2000/svg" fill="#379922" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>NodeJS</span>'
                        : ""
                    }\n\t\t\t\t\t\t${
                      e.tags.includes("mongodb")
                        ? '<span class="tags__tag tags__tag--mongodb"><svg role="img" fill="#4e763b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg> MongoDB</span>'
                        : ""
                    }\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class="card__buttons">\n\t\t\t\t\t\t\t<a href="${
                      e.linkLivePreview
                    }" class="btn btn--card" target="blank">Live Preview <span class="btn--card-icon"><i class="fa-solid fa-up-right-from-square"></i></span></a>\n\t\t\t\t\t\t\t<a href="${
                      e.linkGit
                    }" class="btn btn--git" target="blank"><img src="img/github-logo.png" alt=""></a>\n\t\t\t\t\t\t</div>                  \n\t\t\t\t\t</div>\n\t\t\t\t</div> \n\t\t  `;
                    o.insertAdjacentHTML("afterbegin", n);
                  });
              },
              r = function (e) {
                const t = e
                  .map(
                    (e, t) =>
                      `\n\t\t  <div class="card card--2 ${1 === t ? "card--middle" : ""}">\n\t\t\t\t  <img src="${
                        e.linkImg
                      }" alt="" class="card__img" ${
                        c ? 'loading="lazy"' : ""
                      }>\n\t\t\t\t  <div class="card__content">\n\t\t\t\t\t  <h4 class="card__title u-margin-bottom-medium">${
                        e.title
                      }</h4>\n\t\t\t\t\t  <span class="card__date">${s(
                        e.date
                      )}</span>\n\t\t\t\t\t  <p class="card__text">${
                        e.paragraph
                      }</p>\n\t\t\t\t\t  <div class="tags">\n\t\t\t\t\t  ${
                        e.tags.includes("html")
                          ? '<span class="tags__tag tags__tag--html"><svg xmlns="http://www.w3.org/2000/svg" fill="#f0582f" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>HTML</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("css")
                          ? '<span class="tags__tag tags__tag--css"><svg xmlns="http://www.w3.org/2000/svg" fill="#007cc4" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>CSS</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("js")
                          ? '<span class="tags__tag tags__tag--js"><svg xmlns="http://www.w3.org/2000/svg" fill="#f48031" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>JS</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("api")
                          ? '<span class="tags__tag tags__tag--api"><svg xmlns="http://www.w3.org/2000/svg" fill="#f5f258" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"/></svg>API</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("scss")
                          ? '<span class="tags__tag tags__tag--scss"><svg xmlns="http://www.w3.org/2000/svg" fill="#cc6699" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>SCSS</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("course")
                          ? '<span class="tags__tag tags__tag--course"><svg xmlns="http://www.w3.org/2000/svg" fill="#8d66cc" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M240 97.25C232.3 104.8 219.3 131.8 216.6 176h46.88C260.8 131.8 247.8 104.8 240 97.25zM334.4 176c-5.25-31.25-25.62-57.13-53.25-70.38C288.8 124.6 293.8 149 295.3 176H334.4zM334.4 208h-39.13c-1.5 27-6.5 51.38-14.12 70.38C308.8 265.1 329.1 239.3 334.4 208zM263.4 208H216.5C219.3 252.3 232.3 279.3 240 286.8C247.8 279.3 260.8 252.3 263.4 208zM198.9 105.6C171.3 118.9 150.9 144.8 145.6 176h39.13C186.3 149 191.3 124.6 198.9 105.6zM448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM240 64c70.75 0 128 57.25 128 128s-57.25 128-128 128s-128-57.25-128-128S169.3 64 240 64zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448zM198.9 278.4C191.3 259.4 186.3 235 184.8 208H145.6C150.9 239.3 171.3 265.1 198.9 278.4z"/></svg>Course</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("challenge")
                          ? '<span class="tags__tag tags__tag--challenge"><svg xmlns="http://www.w3.org/2000/svg" fill="#66cc92" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M509.5 .0234c-6.145 0-12.53 1.344-18.64 4.227c-44.11 20.86-76.81 27.94-104.1 27.94c-57.89 0-91.53-31.86-158.2-31.87C195 .3203 153.3 8.324 96 32.38V32c0-17.75-14.25-32-32-32S32 14.25 32 32L31.96 496c0 8.75 7.25 16 16 16H80C88.75 512 96 504.8 96 496V384c51.74-23.86 92.71-31.82 128.3-31.82c71.09 0 120.6 31.78 191.7 31.78c30.81 0 65.67-5.969 108.1-23.09C536.3 355.9 544 344.4 544 332.1V30.74C544 12.01 527.8 .0234 509.5 .0234zM480 141.8c-31.99 14.04-57.81 20.59-80 22.49v80.21c25.44-1.477 51.59-6.953 80-17.34V308.9c-22.83 7.441-43.93 11.08-64.03 11.08c-5.447 0-10.71-.4258-15.97-.8906V244.5c-4.436 .2578-8.893 .6523-13.29 .6523c-25.82 0-47.35-4.547-66.71-10.08v66.91c-23.81-6.055-50.17-11.41-80-12.98V213.1C236.2 213.7 232.5 213.3 228.5 213.3C208.8 213.3 185.1 217.7 160 225.1v69.1C139.2 299.4 117.9 305.8 96 314.4V250.7l24.77-10.39C134.8 234.5 147.6 229.9 160 225.1V143.4C140.9 148.5 120.1 155.2 96 165.3V101.8l24.77-10.39C134.8 85.52 147.6 80.97 160 77.02v66.41c26.39-6.953 49.09-10.17 68.48-10.16c4.072 0 7.676 .4453 11.52 .668V65.03C258.6 66.6 274.4 71.55 293.2 77.83C301.7 80.63 310.7 83.45 320 86.12v66.07c20.79 6.84 41.45 12.96 66.71 12.96c4.207 0 8.781-.4766 13.29-.8594V95.54c25.44-1.477 51.59-6.953 80-17.34V141.8zM240 133.9v80.04c18.61 1.57 34.37 6.523 53.23 12.8C301.7 229.6 310.7 232.4 320 235.1V152.2C296.1 144.3 271.6 135.8 240 133.9z"/></svg>Challenge</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("nodejs")
                          ? '<span class="tags__tag tags__tag--nodejs"><svg xmlns="http://www.w3.org/2000/svg" fill="#379922" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>NodeJS</span>'
                          : ""
                      }\n\t\t\t\t\t  ${
                        e.tags.includes("mongodb")
                          ? '<span class="tags__tag tags__tag--mongodb"><svg role="img" fill="#4e763b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg> MongoDB</span>'
                          : ""
                      }\n\t\t\t\t\t  </div> \n\t\t\t\t\t  \n\t\t\t\t\t  <div class="card__buttons">\n\t\t\t\t\t\t  <a href="${
                        e.linkLivePreview
                      }" class="btn btn--card" target="blank">Live Preview <span class="btn--card-icon"><i class="fa-solid fa-up-right-from-square"></i></span></a>\n\t\t\t\t\t\t  <a href="${
                        e.linkGit
                      }" class="btn btn--git" target="blank"><img src="img/github-logo.png" alt=""></a>\n\t\t\t\t\t  </div>                  \n\t\t\t\t  </div>\n\t\t\t  </div> \n\t\t`
                  )
                  .join("");
                n.innerHTML = t;
              };
            a.addEventListener("click", function () {
              i(),
                (function () {
                  if (window.innerWidth < 800) {
                    const e = document.getElementById("refreshBtn");
                    e && e.scrollIntoView();
                  }
                })(),
                a.classList.add("spin"),
                setTimeout(() => {
                  a.classList.remove("spin");
                }, 1001);
            });
          });
      },
      851: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.initPortfolioCardsApp = void 0);
        const o = n(562),
          a = n(351),
          s = n(154),
          c = n(773),
          i = n(997),
          l = n(911),
          r = n(889);
        t.initPortfolioCardsApp = () => {
          (0, a.showSkeletonLoading)(),
            (0, r.InitializePagination)(),
            (0, s.ListenForSearchInput)(),
            (0, s.ListenForDropdownInput)(),
            (0, s.ListenForClearFiltersClick)(),
            (0, l.HideClearFiltersButton)(),
            fetch("https://elliotapiserver.co.uk/api/v1/projects")
              .then((e) => e.json())
              .then((e) => {
                !(function (e) {
                  const t = new Array();
                  e.forEach((e) => {
                    const n = {
                      id: e.id,
                      date: new Date(e.date),
                      title: e.title,
                      paragraph: e.paragraph,
                      linkLivePreview: e.linkLivePreview,
                      linkGit: e.linkGit,
                      linkImg: e.linkImg,
                      tags: e.tags,
                    };
                    t.unshift(n);
                  }),
                    (o.State.allProjects = t),
                    "" !== o.State.inputs.dropdown.value || "" !== o.State.inputs.dropdown.value
                      ? (0, i.SortingController)()
                      : ((o.State.DisplayedProjects = o.State.allProjects),
                        (0, c.DisplayMultipleCards)(o.State.DisplayedProjects));
                })(e.reverse());
              });
        };
      },
      889: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.InitializePagination = t.ResetPagination = t.ShowPagination = t.HidePagination = void 0);
        const o = n(773),
          a = n(261),
          s = n(562);
        function c() {
          const e = document.querySelector(".ProjectsAppInputs");
          e && e.scrollIntoView();
        }
        function i() {
          const e = document.getElementById("PageNumberEl"),
            t = document.getElementById("PageNumberElBottom");
          if (!e.value) return (0, a.DisplayNoneFoundError)();
          (0, a.HideNoneFoundError)();
          const n = parseInt(e.value);
          var c;
          (c = n) < 1 || c > s.State.numPages
            ? ((e.value = s.State.page.toString()), (t.value = s.State.page.toString()))
            : ((s.State.page = n), (0, o.DisplayMultipleCards)(s.State.DisplayedProjects));
        }
        (t.HidePagination = function () {
          document.getElementById("PaginationContainer").classList.add("invisible"),
            document.getElementById("PaginationContainerBottom").classList.add("invisible");
        }),
          (t.ShowPagination = function () {
            document.getElementById("PaginationContainer").classList.remove("invisible"),
              document.getElementById("PaginationContainerBottom").classList.remove("invisible");
          }),
          (t.ResetPagination = function () {
            (s.State.page = 1),
              (document.getElementById("PageNumberEl").value = s.State.page.toString()),
              (document.getElementById("PageNumberElBottom").value = s.State.page.toString());
          }),
          (t.InitializePagination = function () {
            const e = document.getElementById("PageNumberEl");
            e.value = s.State.page.toString();
            const t = document.getElementById("PageNumberElBottom");
            t.value = s.State.page.toString();
            const n = document.getElementById("LastPage"),
              o = document.getElementById("NextPage"),
              a = document.getElementById("LastPageBottom"),
              l = document.getElementById("NextPageBottom");
            e.addEventListener("input", function () {
              "" === e.value && (e.value = t.value), (t.value = e.value), i();
            }),
              t.addEventListener("input", function () {
                "" === t.value && (t.value = e.value), (e.value = t.value), i(), c();
              }),
              n.addEventListener("click", function () {
                (e.value = (parseInt(e.value) - 1).toString()), (t.value = e.value), i();
              }),
              o.addEventListener("click", function () {
                (e.value = (parseInt(e.value) + 1).toString()), (t.value = e.value), i();
              }),
              a.addEventListener("click", function () {
                (t.value = (parseInt(e.value) - 1).toString()), (e.value = t.value), i(), c();
              }),
              l.addEventListener("click", function () {
                (t.value = (parseInt(e.value) + 1).toString()), (e.value = t.value), i(), c();
              });
          });
      },
      752: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SortByDropdown = void 0);
        const o = n(562),
          a = n(773);
        t.SortByDropdown = function (e) {
          const t = o.State.allProjects,
            n = new Array();
          return (
            t.forEach((t) => {
              t.tags.forEach((o) => {
                o === e && n.push(t);
              });
            }),
            (o.State.DisplayedProjects = n),
            (0, a.DisplayMultipleCards)(o.State.DisplayedProjects),
            n
          );
        };
      },
      419: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SortByMany = void 0);
        const o = n(562),
          a = n(773),
          s = n(278),
          c = n(752),
          i = n(261);
        t.SortByMany = function (e, t) {
          const n = (0, c.SortByDropdown)(o.State.inputs.dropdown.value);
          (o.State.DisplayedProjects = (0, s.SortBySearch)(o.State.inputs.searchBar.value, n)),
            o.State.DisplayedProjects.length > 0
              ? ((0, i.HideNoneFoundError)(), (0, a.DisplayMultipleCards)(o.State.DisplayedProjects))
              : (0, i.DisplayNoneFoundError)();
        };
      },
      278: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SortBySearch = void 0);
        const o = n(562),
          a = n(773),
          s = n(261);
        t.SortBySearch = function (e, t) {
          let n;
          n = void 0 === t ? o.State.allProjects : t;
          const c = new Array();
          return (
            n.forEach((t) => {
              t.title.toLowerCase().includes(e.toLowerCase()) && c.push(t);
            }),
            (o.State.DisplayedProjects = c),
            o.State.DisplayedProjects.length > 0
              ? ((0, s.HideNoneFoundError)(), (0, a.DisplayMultipleCards)(o.State.DisplayedProjects))
              : (0, s.DisplayNoneFoundError)(),
            c
          );
        };
      },
      997: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.SortingController = void 0);
        const o = n(562),
          a = n(773),
          s = n(278),
          c = n(752),
          i = n(419),
          l = n(911),
          r = n(889);
        t.SortingController = function () {
          (0, r.ResetPagination)();
          const e = "" === o.State.inputs.dropdown.value,
            t = "" === o.State.inputs.searchBar.value;
          return e && t
            ? ((0, l.HideClearFiltersButton)(), (0, a.DisplayMultipleCards)(o.State.allProjects))
            : e && !t
            ? ((0, l.ShowClearFiltersButton)(), (0, s.SortBySearch)(o.State.inputs.searchBar.value))
            : !e && t
            ? ((0, l.ShowClearFiltersButton)(), (0, c.SortByDropdown)(o.State.inputs.dropdown.value))
            : ((0, l.ShowClearFiltersButton)(),
              (0, i.SortByMany)(o.State.inputs.searchBar.value, o.State.inputs.dropdown.value));
        };
      },
      562: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.State = void 0);
        const o = n(464);
        t.State = {
          inputs: {
            searchBar: document.getElementById("ProjectsAppInput"),
            dropdown: document.getElementById("dropdown"),
          },
          isFiltered: !1,
          allProjects: null,
          DisplayedProjects: null,
          isMobile: window.innerWidth < 500,
          gridColumnCount: (0, o.getGridColumnCount)(),
          page: 1,
          numPages: void 0,
          appContainer: document.querySelector(".ProjectsAppContainer"),
        };
      },
      911: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ShowClearFiltersButton = t.HideClearFiltersButton = t.ClearFiltersController = void 0);
        const o = n(773),
          a = n(261),
          s = n(889),
          c = n(562);
        function i() {
          document.getElementById("ProjectsAppClearFiltersButton").classList.add("hidden");
        }
        (t.ClearFiltersController = function () {
          i(),
            (c.State.inputs.dropdown.value = ""),
            (c.State.inputs.searchBar.value = ""),
            (0, a.HideNoneFoundError)(),
            (0, s.ResetPagination)(),
            (c.State.DisplayedProjects = c.State.allProjects),
            (0, o.DisplayMultipleCards)(c.State.DisplayedProjects);
        }),
          (t.HideClearFiltersButton = i),
          (t.ShowClearFiltersButton = function () {
            document.getElementById("ProjectsAppClearFiltersButton").classList.remove("hidden");
          });
      },
      773: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.DisplayMultipleCards = void 0);
        const o = n(562),
          a = n(464),
          s = n(889),
          c = o.State.appContainer;
        function i(e, t) {
          const n = `<div class="cardjs">\n    <img\n        src="${
            e.linkImg
          }"\n        alt="A Project Card Image" \n        class="cardjs-img"\n        ${
            o.State.isMobile ? 'loading="lazy"' : ""
          }\n    />\n    <div class="JScard-content">\n        <div>\n            <h4>${
            e.title
          }</h4>\n            <div class="tags-container">\n            ${
            e.tags.includes("vue")
              ? '<span class="tag tag-firebase"><img srcset="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png" alt="Vue logo">Vue</span>'
              : ""
          }\n            ${
            e.tags.includes("nodejs")
              ? '<span class="tag tag-nodejs"><svg xmlns="http://www.w3.org/2000/svg" fill="#379922" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/></svg>NodeJS</span>'
              : ""
          }\n            ${
            e.tags.includes("mongodb")
              ? '<span class="tag tag-mongodb"><svg role="img" fill="#4e763b" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg> MongoDB</span>'
              : ""
          }\n            ${
            e.tags.includes("react")
              ? '<span class="tag tag-react"><svg fill="#61DBFB" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\x3c!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>React</span>'
              : ""
          }\n            ${
            e.tags.includes("firebase")
              ? '<span class="tag tag-firebase"><img srcset="https://img.icons8.com/color/96/firebase.png 2x" alt="Firebase logo">Firebase</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("challenge")
              ? '<span class="tag tag-challenge"><svg xmlns="http://www.w3.org/2000/svg" fill="#66cc92" viewBox="0 0 576 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M509.5 .0234c-6.145 0-12.53 1.344-18.64 4.227c-44.11 20.86-76.81 27.94-104.1 27.94c-57.89 0-91.53-31.86-158.2-31.87C195 .3203 153.3 8.324 96 32.38V32c0-17.75-14.25-32-32-32S32 14.25 32 32L31.96 496c0 8.75 7.25 16 16 16H80C88.75 512 96 504.8 96 496V384c51.74-23.86 92.71-31.82 128.3-31.82c71.09 0 120.6 31.78 191.7 31.78c30.81 0 65.67-5.969 108.1-23.09C536.3 355.9 544 344.4 544 332.1V30.74C544 12.01 527.8 .0234 509.5 .0234zM480 141.8c-31.99 14.04-57.81 20.59-80 22.49v80.21c25.44-1.477 51.59-6.953 80-17.34V308.9c-22.83 7.441-43.93 11.08-64.03 11.08c-5.447 0-10.71-.4258-15.97-.8906V244.5c-4.436 .2578-8.893 .6523-13.29 .6523c-25.82 0-47.35-4.547-66.71-10.08v66.91c-23.81-6.055-50.17-11.41-80-12.98V213.1C236.2 213.7 232.5 213.3 228.5 213.3C208.8 213.3 185.1 217.7 160 225.1v69.1C139.2 299.4 117.9 305.8 96 314.4V250.7l24.77-10.39C134.8 234.5 147.6 229.9 160 225.1V143.4C140.9 148.5 120.1 155.2 96 165.3V101.8l24.77-10.39C134.8 85.52 147.6 80.97 160 77.02v66.41c26.39-6.953 49.09-10.17 68.48-10.16c4.072 0 7.676 .4453 11.52 .668V65.03C258.6 66.6 274.4 71.55 293.2 77.83C301.7 80.63 310.7 83.45 320 86.12v66.07c20.79 6.84 41.45 12.96 66.71 12.96c4.207 0 8.781-.4766 13.29-.8594V95.54c25.44-1.477 51.59-6.953 80-17.34V141.8zM240 133.9v80.04c18.61 1.57 34.37 6.523 53.23 12.8C301.7 229.6 310.7 232.4 320 235.1V152.2C296.1 144.3 271.6 135.8 240 133.9z"/></svg>Challenge</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("course")
              ? '<span class="tag tag-course"><svg xmlns="http://www.w3.org/2000/svg" fill="#8d66cc" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M240 97.25C232.3 104.8 219.3 131.8 216.6 176h46.88C260.8 131.8 247.8 104.8 240 97.25zM334.4 176c-5.25-31.25-25.62-57.13-53.25-70.38C288.8 124.6 293.8 149 295.3 176H334.4zM334.4 208h-39.13c-1.5 27-6.5 51.38-14.12 70.38C308.8 265.1 329.1 239.3 334.4 208zM263.4 208H216.5C219.3 252.3 232.3 279.3 240 286.8C247.8 279.3 260.8 252.3 263.4 208zM198.9 105.6C171.3 118.9 150.9 144.8 145.6 176h39.13C186.3 149 191.3 124.6 198.9 105.6zM448 336v-288C448 21.49 426.5 0 400 0H96C42.98 0 0 42.98 0 96v320c0 53.02 42.98 96 96 96h320c17.67 0 32-14.33 32-32c0-11.72-6.607-21.52-16-27.1v-81.36C441.8 362.8 448 350.2 448 336zM240 64c70.75 0 128 57.25 128 128s-57.25 128-128 128s-128-57.25-128-128S169.3 64 240 64zM384 448H96c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32h288V448zM198.9 278.4C191.3 259.4 186.3 235 184.8 208H145.6C150.9 239.3 171.3 265.1 198.9 278.4z"/></svg>Course</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("scss")
              ? '<span class="tag tag-scss"><svg xmlns="http://www.w3.org/2000/svg" fill="#cc6699" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M301.84 378.92c-.3.6-.6 1.08 0 0zm249.13-87a131.16 131.16 0 0 0-58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.29 5.9a122.83 122.83 0 0 0-5.3 19.1c-2.3 11.7-25.79 53.5-39.09 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.29-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.89 77.3-42.08 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4.8-.7 1.3-.9 1.7.3-.5.5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4.3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.39-42.4c-18.4 0-44 20.2-56.58 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.79-38.2-101.87-65.2-99.07-116.5 1-18.7 7.5-67.8 127.07-127.4 98-48.8 176.35-35.4 189.84-5.6 19.4 42.5-41.89 121.6-143.66 133-38.79 4.3-59.18-10.7-64.28-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.79 28.9 18.7 6.1 64.18 9.5 119.17-11.8 61.78-23.8 109.87-90.1 95.77-145.6C386.52 18.32 293-.18 204.57 31.22c-52.69 18.7-109.67 48.1-150.66 86.4-48.69 45.6-56.48 85.3-53.28 101.9 11.39 58.9 92.57 97.3 125.06 125.7-1.6.9-3.1 1.7-4.5 2.5-16.29 8.1-78.18 40.5-93.67 74.7-17.5 38.8 2.9 66.6 16.29 70.4 41.79 11.6 84.58-9.3 107.57-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.29-4.9 16.39-9.4 23.49-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.49 5 15.39 5 13.8 0 20-11.4 26.89-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.39 0 18.79-12.1 23-18.3v.1s.2-.4.7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.59-46 16.2-31.8 31.69-71.5 31.69-71.5a201.24 201.24 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.31.31 0 0 0 .1.2c-3 4-6.4 8.3-9.9 12.5-12.79 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.69 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.19-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.72 450.1 270 450.1 270a201.24 201.24 0 0 0 6.2 25.8c2.4 8.1 7.09 17 11.39 25.7-18.59 15.1-30.09 32.6-34.09 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.46 79.46 0 0 0 21.59-11.1c12.5-9.2 24.59-22.1 23.79-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.09-10.2 62.09-7.2 55.68 6.5 66.58 41.3 64.48 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.19-11.8 30.29-38.7 1.6-34-31.09-71.4-89-71.1zm-429.18 144.7c-18.39 20.1-44.19 27.7-55.28 21.3C54.61 451 59.31 421.42 82 400c13.8-13 31.59-25 43.39-32.4 2.7-1.6 6.6-4 11.4-6.9.8-.5 1.2-.7 1.2-.7.9-.6 1.9-1.1 2.9-1.7 8.29 30.4.3 57.2-19.1 78.3zm134.36-91.4c-6.4 15.7-19.89 55.7-28.09 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.09-11.3 21.19-14.9 23.79-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.89-13.9 0 .5.1 1 .1 1.6-.13 17.9-17.32 30-25.12 34.8zm85.58-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.59-15.3 19-24.5a36.18 36.18 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.89 34.4z"/></svg>SCSS</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("api")
              ? '<span class="tag tag-api"><svg xmlns="http://www.w3.org/2000/svg" fill="#f5f258" viewBox="0 0 640 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"/></svg>API</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("js")
              ? '<span class="tag tag-js"><svg xmlns="http://www.w3.org/2000/svg" fill="#f48031" viewBox="0 0 448 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>JS</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("css")
              ? '<span class="tag tag-css"><svg xmlns="http://www.w3.org/2000/svg" fill="#007cc4" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>CSS</span>'
              : ""
          }\n\t\t\t${
            e.tags.includes("html")
              ? '<span class="tag tag-html"><svg xmlns="http://www.w3.org/2000/svg" fill="#f0582f" viewBox="0 0 384 512">\x3c!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --\x3e<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>HTML</span>'
              : ""
          }\n            </div>\n            <span class="JScard-content-date">${(0, a.GenerateDateString)(
            e.date
          )}</span>\n        </div>\n    <div>\n        <p>\n            ${
            e.paragraph
          }\n        </p>\n    </div>\n    </div>\n        <div class="buttons-container">\n            <a href="${
            e.linkLivePreview
          }" class="JSbtn-live-preview"\n                >Live Preview\n                <i class="fa-solid fa-up-right-from-square"></i>\n            </a>\n            <a href="${
            e.linkGit
          }" class="btn-git">\n                <img\n                    src="https://d33wubrfki0l68.cloudfront.net/f78349611e6cb9ec98b8b2851b3b1e616e7e4ea3/1c471/img/github-logo.png"\n                    alt=""\n                />\n            </a>\n        </div>\n    </div>\n    `;
          t.insertAdjacentHTML("beforeend", n);
        }
        t.DisplayMultipleCards = function (e) {
          c.innerHTML = "";
          const t =
              1 === o.State.gridColumnCount || 2 === o.State.gridColumnCount
                ? 6
                : 3 === o.State.gridColumnCount
                ? 9
                : 4 === o.State.gridColumnCount
                ? 8
                : 5 === o.State.gridColumnCount
                ? 15
                : void 0,
            n = e.length;
          (o.State.numPages = Math.ceil(n / t)),
            n > t
              ? ((0, a.paginate)(e, t, o.State.page).forEach((e) => {
                  i(e, c);
                }),
                (0, s.ShowPagination)())
              : (e.forEach((e) => {
                  i(e, c);
                }),
                (0, s.HidePagination)());
        };
      },
      154: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.ListenForClearFiltersClick = t.ListenForDropdownInput = t.ListenForSearchInput = void 0);
        const o = n(562),
          a = n(997),
          s = n(911),
          c = n(889);
        (t.ListenForSearchInput = function () {
          o.State.inputs.searchBar.addEventListener("input", (e) => {
            e.preventDefault(), (0, a.SortingController)();
          });
        }),
          (t.ListenForDropdownInput = function () {
            o.State.inputs.dropdown.addEventListener("change", (e) => {
              e.preventDefault(), (0, a.SortingController)();
            });
          }),
          (t.ListenForClearFiltersClick = function () {
            document.getElementById("ProjectsAppClearFiltersButton").addEventListener("click", function (e) {
              e.preventDefault(), (0, c.ResetPagination)(), (0, s.ClearFiltersController)();
            });
          });
      },
      464: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.paginate = t.getGridColumnCount = t.IncludesTag = t.GenerateDateString = void 0),
          (t.GenerateDateString = function (e) {
            const t = new Date(e),
              n = t.getDate();
            return (
              (n <= 9 ? "0" + n : n) +
              ",  " +
              ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t.getMonth()] +
              " " +
              t.getFullYear()
            );
          }),
          (t.IncludesTag = function (e, t) {
            return t.length > 0
              ? (t.forEach((t) => {
                  if (t === e) return !0;
                }),
                !1)
              : null;
          }),
          (t.getGridColumnCount = function () {
            const e = document.querySelector(".ProjectsAppContainer");
            if (e) return window.getComputedStyle(e).getPropertyValue("grid-template-columns").split(" ").length;
          }),
          (t.paginate = function (e, t, n) {
            return e.slice((n - 1) * t, n * t);
          });
      },
      351: (e, t, n) => {
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.showSkeletonLoading = void 0);
        const o = n(562);
        t.showSkeletonLoading = function () {
          let e = "";
          for (let t = 0; t < 3 * o.State.gridColumnCount; t++)
            e +=
              '\n        <div class="cardjs">\n            <div class="skeleton skeleton-img"></div>\n            <div class="JScard-content">\n            <div>\n                <h4 class="skeleton skeleton-text skeleton-text-large"></h4>\n                <div class="tags-container">\n                <h3 class="skeleton skeleton-tag"></h3>\n                <h3 class="skeleton skeleton-tag"></h3>\n                <h3 class="skeleton skeleton-tag"></h3>\n                <h3 class="skeleton skeleton-tag"></h3>\n                </div>\n                <h4 class="skeleton skeleton-text skeleton-text-small"></h4>\n            </div>\n            <div>\n                <p class="skeleton skeleton-paragraph"></p>\n            </div>\n            </div>\n            <div class="buttons-container">\n            <a href="#all-projects" class="JSbtn-live-preview "\n                ><p class="blur">Live Preview</p>\n                <i class="fa-solid fa-up-right-from-square"></i>\n            </a>\n            <a href="#all-projects" class="btn-git blur">\n                <img\n                src="https://d33wubrfki0l68.cloudfront.net/f78349611e6cb9ec98b8b2851b3b1e616e7e4ea3/1c471/img/github-logo.png"\n                alt=""\n                />\n            </a>\n            </div>\n        </div>\n    ';
          o.State.appContainer.innerHTML = e;
        };
      },
      709: (e, t) => {
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.initTooltip = void 0),
          (t.initTooltip = () => {
            "true" !== localStorage.getItem("ClosedTooltipDarkMode")
              ? localStorage.setItem("ClosedTooltipDarkMode", "false")
              : document.querySelector(".tooltip").classList.add("invisible"),
              document.addEventListener("click", (e) => {
                const t = e.target;
                t &&
                  t.classList.contains("closeTooltip") &&
                  (t.closest(".tooltip").classList.add("invisible"),
                  localStorage.setItem("ClosedTooltipDarkMode", "true"));
              });
          });
      },
      607: function (e, t, n) {
        var o =
          (this && this.__awaiter) ||
          function (e, t, n, o) {
            return new (n || (n = Promise))(function (a, s) {
              function c(e) {
                try {
                  l(o.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function i(e) {
                try {
                  l(o.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(c, i);
              }
              l((o = o.apply(e, t || [])).next());
            });
          };
        Object.defineProperty(t, "__esModule", { value: !0 });
        const a = n(105),
          s = n(763),
          c = n(3),
          i = n(851),
          l = n(737),
          r = n(557),
          d = n(858),
          u = n(709),
          m = n(158),
          g = n(529),
          p = n(195),
          v = n(235),
          h = n(427),
          f = n(244),
          y = n(214),
          C = n(577),
          w = n(669),
          S = n(702),
          L = (e) => null != e,
          b = document.getElementById("currentYear"),
          k = new Date();
        (b.textContent = k.getFullYear().toString()),
          (0, S.HandleCookies)(),
          (0, r.setDarkMode)(),
          (0, d.handleDarkMode)(),
          (function () {
            o(this, void 0, void 0, function* () {
              const e = document.getElementById("accountPage");
              L(e) ? (0, w.fetchAccountDetails)() : (0, c.checkLogin)();
              null != document.querySelector(".comments-container") &&
                (yield (0, a.displayComments)(), (0, s.handlePostComment)());
            });
          })();
        const I = document.querySelector(".tooltip");
        L(I) && (0, u.initTooltip)();
        const _ = document.querySelector(".loading-text");
        L(_) && (0, m.initLoadingOverlay)(), (0, l.initKeyboardNavigation)();
        const P = document.getElementById("ProjectsAppContainer");
        L(P) && (0, i.initPortfolioCardsApp)();
        const x = document.getElementById("cardGrid3"),
          M = document.getElementById("cardGrid3-home");
        (L(x) || L(M)) && (0, y.initJsPortfolioFeaturedCards)(), (0, g.initBreadcrumb)();
        const E = document.querySelector(".article__image");
        L(E) && (0, p.startEnlargeImage)();
        const B = document.querySelector(".article__sidebar");
        L(B) && (0, v.startArticleSidebar)();
        const A = document.getElementById("typingText");
        L(A) && (0, h.writeText)();
        const j = document.getElementById("GithubStats");
        L(j) && (0, f.initGitStats)();
        const z = document.querySelector(".storeBackLink");
        L(z) && (0, C.initStoreBackLink)();
      },
    },
    t = {};
  !(function n(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var s = (t[o] = { exports: {} });
    return e[o].call(s.exports, s, s.exports, n), s.exports;
  })(607);
})();
