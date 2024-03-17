(()=>{"use strict";var __webpack_modules__={5086:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.VerifyEmail = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nconst VerificationStatus_1 = __webpack_require__(686);\r\nfunction VerifyEmail(id, token) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const res = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/verify/`, {\r\n                method: "POST",\r\n                headers: { "Content-Type": "application/json" },\r\n                body: JSON.stringify({ id, verificationCode: token }),\r\n            });\r\n            if (res.status === 403) {\r\n                throw new Error("Could not verify user");\r\n            }\r\n            if (res.status === 301) {\r\n                return VerificationStatus_1.VerificationStatus.AlreadyVerified;\r\n            }\r\n            if (res.status === 200) {\r\n                return VerificationStatus_1.VerificationStatus.Verified;\r\n            }\r\n            throw new Error("Unknown error");\r\n        }\r\n        catch (error) {\r\n            return VerificationStatus_1.VerificationStatus.UnknownError;\r\n        }\r\n    });\r\n}\r\nexports.VerifyEmail = VerifyEmail;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA4Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFDekQsc0RBQXFFO0FBRXJFLFNBQXNCLFdBQVcsQ0FBQyxFQUFVLEVBQUUsS0FBYTs7UUFDekQsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxZQUFZLG9CQUFvQixFQUFFO2dCQUNyRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3RELENBQUMsQ0FBQztZQUVILElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE9BQU8sdUNBQWtCLENBQUMsZUFBZSxDQUFDO2FBQzNDO1lBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsT0FBTyx1Q0FBa0IsQ0FBQyxRQUFRLENBQUM7YUFDcEM7WUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLHVDQUFrQixDQUFDLFlBQVksQ0FBQztTQUN4QztJQUNILENBQUM7Q0FBQTtBQXhCRCxrQ0F3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9Db250cm9sbGVycy9TaWduIHVwL1ZlcmlmeUVtYWlsLnRzPzU0Y2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL0NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuaW1wb3J0IHsgVmVyaWZpY2F0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL01vZGVscy9WZXJpZmljYXRpb25TdGF0dXNcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBWZXJpZnlFbWFpbChpZDogc3RyaW5nLCB0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxWZXJpZmljYXRpb25TdGF0dXM+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7Q29uc3RhbnRzLkFQSV9CQVNFX1VSTH0vYXBpL3VzZXJzL3ZlcmlmeS9gLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpZCwgdmVyaWZpY2F0aW9uQ29kZTogdG9rZW4gfSksXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCB2ZXJpZnkgdXNlclwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMzAxKSB7XHJcbiAgICAgIHJldHVybiBWZXJpZmljYXRpb25TdGF0dXMuQWxyZWFkeVZlcmlmaWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFZlcmlmaWNhdGlvblN0YXR1cy5WZXJpZmllZDtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gVmVyaWZpY2F0aW9uU3RhdHVzLlVua25vd25FcnJvcjtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5086\n')},686:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.VerificationStatus = void 0;\r\nvar VerificationStatus;\r\n(function (VerificationStatus) {\r\n    VerificationStatus[VerificationStatus["Verified"] = 200] = "Verified";\r\n    VerificationStatus[VerificationStatus["AlreadyVerified"] = 301] = "AlreadyVerified";\r\n    VerificationStatus[VerificationStatus["Forbidden"] = 403] = "Forbidden";\r\n    VerificationStatus[VerificationStatus["UnknownError"] = 500] = "UnknownError";\r\n})(VerificationStatus = exports.VerificationStatus || (exports.VerificationStatus = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg2LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLElBQVksa0JBS1g7QUFMRCxXQUFZLGtCQUFrQjtJQUM1QixxRUFBYztJQUNkLG1GQUFxQjtJQUNyQix1RUFBZTtJQUNmLDZFQUFrQjtBQUNwQixDQUFDLEVBTFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFLN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9Nb2RlbHMvVmVyaWZpY2F0aW9uU3RhdHVzLnRzP2I2YjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gVmVyaWZpY2F0aW9uU3RhdHVzIHtcclxuICBWZXJpZmllZCA9IDIwMCxcclxuICBBbHJlYWR5VmVyaWZpZWQgPSAzMDEsXHJcbiAgRm9yYmlkZGVuID0gNDAzLFxyXG4gIFVua25vd25FcnJvciA9IDUwMCxcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///686\n')},6523:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst VerifyEmail_1 = __webpack_require__(5086);\r\nconst VerificationStatus_1 = __webpack_require__(686);\r\nfunction isValidObjectId(id) {\r\n    return /^[a-f\\d]{24}$/i.test(id);\r\n}\r\nfunction isValidToken(token) {\r\n    return typeof token === "string" && token.length > 0;\r\n}\r\nfunction init() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const urlParams = new URLSearchParams(window.location.search);\r\n        const id = urlParams.get("id");\r\n        const token = urlParams.get("verificationCode");\r\n        const validation = document.getElementById("verify-validation");\r\n        if (id && token && isValidObjectId(id) && isValidToken(token)) {\r\n            const verified = yield (0, VerifyEmail_1.VerifyEmail)(id, token);\r\n            if (verified === VerificationStatus_1.VerificationStatus.Verified) {\r\n                window.location.replace("/pages/login/login.html?status=EmailVerificationSuccess");\r\n            }\r\n            else if (verified === VerificationStatus_1.VerificationStatus.AlreadyVerified) {\r\n                window.location.replace("/pages/login/login.html?status=EmailAlreadyVerified");\r\n            }\r\n            else {\r\n                // Update the page to display an error message\r\n                validation.textContent = "Verification failed. Please try again.";\r\n                validation.style.display = "block";\r\n                window.location.replace("/pages/login/login.html?status=EmailVerificationFailure");\r\n            }\r\n        }\r\n        else {\r\n            // Update the page to display an error message\r\n            validation.textContent = "Invalid URL or parameters.";\r\n            validation.style.display = "block";\r\n            window.location.replace("/pages/login/login.html?status=EmailVerificationFailure");\r\n        }\r\n    });\r\n}\r\ninit();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUyMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdEQUFvRTtBQUNwRSxzREFBcUU7QUFFckUsU0FBUyxlQUFlLENBQUMsRUFBVTtJQUNqQyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYTtJQUNqQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsU0FBZSxJQUFJOztRQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVoRSxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3RCxNQUFNLFFBQVEsR0FBRyxNQUFNLDZCQUFXLEVBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTlDLElBQUksUUFBUSxLQUFLLHVDQUFrQixDQUFDLFFBQVEsRUFBRTtnQkFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMseURBQXlELENBQUMsQ0FBQzthQUNwRjtpQkFBTSxJQUFJLFFBQVEsS0FBSyx1Q0FBa0IsQ0FBQyxlQUFlLEVBQUU7Z0JBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7YUFDaEY7aUJBQU07Z0JBQ0wsOENBQThDO2dCQUM5QyxVQUFVLENBQUMsV0FBVyxHQUFHLHdDQUF3QyxDQUFDO2dCQUNsRSxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7YUFDcEY7U0FDRjthQUFNO1lBQ0wsOENBQThDO1lBQzlDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLENBQUM7WUFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7U0FDcEY7SUFDSCxDQUFDO0NBQUE7QUFDRCxJQUFJLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL1ZpZXdzL1ZlcmlmeSBFbWFpbC92ZXJpZnlFbWFpbC50cz8xYjRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlcmlmeUVtYWlsIH0gZnJvbSBcIi4uLy4uL0NvbnRyb2xsZXJzL1NpZ24gdXAvVmVyaWZ5RW1haWxcIjtcclxuaW1wb3J0IHsgVmVyaWZpY2F0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL01vZGVscy9WZXJpZmljYXRpb25TdGF0dXNcIjtcclxuXHJcbmZ1bmN0aW9uIGlzVmFsaWRPYmplY3RJZChpZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIC9eW2EtZlxcZF17MjR9JC9pLnRlc3QoaWQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkVG9rZW4odG9rZW46IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIgJiYgdG9rZW4ubGVuZ3RoID4gMDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcclxuICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG4gIGNvbnN0IGlkID0gdXJsUGFyYW1zLmdldChcImlkXCIpO1xyXG4gIGNvbnN0IHRva2VuID0gdXJsUGFyYW1zLmdldChcInZlcmlmaWNhdGlvbkNvZGVcIik7XHJcbiAgY29uc3QgdmFsaWRhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZ5LXZhbGlkYXRpb25cIik7XHJcblxyXG4gIGlmIChpZCAmJiB0b2tlbiAmJiBpc1ZhbGlkT2JqZWN0SWQoaWQpICYmIGlzVmFsaWRUb2tlbih0b2tlbikpIHtcclxuICAgIGNvbnN0IHZlcmlmaWVkID0gYXdhaXQgVmVyaWZ5RW1haWwoaWQsIHRva2VuKTtcclxuXHJcbiAgICBpZiAodmVyaWZpZWQgPT09IFZlcmlmaWNhdGlvblN0YXR1cy5WZXJpZmllZCkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShcIi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sP3N0YXR1cz1FbWFpbFZlcmlmaWNhdGlvblN1Y2Nlc3NcIik7XHJcbiAgICB9IGVsc2UgaWYgKHZlcmlmaWVkID09PSBWZXJpZmljYXRpb25TdGF0dXMuQWxyZWFkeVZlcmlmaWVkKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWw/c3RhdHVzPUVtYWlsQWxyZWFkeVZlcmlmaWVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gVXBkYXRlIHRoZSBwYWdlIHRvIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZVxyXG4gICAgICB2YWxpZGF0aW9uLnRleHRDb250ZW50ID0gXCJWZXJpZmljYXRpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiO1xyXG4gICAgICB2YWxpZGF0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWw/c3RhdHVzPUVtYWlsVmVyaWZpY2F0aW9uRmFpbHVyZVwiKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gVXBkYXRlIHRoZSBwYWdlIHRvIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZVxyXG4gICAgdmFsaWRhdGlvbi50ZXh0Q29udGVudCA9IFwiSW52YWxpZCBVUkwgb3IgcGFyYW1ldGVycy5cIjtcclxuICAgIHZhbGlkYXRpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL3BhZ2VzL2xvZ2luL2xvZ2luLmh0bWw/c3RhdHVzPUVtYWlsVmVyaWZpY2F0aW9uRmFpbHVyZVwiKTtcclxuICB9XHJcbn1cclxuaW5pdCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6523\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nvar _a, _b;\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nconst env = ((_b = (_a = document.getElementById("jsEnvironment")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "development";\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\nConstants.API_BASE_URL = env === "production"\r\n    ? "https://api.elliotlafave.com"\r\n    : env === "test"\r\n        ? "https://test.elliotapiserver.com"\r\n        : "http://localhost:5001";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxHQUFHLEdBQUcscUJBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxFQUFFLEtBQUksYUFBYSxDQUFDO0FBRTNGLE1BQWEsU0FBUzs7QUFBdEIsOEJBT0M7QUFOUSxzQkFBWSxHQUNqQixHQUFHLEtBQUssWUFBWTtJQUNsQixDQUFDLENBQUMsOEJBQThCO0lBQ2hDLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTTtRQUNoQixDQUFDLENBQUMsa0NBQWtDO1FBQ3BDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0NvbnN0YW50cy9Db25zdGFudHMudHM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRW52aXJvbm1lbnRcIik/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJkZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9XHJcbiAgICBlbnYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gXCJodHRwczovL2FwaS5lbGxpb3RsYWZhdmUuY29tXCJcclxuICAgICAgOiBlbnYgPT09IFwidGVzdFwiXHJcbiAgICAgID8gXCJodHRwczovL3Rlc3QuZWxsaW90YXBpc2VydmVyLmNvbVwiXHJcbiAgICAgIDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDFcIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var i=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(i.exports,i,i.exports,__webpack_require__),i.exports}var __webpack_exports__=__webpack_require__(6523)})();