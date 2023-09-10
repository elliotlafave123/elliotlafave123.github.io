(()=>{"use strict";var __webpack_modules__={5231:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.RequestEmailVerification = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction RequestEmailVerification(params) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/requestverification`, {\r\n                method: "POST",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                },\r\n                body: JSON.stringify(params),\r\n            });\r\n            console.log(response);\r\n            if (response.status === 403) {\r\n                return "Could not verify user";\r\n            }\r\n            else if (response.status === 301) {\r\n                return "User is already verified";\r\n            }\r\n            else if (response.status === 200) {\r\n                return "Verification email sent";\r\n            }\r\n            else {\r\n                return "Unknown error";\r\n            }\r\n        }\r\n        catch (error) {\r\n            console.log(`Error requesting user verification: ${error}`);\r\n            return "An error occurred while requesting user verification";\r\n        }\r\n    });\r\n}\r\nexports.RequestEmailVerification = RequestEmailVerification;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTIzMS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFNekQsU0FBc0Isd0JBQXdCLENBQUMsTUFBZ0M7O1FBQzdFLElBQUk7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLHFCQUFTLENBQUMsWUFBWSxnQ0FBZ0MsRUFBRTtnQkFDdEYsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUM3QixDQUFDLENBQUM7WUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLE9BQU8sdUJBQXVCLENBQUM7YUFDaEM7aUJBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDbEMsT0FBTywwQkFBMEIsQ0FBQzthQUNuQztpQkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUNsQyxPQUFPLHlCQUF5QixDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLE9BQU8sZUFBZSxDQUFDO2FBQ3hCO1NBQ0Y7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDNUQsT0FBTyxzREFBc0QsQ0FBQztTQUMvRDtJQUNILENBQUM7Q0FBQTtBQXpCRCw0REF5QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9Db250cm9sbGVycy9WZXJpZmljYXRpb24vUmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uLnRzPzEwODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL0NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdFZlcmlmaWNhdGlvbklucHV0IHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uKHBhcmFtczogUmVxdWVzdFZlcmlmaWNhdGlvbklucHV0KTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtDb25zdGFudHMuQVBJX0JBU0VfVVJMfS9hcGkvdXNlcnMvcmVxdWVzdHZlcmlmaWNhdGlvbmAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICByZXR1cm4gXCJDb3VsZCBub3QgdmVyaWZ5IHVzZXJcIjtcclxuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAzMDEpIHtcclxuICAgICAgcmV0dXJuIFwiVXNlciBpcyBhbHJlYWR5IHZlcmlmaWVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBcIlZlcmlmaWNhdGlvbiBlbWFpbCBzZW50XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCJVbmtub3duIGVycm9yXCI7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciByZXF1ZXN0aW5nIHVzZXIgdmVyaWZpY2F0aW9uOiAke2Vycm9yfWApO1xyXG4gICAgcmV0dXJuIFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVxdWVzdGluZyB1c2VyIHZlcmlmaWNhdGlvblwiO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5231\n')},4942:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst RequestEmailVerification_1 = __webpack_require__(5231);\r\nfunction InitRequestEmailVerification() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const urlParams = new URLSearchParams(window.location.search);\r\n        const emailParam = urlParams.get("email");\r\n        const emailSection = document.getElementById("email-section");\r\n        const emailForm = document.getElementById("email-form");\r\n        const emailInput = document.getElementById("email-input");\r\n        const emailSentMessage = document.getElementById("email-sent-message");\r\n        const checkEmailSection = document.getElementById("check-email-section");\r\n        if (emailParam === null) {\r\n            checkEmailSection.style.display = "none";\r\n            emailForm.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {\r\n                e.preventDefault();\r\n                const email = emailInput.value;\r\n                const hasRequested = yield (0, RequestEmailVerification_1.RequestEmailVerification)({ email });\r\n                if (hasRequested) {\r\n                    console.log("Email verification requested");\r\n                    emailSection.style.display = "none";\r\n                    checkEmailSection.style.display = "block";\r\n                    emailSentMessage.style.display = "block";\r\n                }\r\n            }));\r\n        }\r\n        else {\r\n            emailSection.style.display = "none";\r\n            checkEmailSection.style.display = "block";\r\n            const hasRequested = yield (0, RequestEmailVerification_1.RequestEmailVerification)({ email: emailParam });\r\n            if (hasRequested) {\r\n                emailSentMessage.style.display = "block";\r\n            }\r\n        }\r\n    });\r\n}\r\nInitRequestEmailVerification();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDk0Mi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUFtRztBQUVuRyxTQUFlLDRCQUE0Qjs7UUFDekMsTUFBTSxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztRQUM5RSxNQUFNLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2RSxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUV6RSxJQUFJLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDdkIsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDekMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFPLENBQUMsRUFBRSxFQUFFO2dCQUMvQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7Z0JBRS9CLE1BQU0sWUFBWSxHQUFHLE1BQU0sdURBQXdCLEVBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLFlBQVksRUFBRTtvQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO29CQUM1QyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ3BDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO29CQUMxQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztpQkFDMUM7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTCxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7WUFDcEMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFFMUMsTUFBTSxZQUFZLEdBQUcsTUFBTSx1REFBd0IsRUFBQyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzNFLElBQUksWUFBWSxFQUFFO2dCQUNoQixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUMxQztTQUNGO0lBQ0gsQ0FBQztDQUFBO0FBQ0QsNEJBQTRCLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL1ZpZXdzL1JlcXVlc3QgRW1haWwgVmVyaWZpY2F0aW9uL3JlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbi50cz8wOWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbiB9IGZyb20gXCIuLi8uLi9Db250cm9sbGVycy9WZXJpZmljYXRpb24vUmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0UmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uKCkge1xyXG4gIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgY29uc3QgZW1haWxQYXJhbSA9IHVybFBhcmFtcy5nZXQoXCJlbWFpbFwiKTtcclxuXHJcbiAgY29uc3QgZW1haWxTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1zZWN0aW9uXCIpO1xyXG4gIGNvbnN0IGVtYWlsRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWwtZm9ybVwiKTtcclxuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGNvbnN0IGVtYWlsU2VudE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsLXNlbnQtbWVzc2FnZVwiKTtcclxuICBjb25zdCBjaGVja0VtYWlsU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2stZW1haWwtc2VjdGlvblwiKTtcclxuXHJcbiAgaWYgKGVtYWlsUGFyYW0gPT09IG51bGwpIHtcclxuICAgIGNoZWNrRW1haWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGVtYWlsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgaGFzUmVxdWVzdGVkID0gYXdhaXQgUmVxdWVzdEVtYWlsVmVyaWZpY2F0aW9uKHsgZW1haWwgfSk7XHJcbiAgICAgIGlmIChoYXNSZXF1ZXN0ZWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVtYWlsIHZlcmlmaWNhdGlvbiByZXF1ZXN0ZWRcIik7XHJcbiAgICAgICAgZW1haWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBjaGVja0VtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIGVtYWlsU2VudE1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBjaGVja0VtYWlsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGhhc1JlcXVlc3RlZCA9IGF3YWl0IFJlcXVlc3RFbWFpbFZlcmlmaWNhdGlvbih7IGVtYWlsOiBlbWFpbFBhcmFtIH0pO1xyXG4gICAgaWYgKGhhc1JlcXVlc3RlZCkge1xyXG4gICAgICBlbWFpbFNlbnRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkluaXRSZXF1ZXN0RW1haWxWZXJpZmljYXRpb24oKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4942\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\nConstants.API_BASE_URL = "http://localhost:5000";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFNBQVM7O0FBQXRCLDhCQUdDO0FBRlEsc0JBQVksR0FBRyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0NvbnN0YW50cy9Db25zdGFudHMudHM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RhbnRzIHtcclxuICBzdGF0aWMgQVBJX0JBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIjtcclxuICAvLyBzdGF0aWMgQVBJX0JBU0VfVVJMID0gXCJodHRwczovL2VsbGlvdGFwaXNlcnZlci5jb21cIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(e){var c=__webpack_module_cache__[e];if(void 0!==c)return c.exports;var l=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(l.exports,l,l.exports,__webpack_require__),l.exports}var __webpack_exports__=__webpack_require__(4942)})();