(()=>{"use strict";var __webpack_modules__={5231:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.RequestEmailVerification = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction RequestEmailVerification(params) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/requestverification`, {\r\n                method: "POST",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                },\r\n                body: JSON.stringify(params),\r\n            });\r\n            if (response.status === 403) {\r\n                return "Could not verify user";\r\n            }\r\n            else if (response.status === 301) {\r\n                return "User is already verified";\r\n            }\r\n            else if (response.status === 200) {\r\n                return "Verification email sent";\r\n            }\r\n            else {\r\n                return "Unknown error";\r\n            }\r\n        }\r\n        catch (error) {\r\n            console.log(`Error requesting user verification: ${error}`);\r\n            return "An error occurred while requesting user verification";\r\n        }\r\n    });\r\n}\r\nexports.RequestEmailVerification = RequestEmailVerification;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIzMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFNekQsU0FBc0Isd0JBQXdCLENBQUMsTUFBZ0M7O1FBQzdFLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLHFCQUFTLENBQUMsWUFBWSxnQ0FBZ0MsRUFBRTtnQkFDdEYsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUM3QixDQUFDLENBQUM7WUFFSCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMzQixPQUFPLHVCQUF1QixDQUFDO2FBQ2hDO2lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ2xDLE9BQU8sMEJBQTBCLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDbEMsT0FBTyx5QkFBeUIsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxPQUFPLGVBQWUsQ0FBQzthQUN4QjtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQzVELE9BQU8sc0RBQXNELENBQUM7U0FDL0Q7SUFDSCxDQUFDO0NBQUE7QUF2QkQsNERBdUJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvQXV0aGVudGljYXRpb24vQ29udHJvbGxlcnMvVmVyaWZpY2F0aW9uL1JlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbi50cz8xMDg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi8uLi9Db25zdGFudHMvQ29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlcXVlc3RWZXJpZmljYXRpb25JbnB1dCB7XHJcbiAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbihwYXJhbXM6IFJlcXVlc3RWZXJpZmljYXRpb25JbnB1dCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Q29uc3RhbnRzLkFQSV9CQVNFX1VSTH0vYXBpL3VzZXJzL3JlcXVlc3R2ZXJpZmljYXRpb25gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyYW1zKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICByZXR1cm4gXCJDb3VsZCBub3QgdmVyaWZ5IHVzZXJcIjtcclxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAzMDEpIHtcclxuICAgICAgcmV0dXJuIFwiVXNlciBpcyBhbHJlYWR5IHZlcmlmaWVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBcIlZlcmlmaWNhdGlvbiBlbWFpbCBzZW50XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJVbmtub3duIGVycm9yXCI7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciByZXF1ZXN0aW5nIHVzZXIgdmVyaWZpY2F0aW9uOiAke2Vycm9yfWApO1xyXG4gICAgcmV0dXJuIFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVxdWVzdGluZyB1c2VyIHZlcmlmaWNhdGlvblwiO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5231\n')},4942:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst RequestEmailVerification_1 = __webpack_require__(5231);\r\nfunction InitRequestEmailVerification() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const urlParams = new URLSearchParams(window.location.search);\r\n        const emailParam = urlParams.get("email");\r\n        const emailSection = document.getElementById("email-section");\r\n        const emailForm = document.getElementById("email-form");\r\n        const emailInput = document.getElementById("email-input");\r\n        const emailSentMessage = document.getElementById("email-sent-message");\r\n        const checkEmailSection = document.getElementById("check-email-section");\r\n        if (emailParam === null) {\r\n            checkEmailSection.style.display = "none";\r\n            emailForm.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {\r\n                e.preventDefault();\r\n                const email = emailInput.value;\r\n                const hasRequested = yield (0, RequestEmailVerification_1.RequestEmailVerification)({ email });\r\n                if (hasRequested) {\r\n                    emailSection.style.display = "none";\r\n                    checkEmailSection.style.display = "block";\r\n                    emailSentMessage.style.display = "block";\r\n                }\r\n            }));\r\n        }\r\n        else {\r\n            emailSection.style.display = "none";\r\n            checkEmailSection.style.display = "block";\r\n            const hasRequested = yield (0, RequestEmailVerification_1.RequestEmailVerification)({ email: emailParam });\r\n            if (hasRequested) {\r\n                emailSentMessage.style.display = "block";\r\n            }\r\n        }\r\n    });\r\n}\r\nInitRequestEmailVerification();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk0Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUFtRztBQUVuRyxTQUFlLDRCQUE0Qjs7UUFDekMsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztRQUM5RSxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RSxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV6RSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdkIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDekMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBRS9CLE1BQU0sWUFBWSxHQUFHLE1BQU0sdURBQXdCLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNwQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztvQkFDMUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7aUJBQzFDO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3BDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRTFDLE1BQU0sWUFBWSxHQUFHLE1BQU0sdURBQXdCLEVBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUMzRSxJQUFJLFlBQVksRUFBRTtnQkFDaEIsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDMUM7U0FDRjtJQUNILENBQUM7Q0FBQTtBQUNELDRCQUE0QixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9WaWV3cy9SZXF1ZXN0IEVtYWlsIFZlcmlmaWNhdGlvbi9yZXF1ZXN0RW1haWxWZXJpZmljYXRpb24udHM/MDljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXF1ZXN0RW1haWxWZXJpZmljYXRpb24gfSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlcnMvVmVyaWZpY2F0aW9uL1JlcXVlc3RFbWFpbFZlcmlmaWNhdGlvblwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gSW5pdFJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbigpIHtcclxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnN0IGVtYWlsUGFyYW0gPSB1cmxQYXJhbXMuZ2V0KFwiZW1haWxcIik7XHJcblxyXG4gIGNvbnN0IGVtYWlsU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWwtc2VjdGlvblwiKTtcclxuICBjb25zdCBlbWFpbEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsLWZvcm1cIik7XHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWwtaW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdCBlbWFpbFNlbnRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1zZW50LW1lc3NhZ2VcIik7XHJcbiAgY29uc3QgY2hlY2tFbWFpbFNlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoZWNrLWVtYWlsLXNlY3Rpb25cIik7XHJcblxyXG4gIGlmIChlbWFpbFBhcmFtID09PSBudWxsKSB7XHJcbiAgICBjaGVja0VtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBlbWFpbEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGVtYWlsID0gZW1haWxJbnB1dC52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGhhc1JlcXVlc3RlZCA9IGF3YWl0IFJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbih7IGVtYWlsIH0pO1xyXG4gICAgICBpZiAoaGFzUmVxdWVzdGVkKSB7XHJcbiAgICAgICAgZW1haWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBjaGVja0VtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGVtYWlsU2VudE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjaGVja0VtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGhhc1JlcXVlc3RlZCA9IGF3YWl0IFJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbih7IGVtYWlsOiBlbWFpbFBhcmFtIH0pO1xyXG4gICAgaWYgKGhhc1JlcXVlc3RlZCkge1xyXG4gICAgICBlbWFpbFNlbnRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkluaXRSZXF1ZXN0RW1haWxWZXJpZmljYXRpb24oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4942\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\nConstants.API_BASE_URL = "http://localhost:5000";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFNBQVM7O0FBQXRCLDhCQUdDO0FBRlEsc0JBQVksR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0NvbnN0YW50cy9Db25zdGFudHMudHM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuICBzdGF0aWMgQVBJX0JBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIjtcclxuICAvLyBzdGF0aWMgQVBJX0JBU0VfVVJMID0gXCJodHRwczovL2VsbGlvdGFwaXNlcnZlci5jb21cIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(e){var l=__webpack_module_cache__[e];if(void 0!==l)return l.exports;var c=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(c.exports,c,c.exports,__webpack_require__),c.exports}var __webpack_exports__=__webpack_require__(4942)})();