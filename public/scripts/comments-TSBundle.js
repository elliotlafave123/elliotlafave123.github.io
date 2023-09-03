(()=>{"use strict";var __webpack_modules__={954:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.CheckLogin = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction CheckLogin() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const status = {\r\n            LoggedIn: false,\r\n            EmailVerificationRequired: false,\r\n            Unauthorized: false,\r\n        };\r\n        try {\r\n            const token = localStorage.getItem("token");\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/isUserAuthenticated`, {\r\n                method: "GET",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                    Authorization: `Bearer ${token}`,\r\n                },\r\n            });\r\n            switch (response.status) {\r\n                case 201:\r\n                    status.LoggedIn = true;\r\n                    break;\r\n                case 401:\r\n                    status.EmailVerificationRequired = true;\r\n                    break;\r\n                case 403:\r\n                    status.Unauthorized = true;\r\n                    break;\r\n                default:\r\n                    throw new Error("Unknown error");\r\n            }\r\n        }\r\n        catch (error) {\r\n            console.log(`Error checking login status: ${error}`);\r\n            status.Unauthorized = true;\r\n        }\r\n        return status;\r\n    });\r\n}\r\nexports.CheckLogin = CheckLogin;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5RDtBQVF6RCxTQUFzQixVQUFVOztRQUM5QixNQUFNLE1BQU0sR0FBZ0I7WUFDMUIsUUFBUSxFQUFFLEtBQUs7WUFDZix5QkFBeUIsRUFBRSxLQUFLO1lBQ2hDLFlBQVksRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLHFCQUFTLENBQUMsWUFBWSxnQ0FBZ0MsRUFBRTtnQkFDdEYsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRTtpQkFDakM7YUFDRixDQUFDLENBQUM7WUFFSCxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUssR0FBRztvQkFDTixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztvQkFDeEMsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQzVCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUFBO0FBcENELGdDQW9DQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL0NvbnRyb2xsZXJzL0xvZ2luL0NoZWNrTG9naW4udHM/MjEwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vLi4vQ29uc3RhbnRzL0NvbnN0YW50c1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2dpblN0YXR1cyB7XHJcbiAgTG9nZ2VkSW46IGJvb2xlYW47XHJcbiAgRW1haWxWZXJpZmljYXRpb25SZXF1aXJlZDogYm9vbGVhbjtcclxuICBVbmF1dGhvcml6ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBDaGVja0xvZ2luKCk6IFByb21pc2U8TG9naW5TdGF0dXM+IHtcclxuICBjb25zdCBzdGF0dXM6IExvZ2luU3RhdHVzID0ge1xyXG4gICAgTG9nZ2VkSW46IGZhbHNlLFxyXG4gICAgRW1haWxWZXJpZmljYXRpb25SZXF1aXJlZDogZmFsc2UsXHJcbiAgICBVbmF1dGhvcml6ZWQ6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NvbnN0YW50cy5BUElfQkFTRV9VUkx9L2FwaS91c2Vycy9pc1VzZXJBdXRoZW50aWNhdGVkYCwge1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHN3aXRjaCAocmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgMjAxOlxyXG4gICAgICAgIHN0YXR1cy5Mb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgIHN0YXR1cy5FbWFpbFZlcmlmaWNhdGlvblJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgc3RhdHVzLlVuYXV0aG9yaXplZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlcnJvclwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coYEVycm9yIGNoZWNraW5nIGxvZ2luIHN0YXR1czogJHtlcnJvcn1gKTtcclxuICAgIHN0YXR1cy5VbmF1dGhvcml6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXR1cztcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///954\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\n// static API_BASE_URL = "http://localhost:5000";\r\nConstants.API_BASE_URL = "https://elliotapiserver.com";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFNBQVM7O0FBQXRCLDhCQUdDO0FBRkMsaURBQWlEO0FBQzFDLHNCQUFZLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9Db25zdGFudHMvQ29uc3RhbnRzLnRzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgLy8gc3RhdGljIEFQSV9CQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCI7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9IFwiaHR0cHM6Ly9lbGxpb3RhcGlzZXJ2ZXIuY29tXCI7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2079\n')},97:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.GetComments = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction GetComments(params) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const token = localStorage.getItem("token");\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/Comments/${params.streamId}`, {\r\n                method: "GET",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                    Authorization: `Bearer ${token}`,\r\n                },\r\n            });\r\n            if (response.status === 404) {\r\n                throw new Error("Could not find comments");\r\n            }\r\n            if (response.status === 500) {\r\n                throw new Error("Unknown error");\r\n            }\r\n            const data = yield response.json();\r\n            return data;\r\n        }\r\n        catch (error) {\r\n            console.log(`Error fetching comments: ${error}`);\r\n            return null;\r\n        }\r\n    });\r\n}\r\nexports.GetComments = GetComments;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTREO0FBTTVELFNBQXNCLFdBQVcsQ0FBQyxNQUF3Qjs7UUFDeEQsSUFBSTtZQUNGLE1BQU0sS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFNUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxxQkFBUyxDQUFDLFlBQVksYUFBYSxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3BGLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxhQUFhLEVBQUUsVUFBVSxLQUFLLEVBQUU7aUJBQ2pDO2FBQ0YsQ0FBQyxDQUFDO1lBRUgsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNsQztZQUVELE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDakQsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FBQTtBQXpCRCxrQ0F5QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9hcHBzL0NvbW1lbnRzL0NvbnRyb2xsZXJzL0NvbW1lbnRzL0dldENvbW1lbnRzLnRzPzVmZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL0NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0Q29tbWVudHNJbnB1dCB7XHJcbiAgc3RyZWFtSWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdldENvbW1lbnRzKHBhcmFtczogR2V0Q29tbWVudHNJbnB1dCk6IFByb21pc2U8YW55PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NvbnN0YW50cy5BUElfQkFTRV9VUkx9L0NvbW1lbnRzLyR7cGFyYW1zLnN0cmVhbUlkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IGZpbmQgY29tbWVudHNcIik7XHJcbiAgICB9XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBlcnJvclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGBFcnJvciBmZXRjaGluZyBjb21tZW50czogJHtlcnJvcn1gKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///97\n')},1176:function(__unused_webpack_module,exports){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.hideLoginButtons = void 0;\r\nfunction hideLoginButtons() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const loginButton = document.getElementById("logInButton");\r\n        const signUpButton = document.getElementById("signUpButton");\r\n        if (loginButton && signUpButton) {\r\n            loginButton.style.display = "none";\r\n            signUpButton.style.display = "none";\r\n        }\r\n    });\r\n}\r\nexports.hideLoginButtons = hideLoginButtons;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTE3Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxTQUFzQixnQkFBZ0I7O1FBQ3BDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0QsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUU3RCxJQUFJLFdBQVcsSUFBSSxZQUFZLEVBQUU7WUFDL0IsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ25DLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztTQUNyQztJQUNILENBQUM7Q0FBQTtBQVJELDRDQVFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvYXBwcy9Db21tZW50cy9WaWV3cy9BdXRoZW50aWNhdGlvbi9oaWRlTG9naW5CdXR0b25zLnRzP2E1MGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhpZGVMb2dpbkJ1dHRvbnMoKSB7XHJcbiAgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ0luQnV0dG9uXCIpO1xyXG4gIGNvbnN0IHNpZ25VcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnblVwQnV0dG9uXCIpO1xyXG5cclxuICBpZiAobG9naW5CdXR0b24gJiYgc2lnblVwQnV0dG9uKSB7XHJcbiAgICBsb2dpbkJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBzaWduVXBCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1176\n')},6307:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.hideOverlay = void 0;\r\nfunction hideOverlay() {\r\n    const notAllowedContainer = document.querySelector(".add-comment-container-notAllowed");\r\n    if (!notAllowedContainer)\r\n        return;\r\n    notAllowedContainer === null || notAllowedContainer === void 0 ? void 0 : notAllowedContainer.classList.add("allowed");\r\n}\r\nexports.hideOverlay = hideOverlay;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjMwNy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixXQUFXO0lBQ3pCLE1BQU0sbUJBQW1CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3hGLElBQUksQ0FBQyxtQkFBbUI7UUFBRSxPQUFPO0lBQ2pDLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUpELGtDQUlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvYXBwcy9Db21tZW50cy9WaWV3cy9BdXRoZW50aWNhdGlvbi9oaWRlT3ZlcmxheS50cz82YmYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoaWRlT3ZlcmxheSgpIHtcclxuICBjb25zdCBub3RBbGxvd2VkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtY29tbWVudC1jb250YWluZXItbm90QWxsb3dlZFwiKTtcclxuICBpZiAoIW5vdEFsbG93ZWRDb250YWluZXIpIHJldHVybjtcclxuICBub3RBbGxvd2VkQ29udGFpbmVyPy5jbGFzc0xpc3QuYWRkKFwiYWxsb3dlZFwiKTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6307\n')},4843:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.displayComment = void 0;\r\nconst helpers_1 = __webpack_require__(5588);\r\nfunction displayComment(comment) {\r\n    var _a;\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const container = document.getElementById("InsertCommentsContainer");\r\n        if (!container)\r\n            return;\r\n        const commentDiv = document.createElement("div");\r\n        commentDiv.classList.add("c-comment");\r\n        commentDiv.setAttribute("data-commentId", comment === null || comment === void 0 ? void 0 : comment.id);\r\n        commentDiv.innerHTML = `\r\n    <div class="c-comment__side">\r\n        <button class="c-comment__button upvote">\r\n            <i class="fa-sharp fa-solid fa-plus"></i>\r\n        </button>\r\n        <p>${comment.upvotes - comment.downvotes}</p>\r\n        <button class="c-comment__button downvote">\r\n            <i class="fa-sharp fa-solid fa-dash"></i>\r\n        </button>\r\n    </div>\r\n    <div class="c-comment__main">\r\n        <div class="c-comment__header">\r\n            <div class="c-profile-image c-profile-image--${comment.profileImgColor || "purple"}">\r\n                <p>${(_a = comment.displayName) === null || _a === void 0 ? void 0 : _a.slice(0, 1).toUpperCase()}</p>\r\n            </div>\r\n            <div class="c-comment__header__info">\r\n                <h5>${comment.displayName.toLowerCase()}</h5>\r\n                ${comment.currentUser ? \'<div class="c-comment__you">you</div>\' : ""}\r\n                <span class="c-comment__date">${(0, helpers_1.GenerateDateString)(new Date(comment.createdAt))}</span>\r\n                <span>${comment.hasBeenEdited ? "(Edited)" : ""}</span>\r\n            </div>\r\n        </div>\r\n        <p class="c-comment__text">\r\n            ${comment.text}\r\n        </p>\r\n    </div>\r\n  `;\r\n        container.insertAdjacentElement("afterbegin", commentDiv);\r\n    });\r\n}\r\nexports.displayComment = displayComment;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDg0My5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBc0U7QUFHdEUsU0FBc0IsY0FBYyxDQUFDLE9BQXFCOzs7UUFDeEQsTUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTztRQUV2QixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELFVBQVUsQ0FBQyxTQUFTLEdBQUc7Ozs7O2FBS1osT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUzs7Ozs7OzsyREFPVyxPQUFPLENBQUMsZUFBZSxJQUFJLFFBQVE7cUJBQ3pFLGFBQU8sQ0FBQyxXQUFXLDBDQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRTs7O3NCQUc3QyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRTtrQkFDckMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0RBQ3BDLGdDQUFrQixFQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDdkUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFOzs7O2NBSWpELE9BQU8sQ0FBQyxJQUFJOzs7R0FHdkIsQ0FBQztRQUNGLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7O0NBQzNEO0FBbkNELHdDQW1DQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L2FwcHMvQ29tbWVudHMvVmlld3MvQ29tbWVudHMvZGlzcGxheUNvbW1lbnRzLnRzPzM0YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2VuZXJhdGVEYXRlU3RyaW5nIH0gZnJvbSBcIi4uLy4uLy4uL1BvcnRmb2xpbyBDYXJkcy9oZWxwZXJzXCI7XHJcbmltcG9ydCB7IENvbW1lbnRNb2RlbCB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvQ29tbWVudFR5cGVcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNwbGF5Q29tbWVudChjb21tZW50OiBDb21tZW50TW9kZWwpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkluc2VydENvbW1lbnRzQ29udGFpbmVyXCIpO1xyXG4gIGlmICghY29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IGNvbW1lbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbW1lbnREaXYuY2xhc3NMaXN0LmFkZChcImMtY29tbWVudFwiKTtcclxuICBjb21tZW50RGl2LnNldEF0dHJpYnV0ZShcImRhdGEtY29tbWVudElkXCIsIGNvbW1lbnQ/LmlkKTtcclxuICBjb21tZW50RGl2LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjLWNvbW1lbnRfX3NpZGVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYy1jb21tZW50X19idXR0b24gdXB2b3RlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEtc2hhcnAgZmEtc29saWQgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8cD4ke2NvbW1lbnQudXB2b3RlcyAtIGNvbW1lbnQuZG93bnZvdGVzfTwvcD5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYy1jb21tZW50X19idXR0b24gZG93bnZvdGVcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYS1zaGFycCBmYS1zb2xpZCBmYS1kYXNoXCI+PC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYy1jb21tZW50X19tYWluXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImMtY29tbWVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjLXByb2ZpbGUtaW1hZ2UgYy1wcm9maWxlLWltYWdlLS0ke2NvbW1lbnQucHJvZmlsZUltZ0NvbG9yIHx8IFwicHVycGxlXCJ9XCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke2NvbW1lbnQuZGlzcGxheU5hbWU/LnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImMtY29tbWVudF9faGVhZGVyX19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+JHtjb21tZW50LmRpc3BsYXlOYW1lLnRvTG93ZXJDYXNlKCl9PC9oNT5cclxuICAgICAgICAgICAgICAgICR7Y29tbWVudC5jdXJyZW50VXNlciA/ICc8ZGl2IGNsYXNzPVwiYy1jb21tZW50X195b3VcIj55b3U8L2Rpdj4nIDogXCJcIn1cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYy1jb21tZW50X19kYXRlXCI+JHtHZW5lcmF0ZURhdGVTdHJpbmcobmV3IERhdGUoY29tbWVudC5jcmVhdGVkQXQpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke2NvbW1lbnQuaGFzQmVlbkVkaXRlZCA/IFwiKEVkaXRlZClcIiA6IFwiXCJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImMtY29tbWVudF9fdGV4dFwiPlxyXG4gICAgICAgICAgICAke2NvbW1lbnQudGV4dH1cclxuICAgICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG4gIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGNvbW1lbnREaXYpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4843\n')},143:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst CheckLogin_1 = __webpack_require__(954);\r\nconst GetComments_1 = __webpack_require__(97);\r\nconst hideLoginButtons_1 = __webpack_require__(1176);\r\nconst hideOverlay_1 = __webpack_require__(6307);\r\nconst displayComments_1 = __webpack_require__(4843);\r\n// Init comments section\r\nfunction initComments() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const loginStatus = yield (0, CheckLogin_1.CheckLogin)();\r\n        if (loginStatus.LoggedIn === true) {\r\n            (0, hideLoginButtons_1.hideLoginButtons)();\r\n        }\r\n        if (loginStatus.EmailVerificationRequired === false) {\r\n            (0, hideOverlay_1.hideOverlay)();\r\n        }\r\n        const commentsContainer = document.getElementById("commentStreamContainer");\r\n        if (commentsContainer) {\r\n            const streamId = commentsContainer.getAttribute("data-stream");\r\n            if (streamId) {\r\n                const comments = yield (0, GetComments_1.GetComments)({ streamId });\r\n                if (comments) {\r\n                    comments.forEach((comment) => {\r\n                        console.log(comment);\r\n                        (0, displayComments_1.displayComment)(comment);\r\n                    });\r\n                }\r\n            }\r\n        }\r\n    });\r\n}\r\ninitComments();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsOENBQTRGO0FBQzVGLDhDQUFpRTtBQUVqRSxxREFBMkU7QUFDM0UsZ0RBQWlFO0FBQ2pFLG9EQUFrRTtBQUVsRSx3QkFBd0I7QUFDeEIsU0FBZSxZQUFZOztRQUN6QixNQUFNLFdBQVcsR0FBZ0IsTUFBTSwyQkFBVSxHQUFFLENBQUM7UUFFcEQsSUFBSSxXQUFXLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUNqQyx1Q0FBZ0IsR0FBRSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxXQUFXLENBQUMseUJBQXlCLEtBQUssS0FBSyxFQUFFO1lBQ25ELDZCQUFXLEdBQUUsQ0FBQztTQUNmO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUUsSUFBSSxpQkFBaUIsRUFBRTtZQUNyQixNQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0QsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osTUFBTSxRQUFRLEdBQUcsTUFBTSw2QkFBVyxFQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDakQsSUFBSSxRQUFRLEVBQUU7b0JBQ1osUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQXFCLEVBQUUsRUFBRTt3QkFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDckIsb0NBQWMsRUFBQyxPQUFPLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUFBO0FBQ0QsWUFBWSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9hcHBzL0NvbW1lbnRzL2luZGV4LnRzPzA3N2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tMb2dpbiwgTG9naW5TdGF0dXMgfSBmcm9tIFwiLi4vLi4vQXV0aGVudGljYXRpb24vQ29udHJvbGxlcnMvTG9naW4vQ2hlY2tMb2dpblwiO1xyXG5pbXBvcnQgeyBHZXRDb21tZW50cyB9IGZyb20gXCIuL0NvbnRyb2xsZXJzL0NvbW1lbnRzL0dldENvbW1lbnRzXCI7XHJcbmltcG9ydCB7IENvbW1lbnRNb2RlbCB9IGZyb20gXCIuL01vZGVscy9Db21tZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBoaWRlTG9naW5CdXR0b25zIH0gZnJvbSBcIi4vVmlld3MvQXV0aGVudGljYXRpb24vaGlkZUxvZ2luQnV0dG9uc1wiO1xyXG5pbXBvcnQgeyBoaWRlT3ZlcmxheSB9IGZyb20gXCIuL1ZpZXdzL0F1dGhlbnRpY2F0aW9uL2hpZGVPdmVybGF5XCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb21tZW50IH0gZnJvbSBcIi4vVmlld3MvQ29tbWVudHMvZGlzcGxheUNvbW1lbnRzXCI7XHJcblxyXG4vLyBJbml0IGNvbW1lbnRzIHNlY3Rpb25cclxuYXN5bmMgZnVuY3Rpb24gaW5pdENvbW1lbnRzKCkge1xyXG4gIGNvbnN0IGxvZ2luU3RhdHVzOiBMb2dpblN0YXR1cyA9IGF3YWl0IENoZWNrTG9naW4oKTtcclxuXHJcbiAgaWYgKGxvZ2luU3RhdHVzLkxvZ2dlZEluID09PSB0cnVlKSB7XHJcbiAgICBoaWRlTG9naW5CdXR0b25zKCk7XHJcbiAgfVxyXG5cclxuICBpZiAobG9naW5TdGF0dXMuRW1haWxWZXJpZmljYXRpb25SZXF1aXJlZCA9PT0gZmFsc2UpIHtcclxuICAgIGhpZGVPdmVybGF5KCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb21tZW50c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudFN0cmVhbUNvbnRhaW5lclwiKTtcclxuICBpZiAoY29tbWVudHNDb250YWluZXIpIHtcclxuICAgIGNvbnN0IHN0cmVhbUlkID0gY29tbWVudHNDb250YWluZXIuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdHJlYW1cIik7XHJcbiAgICBpZiAoc3RyZWFtSWQpIHtcclxuICAgICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBHZXRDb21tZW50cyh7IHN0cmVhbUlkIH0pO1xyXG4gICAgICBpZiAoY29tbWVudHMpIHtcclxuICAgICAgICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50OiBDb21tZW50TW9kZWwpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG4gICAgICAgICAgZGlzcGxheUNvbW1lbnQoY29tbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuaW5pdENvbW1lbnRzKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///143\n')},5588:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.paginate = exports.getGridColumnCount = exports.IncludesTag = exports.GenerateDateString = void 0;\r\nfunction GenerateDateString(isoDate) {\r\n    const date = new Date(isoDate);\r\n    const strArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];\r\n    const d = date.getDate();\r\n    const m = strArray[date.getMonth()];\r\n    const y = date.getFullYear();\r\n    return "" + (d <= 9 ? "0" + d : d) + ",  " + m + " " + y;\r\n}\r\nexports.GenerateDateString = GenerateDateString;\r\nfunction IncludesTag(tag, tags) {\r\n    if (tags.length > 0) {\r\n        tags.forEach((el) => {\r\n            if (el === tag) {\r\n                return true;\r\n            }\r\n        });\r\n        return false;\r\n    }\r\n    return null;\r\n}\r\nexports.IncludesTag = IncludesTag;\r\nfunction getGridColumnCount() {\r\n    const ProjectsAppContainer = document.querySelector(".ProjectsAppContainer");\r\n    if (!ProjectsAppContainer)\r\n        return;\r\n    const gridComputedStyle = window.getComputedStyle(ProjectsAppContainer);\r\n    return gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;\r\n}\r\nexports.getGridColumnCount = getGridColumnCount;\r\nfunction paginate(array, page_size, page_number) {\r\n    return array.slice((page_number - 1) * page_size, page_number * page_size);\r\n}\r\nexports.paginate = paginate;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU4OC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixrQkFBa0IsQ0FBQyxPQUFhO0lBQzlDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBUEQsZ0RBT0M7QUFFRCxTQUFnQixXQUFXLENBQUMsR0FBRyxFQUFFLElBQUk7SUFDbkMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNuQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDbEIsSUFBSSxFQUFFLEtBQUssR0FBRyxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFWRCxrQ0FVQztBQUVELFNBQWdCLGtCQUFrQjtJQUNoQyxNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM3RSxJQUFJLENBQUMsb0JBQW9CO1FBQUUsT0FBTztJQUNsQyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hFLE9BQU8saUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0FBQ3ZGLENBQUM7QUFMRCxnREFLQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFdBQVc7SUFDcEQsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsRUFBRSxXQUFXLEdBQUcsU0FBUyxDQUFDLENBQUM7QUFDN0UsQ0FBQztBQUZELDRCQUVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvYXBwcy9Qb3J0Zm9saW8gQ2FyZHMvaGVscGVycy50cz8wNjc0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBHZW5lcmF0ZURhdGVTdHJpbmcoaXNvRGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGlzb0RhdGUpO1xyXG4gIGNvbnN0IHN0ckFycmF5ID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xyXG4gIGNvbnN0IGQgPSBkYXRlLmdldERhdGUoKTtcclxuICBjb25zdCBtID0gc3RyQXJyYXlbZGF0ZS5nZXRNb250aCgpXTtcclxuICBjb25zdCB5ID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gIHJldHVybiBcIlwiICsgKGQgPD0gOSA/IFwiMFwiICsgZCA6IGQpICsgXCIsICBcIiArIG0gKyBcIiBcIiArIHk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmNsdWRlc1RhZyh0YWcsIHRhZ3MpOiBib29sZWFuIHtcclxuICBpZiAodGFncy5sZW5ndGggPiAwKSB7XHJcbiAgICB0YWdzLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICAgIGlmIChlbCA9PT0gdGFnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdyaWRDb2x1bW5Db3VudCgpOiBudW1iZXIge1xyXG4gIGNvbnN0IFByb2plY3RzQXBwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9qZWN0c0FwcENvbnRhaW5lclwiKTtcclxuICBpZiAoIVByb2plY3RzQXBwQ29udGFpbmVyKSByZXR1cm47XHJcbiAgY29uc3QgZ3JpZENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShQcm9qZWN0c0FwcENvbnRhaW5lcik7XHJcbiAgcmV0dXJuIGdyaWRDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIikuc3BsaXQoXCIgXCIpLmxlbmd0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2luYXRlKGFycmF5LCBwYWdlX3NpemUsIHBhZ2VfbnVtYmVyKSB7XHJcbiAgcmV0dXJuIGFycmF5LnNsaWNlKChwYWdlX251bWJlciAtIDEpICogcGFnZV9zaXplLCBwYWdlX251bWJlciAqIHBhZ2Vfc2l6ZSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5588\n')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={exports:{}};return __webpack_modules__[n].call(t.exports,t,t.exports,__webpack_require__),t.exports}var __webpack_exports__=__webpack_require__(143)})();