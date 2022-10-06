(()=>{"use strict";var t={478:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.displayComments=void 0;const i=n(367),a=n(493),l=n(706);localStorage.getItem("token");const d=document.getElementById("commentStreamContainer").dataset.stream;e.displayComments=function(){return o(this,void 0,void 0,(function*(){try{const t=yield fetch("https://elliotapiserver.co.uk/Comments?"+new URLSearchParams({stream:d}).toString(),{method:"GET",headers:{"Content-Type":"application/json"}});if(c(),200===t.status){const e=yield t.json();e.length>0&&s(e)}else 404===t.status&&c()}catch(t){}}))};const c=()=>{const t=document.getElementById("InsertCommentsContainer");t&&(t.innerHTML="")},s=t=>{const e=document.getElementById("InsertCommentsContainer");e&&(t.forEach((t=>o(void 0,void 0,void 0,(function*(){let n=`\n        <div class="comment" data-commentId="${t.id}">\n        <div class="comment-main">\n            <div class="comment-header">\n                <div>\n                    <img src="../../../../img/logo-dark.png" alt="Profile Image" />\n                    <div class="CommentHeaderDot"></div>\n                    <h2>${t.fullname}</h2>\n                    <div class="CommentHeaderDot"></div>\n                    <span>${function(t){const e=new Date(t);var n=e.getDate(),o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],i=e.getFullYear(),a=e.getHours(),l=e.getMinutes();return`${o} ${n<=9?"0"+n:n}, ${i} at ${a>=12?a-12:a}:${l<=9?"0"+l:l} ${a>=12&&l>0?"PM":"AM"}`}(new Date(t.time))}</span>\n                    <h3>${t.hasBeenEdited?"(Edited)":""}</h3>\n                </div>\n                <div>${i.State.fullName===t.fullname&&void 0!==i.State.fullName?'<button class="editLinkButton" tabindex="0">Edit Comment</button>':""}</div>\n            </div>\n            <p>\n                ${t.text}\n            </p>\n\t\t\t${i.State.fullName===t.fullname&&void 0!==i.State.fullName?'<div class="editComment" style="display: none">\n\t\t\t<button class="deleteLinkButton u-margin-top-small" tabindex="0">Delete Comment</button>\n\t\t\t<button class="publish">Publish</button>\n\t\t</div>':""}\n            \n        </div>\n        <div class="comment-side">\n            <button class="upvoteComment">\n                <i class="fa-solid fa-chevron-up green"></i>\n            </button>\n            <p>${t.upvotes}</p>\n            <div class="CommentHeaderDot"></div>\n            <p>${t.downvotes}</p>\n            <button class="downvoteComment">\n                <i class="fa-solid fa-chevron-down red"></i>\n            </button>\n        </div>\n    </div>\n        `;e.insertAdjacentHTML("afterbegin",n)})))),(0,a.initEditComments)(),(0,l.initVoting)())}},639:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.checkLogin=void 0;const i=n(367),a=n(27);let l=localStorage.getItem("token");const d=document.getElementById("signedInStrip"),c=document.getElementById("signedInStripWarning"),s=document.getElementById("logOutButton"),r=document.getElementById("verifyEmailButton");e.checkLogin=()=>o(void 0,void 0,void 0,(function*(){try{const t=yield fetch("https://elliotapiserver.co.uk/Auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:l})});if(201!==t.status)throw r.style.display="none",new Error("Not Authenticated");{const e=yield t.json();i.State.fullName=e.data.fullName,i.State.emailAddress=e.data.emailAddress,i.State.emailVerified=e.data.emailVerified,i.State.id=e.data.id,i.State.profileImgColor=e.data.profileImgColor,d&&i.State.emailVerified?d.style.display="flex":d&&(c.style.display="flex"),(0,a.hideLoginButtons)()}}catch(t){}})),s&&s.addEventListener("click",(t=>{t.preventDefault(),o(void 0,void 0,void 0,(function*(){yield fetch("https://elliotapiserver.co.uk/Auth/logout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:l})}),localStorage.setItem("token",""),d&&(d.style.display="none"),i.State.emailAddress=void 0,i.State.fullName=void 0,i.State.id=void 0,i.State.emailVerified=void 0,i.State.profileImgColor=void 0,(0,a.showLoginButtons)()}))}))},493:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.initEditComments=void 0;const i=n(478),a="https://elliotapiserver.co.uk/Comments";let l=localStorage.getItem("token");function d(){let t=document.querySelectorAll(".editLinkButton");t.length>0&&t.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),c(t)}))}))}e.initEditComments=d;const c=t=>{var e;if(null!==t.closest(".comment")){let n=t.closest("div.comment-main").querySelector(".editComment");if(n&&"none"===n.style.display){t.innerText="Cancel Editing",n.style.display="block";const o=null===(e=t.closest("div.comment-main"))||void 0===e?void 0:e.querySelector("p");let i=o.innerText;i&&(t.closest("div.comment-header").insertAdjacentHTML("afterend",'\n                    <textarea \n                        name="commentTextarea" \n                        class="commentTextarea" \n                        minlength="3"\n                        maxlength="120"\n                        requiredminlength="3"\n\t\t\t\t\t\tmaxlength="120"\n\t\t\t\t\t\trequired\n                    ></textarea>\n                '),o.style.display="none"),t.closest("div.comment-main").querySelector("textarea").value=i;const a=t.closest("div.comment-main").querySelector(".deleteLinkButton"),l=t.closest("div.comment-main").querySelector(".publish");let d=t.closest(".comment"),c=null==d?void 0:d.dataset.commentid,r=document.getElementById("commentStreamContainer"),m=null==r?void 0:r.dataset.stream;a&&l&&void 0!==c&&void 0!==m&&s(a,l,c,m,t)}else{const e=t.closest("div.comment-main").querySelector("p");t.innerText="Edit Comment",e.style.display="block",t.closest("div.comment-main").querySelector("textarea").remove(),n.style.display="none"}}};d();const s=(t,e,n,i,a)=>{t.addEventListener("click",(t=>o(void 0,void 0,void 0,(function*(){t.preventDefault(),yield r(n,i)})))),e.addEventListener("click",(t=>o(void 0,void 0,void 0,(function*(){t.preventDefault(),yield m(n,a)}))))},r=(t,e)=>o(void 0,void 0,void 0,(function*(){let n={token:l,commentStreamId:e};204===(yield fetch(a+"?"+new URLSearchParams({id:t}).toString(),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).status&&(console.log("should display comments"),(0,i.displayComments)())})),m=(t,e)=>o(void 0,void 0,void 0,(function*(){let n={token:l,id:t,text:e.closest("div.comment-main").querySelector("textarea").value};201===(yield fetch(a+"?"+new URLSearchParams({id:t}).toString(),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).status&&(0,i.displayComments)()}))},383:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.handlePostComment=void 0;const i=n(478),a=document.getElementById("publishCommentButton"),l=document.getElementById("commentStreamContainer"),d=document.getElementById("commentTextarea");let c=localStorage.getItem("token");e.handlePostComment=function(){null==a||a.addEventListener("click",(t=>o(this,void 0,void 0,(function*(){if(t.preventDefault(),""===d.value)return;let e={token:c,text:d.value.toString(),stream:null==l?void 0:l.dataset.stream};try{201===(yield fetch("https://elliotapiserver.co.uk/Comments?"+new URLSearchParams({stream:"633d4dbc76066edc99546269"}).toString(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).status&&((0,i.displayComments)(),d.value="")}catch(t){}}))))}},27:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.showLoginButtons=e.hideLoginButtons=void 0;const i=n(367);e.hideLoginButtons=function(){return o(this,void 0,void 0,(function*(){const t=document.querySelector(".add-comment-container-notAllowed");i.State.emailVerified?null==t||t.classList.add("allowed"):(document.getElementById("logInButton").style.display="none",document.getElementById("signUpButton").style.display="none")}))},e.showLoginButtons=function(){return o(this,void 0,void 0,(function*(){const t=document.querySelector(".add-comment-container-notAllowed"),e=document.getElementById("verifyEmailButton");null==t||t.classList.remove("allowed"),document.getElementById("logInButton").style.display="inline-block",document.getElementById("signUpButton").style.display="inline-block",e.style.display="none"}))}},607:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const i=n(478),a=n(383),l=n(639);!function(){o(this,void 0,void 0,(function*(){(0,l.checkLogin)(),yield(0,i.displayComments)(),(0,a.handlePostComment)()}))}()},367:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.State=void 0;e.State={fullName:void 0,emailAddress:void 0,emailVerified:void 0,id:void 0,profileImgColor:void 0}},706:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,a){function l(t){try{c(o.next(t))}catch(t){a(t)}}function d(t){try{c(o.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(l,d)}c((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.initVoting=void 0;const i=n(478),a="https://elliotapiserver.co.uk/Comments/vote";let l=localStorage.getItem("token");e.initVoting=function(){const t=document.querySelectorAll(".upvoteComment"),e=document.querySelectorAll(".downvoteComment");t.length>0&&t.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),d(t)}))})),e.length>0&&e.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),c(t)}))}))};const d=t=>o(void 0,void 0,void 0,(function*(){if(null!==t.closest(".comment")){let e=t.closest(".comment").dataset.commentid,n={token:l,id:e,votetype:"up"};try{200===(yield fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).status&&(0,i.displayComments)()}catch(t){}}})),c=t=>o(void 0,void 0,void 0,(function*(){if(null!==t.closest(".comment")){let e=t.closest(".comment").dataset.commentid,n={token:l,id:e,votetype:"down"};try{200===(yield fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).status&&(0,i.displayComments)()}catch(t){}}}))}},e={};!function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}(607)})();