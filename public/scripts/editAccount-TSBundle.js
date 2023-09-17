(()=>{"use strict";var __webpack_modules__={5707:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.updateUser = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction updateUser(user) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const token = localStorage.getItem("token");\r\n        try {\r\n            const res = yield fetch(Constants_1.Constants.API_BASE_URL + "/api/users/me", {\r\n                method: "PUT",\r\n                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },\r\n                body: JSON.stringify(user),\r\n            });\r\n            if (res.status === 201) {\r\n                const user = yield res.json();\r\n                return user;\r\n            }\r\n            else {\r\n                throw new Error("Cannot update name, please try again later");\r\n            }\r\n        }\r\n        catch (error) {\r\n            return null;\r\n        }\r\n    });\r\n}\r\nexports.updateUser = updateUser;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTcwNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBeUQ7QUFFekQsU0FBc0IsVUFBVSxDQUFDLElBQXdCOztRQUN2RCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxxQkFBUyxDQUFDLFlBQVksR0FBRyxlQUFlLEVBQUU7Z0JBQ2hFLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRTtnQkFDakYsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUVILElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUFBO0FBbkJELGdDQW1CQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL0NvbnRyb2xsZXJzL0FjY291bnQvdXBkYXRlVXNlci50cz8xMDQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvVXNlck1vZGVsXCI7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuLi8uLi8uLi9Db25zdGFudHMvQ29uc3RhbnRzXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VyOiBQYXJ0aWFsPFVzZXJNb2RlbD4pOiBQcm9taXNlPFBhcnRpYWw8VXNlck1vZGVsPj4ge1xyXG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKENvbnN0YW50cy5BUElfQkFTRV9VUkwgKyBcIi9hcGkvdXNlcnMvbWVcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgdXBkYXRlIG5hbWUsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXJcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5707\n')},8875:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.getCurrentUser = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction getCurrentUser() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const token = localStorage.getItem("token");\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/me`, {\r\n                method: "GET",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                    Authorization: `Bearer ${token}`,\r\n                },\r\n            });\r\n            if (response.status === 401) {\r\n                return null;\r\n            }\r\n            if (response.status === 404) {\r\n                return null;\r\n            }\r\n            try {\r\n                const data = yield response.json();\r\n                return data;\r\n            }\r\n            catch (error) {\r\n                throw new Error("Error parsing response");\r\n            }\r\n        }\r\n        catch (error) {\r\n            return null;\r\n        }\r\n    });\r\n}\r\nexports.getCurrentUser = getCurrentUser;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg3NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFFekQsU0FBc0IsY0FBYzs7UUFDbEMsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxxQkFBUyxDQUFDLFlBQVksZUFBZSxFQUFFO2dCQUNyRSxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbEMsYUFBYSxFQUFFLFVBQVUsS0FBSyxFQUFFO2lCQUNqQzthQUNGLENBQUMsQ0FBQztZQUVILElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSTtnQkFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMzQztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztDQUFBO0FBNUJELHdDQTRCQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL0NvbnRyb2xsZXJzL01lL0dldEN1cnJlbnRVc2VyLnRzP2JlOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL0NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50VXNlcigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtDb25zdGFudHMuQVBJX0JBU0VfVVJMfS9hcGkvdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHBhcnNpbmcgcmVzcG9uc2VcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8875\n')},7732:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst updateUser_1 = __webpack_require__(5707);\r\nconst GetCurrentUser_1 = __webpack_require__(8875);\r\nconst addDataToInputs_1 = __webpack_require__(2630);\r\nfunction initEditUserDetails() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const user = yield (0, GetCurrentUser_1.getCurrentUser)();\r\n        if (user) {\r\n            (0, addDataToInputs_1.addDataToInputs)(user.firstName, user.lastName, user.displayName, user.email);\r\n        }\r\n        const saveChangesButton = document.getElementById("SaveChanges");\r\n        if (saveChangesButton) {\r\n            saveChangesButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {\r\n                const firstName = document.getElementById("firstname");\r\n                const lastName = document.getElementById("lastname");\r\n                const displayName = document.getElementById("displayname");\r\n                const email = document.getElementById("email");\r\n                const user = {\r\n                    firstName: firstName.value,\r\n                    lastName: lastName.value,\r\n                    displayName: displayName.value,\r\n                    email: email.value,\r\n                };\r\n                if (user) {\r\n                    const updated = yield (0, updateUser_1.updateUser)(user);\r\n                    if (updated) {\r\n                        window.location.href = "/account.html?status=true#profile";\r\n                    }\r\n                    else {\r\n                        window.location.href = "/account.html?status=false#profile";\r\n                    }\r\n                }\r\n            }));\r\n        }\r\n    });\r\n}\r\ninitEditUserDetails();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzczMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUFxRTtBQUNyRSxtREFBd0U7QUFDeEUsb0RBQXFEO0FBRXJELFNBQWUsbUJBQW1COztRQUNoQyxNQUFNLElBQUksR0FBRyxNQUFNLG1DQUFjLEdBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksRUFBRTtZQUNSLHFDQUFlLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlFO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2pFLElBQUksaUJBQWlCLEVBQUU7WUFDckIsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRTtnQkFDckQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXFCLENBQUM7Z0JBQzNFLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFxQixDQUFDO2dCQUN6RSxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBcUIsQ0FBQztnQkFDL0UsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7Z0JBRW5FLE1BQU0sSUFBSSxHQUFHO29CQUNYLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSztvQkFDMUIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxLQUFLO29CQUN4QixXQUFXLEVBQUUsV0FBVyxDQUFDLEtBQUs7b0JBQzlCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztpQkFDbkIsQ0FBQztnQkFFRixJQUFJLElBQUksRUFBRTtvQkFDUixNQUFNLE9BQU8sR0FBRyxNQUFNLDJCQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXZDLElBQUksT0FBTyxFQUFFO3dCQUNYLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLG1DQUFtQyxDQUFDO3FCQUM1RDt5QkFBTTt3QkFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxvQ0FBb0MsQ0FBQztxQkFDN0Q7aUJBQ0Y7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUFBO0FBQ0QsbUJBQW1CLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL1ZpZXdzL0FjY291bnQvRWRpdCBhY2NvdW50IGRldGFpbHMvZWRpdEFjY291bnQudHM/YWJlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1cGRhdGVVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL0NvbnRyb2xsZXJzL0FjY291bnQvdXBkYXRlVXNlclwiO1xyXG5pbXBvcnQgeyBnZXRDdXJyZW50VXNlciB9IGZyb20gXCIuLi8uLi8uLi9Db250cm9sbGVycy9NZS9HZXRDdXJyZW50VXNlclwiO1xyXG5pbXBvcnQgeyBhZGREYXRhVG9JbnB1dHMgfSBmcm9tIFwiLi4vYWRkRGF0YVRvSW5wdXRzXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0RWRpdFVzZXJEZXRhaWxzKCkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBhZGREYXRhVG9JbnB1dHModXNlci5maXJzdE5hbWUsIHVzZXIubGFzdE5hbWUsIHVzZXIuZGlzcGxheU5hbWUsIHVzZXIuZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZUNoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNhdmVDaGFuZ2VzXCIpO1xyXG4gIGlmIChzYXZlQ2hhbmdlc0J1dHRvbikge1xyXG4gICAgc2F2ZUNoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdG5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc3RuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5bmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUudmFsdWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLnZhbHVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1cGRhdGVVc2VyKHVzZXIpO1xyXG5cclxuICAgICAgICBpZiAodXBkYXRlZCkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hY2NvdW50Lmh0bWw/c3RhdHVzPXRydWUjcHJvZmlsZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2FjY291bnQuaHRtbD9zdGF0dXM9ZmFsc2UjcHJvZmlsZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmluaXRFZGl0VXNlckRldGFpbHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7732\n')},2630:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.addDataToInputs = void 0;\r\nconst addDataToInputs = (firstName, lastName, displayName, emailAddress) => {\r\n    const firstNameInput = document.getElementById("firstname");\r\n    const lastNameInput = document.getElementById("lastname");\r\n    const emailInput = document.getElementById("email");\r\n    const displayNameInput = document.getElementById("displayname");\r\n    if (firstNameInput)\r\n        firstNameInput.value = firstName;\r\n    if (lastNameInput)\r\n        lastNameInput.value = lastName;\r\n    if (emailInput)\r\n        emailInput.value = emailAddress;\r\n    if (displayNameInput)\r\n        displayNameInput.value = displayName;\r\n};\r\nexports.addDataToInputs = addDataToInputs;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYzMC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFO0lBQ2hGLE1BQU0sY0FBYyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztJQUNsRyxNQUFNLGFBQWEsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7SUFDaEcsTUFBTSxVQUFVLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBQzFGLE1BQU0sZ0JBQWdCLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBRXRHLElBQUksY0FBYztRQUFFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3JELElBQUksYUFBYTtRQUFFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ2xELElBQUksVUFBVTtRQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQ2hELElBQUksZ0JBQWdCO1FBQUUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFWVyx1QkFBZSxtQkFVMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9WaWV3cy9BY2NvdW50L2FkZERhdGFUb0lucHV0cy50cz81YWNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGREYXRhVG9JbnB1dHMgPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZGlzcGxheU5hbWUsIGVtYWlsQWRkcmVzcykgPT4ge1xyXG4gIGNvbnN0IGZpcnN0TmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdG5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdCBsYXN0TmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXN0bmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3QgZGlzcGxheU5hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheW5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgaWYgKGZpcnN0TmFtZUlucHV0KSBmaXJzdE5hbWVJbnB1dC52YWx1ZSA9IGZpcnN0TmFtZTtcclxuICBpZiAobGFzdE5hbWVJbnB1dCkgbGFzdE5hbWVJbnB1dC52YWx1ZSA9IGxhc3ROYW1lO1xyXG4gIGlmIChlbWFpbElucHV0KSBlbWFpbElucHV0LnZhbHVlID0gZW1haWxBZGRyZXNzO1xyXG4gIGlmIChkaXNwbGF5TmFtZUlucHV0KSBkaXNwbGF5TmFtZUlucHV0LnZhbHVlID0gZGlzcGxheU5hbWU7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2630\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nvar _a, _b;\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nconst env = ((_b = (_a = document.getElementById("jsEnvironment")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "development";\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\nConstants.API_BASE_URL = env === "production"\r\n    ? "https://elliotapiserver.com"\r\n    : env === "test"\r\n        ? "https://test.elliotapiserver.com"\r\n        : "http://localhost:5001";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxHQUFHLEdBQUcscUJBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxFQUFFLEtBQUksYUFBYSxDQUFDO0FBRTNGLE1BQWEsU0FBUzs7QUFBdEIsOEJBT0M7QUFOUSxzQkFBWSxHQUNqQixHQUFHLEtBQUssWUFBWTtJQUNsQixDQUFDLENBQUMsNkJBQTZCO0lBQy9CLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTTtRQUNoQixDQUFDLENBQUMsa0NBQWtDO1FBQ3BDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0NvbnN0YW50cy9Db25zdGFudHMudHM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRW52aXJvbm1lbnRcIik/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJkZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9XHJcbiAgICBlbnYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gXCJodHRwczovL2VsbGlvdGFwaXNlcnZlci5jb21cIlxyXG4gICAgICA6IGVudiA9PT0gXCJ0ZXN0XCJcclxuICAgICAgPyBcImh0dHBzOi8vdGVzdC5lbGxpb3RhcGlzZXJ2ZXIuY29tXCJcclxuICAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMVwiO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}var __webpack_exports__=__webpack_require__(7732)})();