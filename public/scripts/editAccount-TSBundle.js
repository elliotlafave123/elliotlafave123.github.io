(()=>{"use strict";var __webpack_modules__={5707:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.updateUser = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction updateUser(user) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const token = localStorage.getItem("token");\r\n        try {\r\n            const res = yield fetch(Constants_1.Constants.API_BASE_URL + "/api/users/me", {\r\n                method: "PUT",\r\n                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },\r\n                body: JSON.stringify(user),\r\n            });\r\n            if (res.status === 201) {\r\n                const user = yield res.json();\r\n                return user;\r\n            }\r\n            else {\r\n                throw new Error("Cannot update name, please try again later");\r\n            }\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n            return null;\r\n        }\r\n    });\r\n}\r\nexports.updateUser = updateUser;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTcwNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBeUQ7QUFFekQsU0FBc0IsVUFBVSxDQUFDLElBQXdCOztRQUN2RCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVDLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBRyxNQUFNLEtBQUssQ0FBQyxxQkFBUyxDQUFDLFlBQVksR0FBRyxlQUFlLEVBQUU7Z0JBQ2hFLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUUsRUFBRTtnQkFDakYsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQzNCLENBQUMsQ0FBQztZQUVILElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUM5QixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQUE7QUFwQkQsZ0NBb0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvQXV0aGVudGljYXRpb24vQ29udHJvbGxlcnMvQWNjb3VudC91cGRhdGVVc2VyLnRzPzEwNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4uLy4uL01vZGVscy9Vc2VyTW9kZWxcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL0NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXI6IFBhcnRpYWw8VXNlck1vZGVsPik6IFByb21pc2U8UGFydGlhbDxVc2VyTW9kZWw+PiB7XHJcbiAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goQ29uc3RhbnRzLkFQSV9CQVNFX1VSTCArIFwiL2FwaS91c2Vycy9tZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiwgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICByZXR1cm4gdXNlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCB1cGRhdGUgbmFtZSwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlclwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5707\n')},8875:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.getCurrentUser = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction getCurrentUser() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const token = localStorage.getItem("token");\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/me`, {\r\n                method: "GET",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                    Authorization: `Bearer ${token}`,\r\n                },\r\n            });\r\n            if (response.status === 401) {\r\n                return null;\r\n            }\r\n            if (response.status === 404) {\r\n                return null;\r\n            }\r\n            try {\r\n                const data = yield response.json();\r\n                return data;\r\n            }\r\n            catch (error) {\r\n                throw new Error("Error parsing response");\r\n            }\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n            return null;\r\n        }\r\n    });\r\n}\r\nexports.getCurrentUser = getCurrentUser;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODg3NS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFFekQsU0FBc0IsY0FBYzs7UUFDbEMsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxxQkFBUyxDQUFDLFlBQVksZUFBZSxFQUFFO2dCQUNyRSxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtvQkFDbEMsYUFBYSxFQUFFLFVBQVUsS0FBSyxFQUFFO2lCQUNqQzthQUNGLENBQUMsQ0FBQztZQUVILElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMzQixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSTtnQkFDRixNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUMzQztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQUE7QUE3QkQsd0NBNkJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvQXV0aGVudGljYXRpb24vQ29udHJvbGxlcnMvTWUvR2V0Q3VycmVudFVzZXIudHM/YmU5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vLi4vQ29uc3RhbnRzL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NvbnN0YW50cy5BUElfQkFTRV9VUkx9L2FwaS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyByZXNwb25zZVwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8875\n')},7732:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst updateUser_1 = __webpack_require__(5707);\r\nconst GetCurrentUser_1 = __webpack_require__(8875);\r\nconst addDataToInputs_1 = __webpack_require__(2630);\r\nconst showAccountStatusMessage_1 = __webpack_require__(6062);\r\nfunction initEditUserDetails() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const user = yield (0, GetCurrentUser_1.getCurrentUser)();\r\n        if (user) {\r\n            (0, addDataToInputs_1.addDataToInputs)(user.firstName, user.lastName, user.displayName, user.email);\r\n        }\r\n        const saveChangesButton = document.getElementById("SaveChanges");\r\n        if (saveChangesButton) {\r\n            saveChangesButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {\r\n                const firstName = document.getElementById("firstname");\r\n                const lastName = document.getElementById("lastname");\r\n                const displayName = document.getElementById("displayname");\r\n                const email = document.getElementById("email");\r\n                const user = {\r\n                    firstName: firstName.value,\r\n                    lastName: lastName.value,\r\n                    displayName: displayName.value,\r\n                    email: email.value,\r\n                };\r\n                if (user) {\r\n                    const updated = yield (0, updateUser_1.updateUser)(user);\r\n                    console.log(updated);\r\n                    if (updated) {\r\n                        window.location.href = "/account.html#profile";\r\n                    }\r\n                    else {\r\n                        (0, showAccountStatusMessage_1.showAccountStatusMessage)(false);\r\n                    }\r\n                }\r\n            }));\r\n        }\r\n    });\r\n}\r\ninitEditUserDetails();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNzczMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUFxRTtBQUNyRSxtREFBd0U7QUFDeEUsb0RBQXFEO0FBQ3JELDZEQUF1RTtBQUV2RSxTQUFlLG1CQUFtQjs7UUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQ0FBYyxHQUFFLENBQUM7UUFDcEMsSUFBSSxJQUFJLEVBQUU7WUFDUixxQ0FBZSxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUVELE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNqRSxJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBQ3JELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFxQixDQUFDO2dCQUMzRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBcUIsQ0FBQztnQkFDekUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCLENBQUM7Z0JBQy9FLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO2dCQUVuRSxNQUFNLElBQUksR0FBRztvQkFDWCxTQUFTLEVBQUUsU0FBUyxDQUFDLEtBQUs7b0JBQzFCLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSztvQkFDeEIsV0FBVyxFQUFFLFdBQVcsQ0FBQyxLQUFLO29CQUM5QixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7aUJBQ25CLENBQUM7Z0JBRUYsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsTUFBTSxPQUFPLEdBQUcsTUFBTSwyQkFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO29CQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVyQixJQUFJLE9BQU8sRUFBRTt3QkFDWCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyx1QkFBdUIsQ0FBQztxQkFDaEQ7eUJBQU07d0JBQ0wsdURBQXdCLEVBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ2pDO2lCQUNGO1lBQ0gsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FBQTtBQUNELG1CQUFtQixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9WaWV3cy9BY2NvdW50L0VkaXQgYWNjb3VudCBkZXRhaWxzL2VkaXRBY2NvdW50LnRzP2FiZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXBkYXRlVXNlciB9IGZyb20gXCIuLi8uLi8uLi9Db250cm9sbGVycy9BY2NvdW50L3VwZGF0ZVVzZXJcIjtcclxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tIFwiLi4vLi4vLi4vQ29udHJvbGxlcnMvTWUvR2V0Q3VycmVudFVzZXJcIjtcclxuaW1wb3J0IHsgYWRkRGF0YVRvSW5wdXRzIH0gZnJvbSBcIi4uL2FkZERhdGFUb0lucHV0c1wiO1xyXG5pbXBvcnQgeyBzaG93QWNjb3VudFN0YXR1c01lc3NhZ2UgfSBmcm9tIFwiLi4vc2hvd0FjY291bnRTdGF0dXNNZXNzYWdlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0RWRpdFVzZXJEZXRhaWxzKCkge1xyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRDdXJyZW50VXNlcigpO1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBhZGREYXRhVG9JbnB1dHModXNlci5maXJzdE5hbWUsIHVzZXIubGFzdE5hbWUsIHVzZXIuZGlzcGxheU5hbWUsIHVzZXIuZW1haWwpO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2F2ZUNoYW5nZXNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIlNhdmVDaGFuZ2VzXCIpO1xyXG4gIGlmIChzYXZlQ2hhbmdlc0J1dHRvbikge1xyXG4gICAgc2F2ZUNoYW5nZXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdG5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxhc3RuYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaXNwbGF5bmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBmaXJzdE5hbWUudmFsdWUsXHJcbiAgICAgICAgbGFzdE5hbWU6IGxhc3ROYW1lLnZhbHVlLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICBlbWFpbDogZW1haWwudmFsdWUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBhd2FpdCB1cGRhdGVVc2VyKHVzZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVwZGF0ZWQpO1xyXG5cclxuICAgICAgICBpZiAodXBkYXRlZCkge1xyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9hY2NvdW50Lmh0bWwjcHJvZmlsZVwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzaG93QWNjb3VudFN0YXR1c01lc3NhZ2UoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmluaXRFZGl0VXNlckRldGFpbHMoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7732\n')},2630:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.addDataToInputs = void 0;\r\nconst addDataToInputs = (firstName, lastName, displayName, emailAddress) => {\r\n    const firstNameInput = document.getElementById("firstname");\r\n    const lastNameInput = document.getElementById("lastname");\r\n    const emailInput = document.getElementById("email");\r\n    const displayNameInput = document.getElementById("displayname");\r\n    if (firstNameInput)\r\n        firstNameInput.value = firstName;\r\n    if (lastNameInput)\r\n        lastNameInput.value = lastName;\r\n    if (emailInput)\r\n        emailInput.value = emailAddress;\r\n    if (displayNameInput)\r\n        displayNameInput.value = displayName;\r\n};\r\nexports.addDataToInputs = addDataToInputs;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYzMC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBTyxNQUFNLGVBQWUsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFO0lBQ2hGLE1BQU0sY0FBYyxHQUFxQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBcUIsQ0FBQztJQUNsRyxNQUFNLGFBQWEsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7SUFDaEcsTUFBTSxVQUFVLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBQzFGLE1BQU0sZ0JBQWdCLEdBQXFCLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQixDQUFDO0lBRXRHLElBQUksY0FBYztRQUFFLGNBQWMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3JELElBQUksYUFBYTtRQUFFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQ2xELElBQUksVUFBVTtRQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBQ2hELElBQUksZ0JBQWdCO1FBQUUsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztBQUM3RCxDQUFDLENBQUM7QUFWVyx1QkFBZSxtQkFVMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9WaWV3cy9BY2NvdW50L2FkZERhdGFUb0lucHV0cy50cz81YWNlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhZGREYXRhVG9JbnB1dHMgPSAoZmlyc3ROYW1lLCBsYXN0TmFtZSwgZGlzcGxheU5hbWUsIGVtYWlsQWRkcmVzcykgPT4ge1xyXG4gIGNvbnN0IGZpcnN0TmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaXJzdG5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdCBsYXN0TmFtZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXN0bmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGNvbnN0IGVtYWlsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgY29uc3QgZGlzcGxheU5hbWVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGlzcGxheW5hbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgaWYgKGZpcnN0TmFtZUlucHV0KSBmaXJzdE5hbWVJbnB1dC52YWx1ZSA9IGZpcnN0TmFtZTtcclxuICBpZiAobGFzdE5hbWVJbnB1dCkgbGFzdE5hbWVJbnB1dC52YWx1ZSA9IGxhc3ROYW1lO1xyXG4gIGlmIChlbWFpbElucHV0KSBlbWFpbElucHV0LnZhbHVlID0gZW1haWxBZGRyZXNzO1xyXG4gIGlmIChkaXNwbGF5TmFtZUlucHV0KSBkaXNwbGF5TmFtZUlucHV0LnZhbHVlID0gZGlzcGxheU5hbWU7XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2630\n')},6062:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.showAccountStatusMessage = void 0;\r\nfunction showAccountStatusMessage(status) {\r\n    const dialogue = document.querySelector(".c-dialogue");\r\n    if (!dialogue)\r\n        return;\r\n    dialogue.innerHTML = "";\r\n    const iconElement = document.createElement("i");\r\n    iconElement.classList.add("c-dialogue__icon");\r\n    const titleElement = document.createElement("p");\r\n    titleElement.classList.add("c-dialogue__title");\r\n    switch (status) {\r\n        case true:\r\n            dialogue.classList.add("c-dialogue--green");\r\n            iconElement.classList.add("fa-solid", "fa-circle-check");\r\n            titleElement.textContent = "Details updated successfully.";\r\n            break;\r\n        case false:\r\n            dialogue.classList.add("c-dialogue--red");\r\n            iconElement.classList.add("fa-solid", "fa-triangle-exclamation");\r\n            titleElement.textContent = "Error updating details.";\r\n            break;\r\n    }\r\n    dialogue.appendChild(iconElement);\r\n    dialogue.appendChild(titleElement);\r\n}\r\nexports.showAccountStatusMessage = showAccountStatusMessage;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjA2Mi5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQix3QkFBd0IsQ0FBQyxNQUFlO0lBQ3RELE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPO0lBRXRCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBRXhCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUU5QyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pELFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFFaEQsUUFBUSxNQUFNLEVBQUU7UUFDZCxLQUFLLElBQUk7WUFDUCxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzVDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3pELFlBQVksQ0FBQyxXQUFXLEdBQUcsK0JBQStCLENBQUM7WUFDM0QsTUFBTTtRQUVSLEtBQUssS0FBSztZQUNSLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDMUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLHlCQUF5QixDQUFDLENBQUM7WUFDakUsWUFBWSxDQUFDLFdBQVcsR0FBRyx5QkFBeUIsQ0FBQztZQUNyRCxNQUFNO0tBQ1Q7SUFFRCxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDckMsQ0FBQztBQTVCRCw0REE0QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9WaWV3cy9BY2NvdW50L3Nob3dBY2NvdW50U3RhdHVzTWVzc2FnZS50cz9mZGE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzaG93QWNjb3VudFN0YXR1c01lc3NhZ2Uoc3RhdHVzOiBib29sZWFuKSB7XHJcbiAgY29uc3QgZGlhbG9ndWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmMtZGlhbG9ndWVcIik7XHJcbiAgaWYgKCFkaWFsb2d1ZSkgcmV0dXJuO1xyXG5cclxuICBkaWFsb2d1ZS5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICBjb25zdCBpY29uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjLWRpYWxvZ3VlX19pY29uXCIpO1xyXG5cclxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICB0aXRsZUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImMtZGlhbG9ndWVfX3RpdGxlXCIpO1xyXG5cclxuICBzd2l0Y2ggKHN0YXR1cykge1xyXG4gICAgY2FzZSB0cnVlOlxyXG4gICAgICBkaWFsb2d1ZS5jbGFzc0xpc3QuYWRkKFwiYy1kaWFsb2d1ZS0tZ3JlZW5cIik7XHJcbiAgICAgIGljb25FbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWNpcmNsZS1jaGVja1wiKTtcclxuICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJEZXRhaWxzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5LlwiO1xyXG4gICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlIGZhbHNlOlxyXG4gICAgICBkaWFsb2d1ZS5jbGFzc0xpc3QuYWRkKFwiYy1kaWFsb2d1ZS0tcmVkXCIpO1xyXG4gICAgICBpY29uRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS10cmlhbmdsZS1leGNsYW1hdGlvblwiKTtcclxuICAgICAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJFcnJvciB1cGRhdGluZyBkZXRhaWxzLlwiO1xyXG4gICAgICBicmVhaztcclxuICB9XHJcblxyXG4gIGRpYWxvZ3VlLmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcclxuICBkaWFsb2d1ZS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6062\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nvar _a, _b;\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nconst env = ((_b = (_a = document.getElementById("jsEnvironment")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "development";\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\nConstants.API_BASE_URL = env === "production"\r\n    ? "https://elliotapiserver.com"\r\n    : env === "test"\r\n        ? "https://test.elliotapiserver.com"\r\n        : "http://localhost:5001";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxHQUFHLEdBQUcscUJBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxFQUFFLEtBQUksYUFBYSxDQUFDO0FBRTNGLE1BQWEsU0FBUzs7QUFBdEIsOEJBT0M7QUFOUSxzQkFBWSxHQUNqQixHQUFHLEtBQUssWUFBWTtJQUNsQixDQUFDLENBQUMsNkJBQTZCO0lBQy9CLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTTtRQUNoQixDQUFDLENBQUMsa0NBQWtDO1FBQ3BDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0NvbnN0YW50cy9Db25zdGFudHMudHM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRW52aXJvbm1lbnRcIik/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJkZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9XHJcbiAgICBlbnYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gXCJodHRwczovL2VsbGlvdGFwaXNlcnZlci5jb21cIlxyXG4gICAgICA6IGVudiA9PT0gXCJ0ZXN0XCJcclxuICAgICAgPyBcImh0dHBzOi8vdGVzdC5lbGxpb3RhcGlzZXJ2ZXIuY29tXCJcclxuICAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMVwiO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(e){var Q=__webpack_module_cache__[e];if(void 0!==Q)return Q.exports;var F=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(F.exports,F,F.exports,__webpack_require__),F.exports}var __webpack_exports__=__webpack_require__(7732)})();