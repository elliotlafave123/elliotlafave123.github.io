(()=>{"use strict";var __webpack_modules__={5086:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.VerifyEmail = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nconst VerificationStatus_1 = __webpack_require__(686);\r\nfunction VerifyEmail(id, token) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const res = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/verify/`, {\r\n                method: "POST",\r\n                headers: { "Content-Type": "application/json" },\r\n                body: JSON.stringify({ id, verificationCode: token }),\r\n            });\r\n            if (res.status === 403) {\r\n                throw new Error("Could not verify user");\r\n            }\r\n            if (res.status === 301) {\r\n                return VerificationStatus_1.VerificationStatus.AlreadyVerified;\r\n            }\r\n            if (res.status === 200) {\r\n                return VerificationStatus_1.VerificationStatus.Verified;\r\n            }\r\n            throw new Error("Unknown error");\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n            return VerificationStatus_1.VerificationStatus.UnknownError;\r\n        }\r\n    });\r\n}\r\nexports.VerifyEmail = VerifyEmail;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTA4Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFDekQsc0RBQXFFO0FBRXJFLFNBQXNCLFdBQVcsQ0FBQyxFQUFVLEVBQUUsS0FBYTs7UUFDekQsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcscUJBQVMsQ0FBQyxZQUFZLG9CQUFvQixFQUFFO2dCQUNyRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQy9DLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ3RELENBQUMsQ0FBQztZQUVILElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQzthQUMxQztZQUVELElBQUksR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQ3RCLE9BQU8sdUNBQWtCLENBQUMsZUFBZSxDQUFDO2FBQzNDO1lBRUQsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsT0FBTyx1Q0FBa0IsQ0FBQyxRQUFRLENBQUM7YUFDcEM7WUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2xDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8sdUNBQWtCLENBQUMsWUFBWSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQztDQUFBO0FBekJELGtDQXlCQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL0NvbnRyb2xsZXJzL1NpZ24gdXAvVmVyaWZ5RW1haWwudHM/NTRjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vLi4vQ29uc3RhbnRzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBWZXJpZmljYXRpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1ZlcmlmaWNhdGlvblN0YXR1c1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFZlcmlmeUVtYWlsKGlkOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPFZlcmlmaWNhdGlvblN0YXR1cz4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtDb25zdGFudHMuQVBJX0JBU0VfVVJMfS9hcGkvdXNlcnMvdmVyaWZ5L2AsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlkLCB2ZXJpZmljYXRpb25Db2RlOiB0b2tlbiB9KSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGQgbm90IHZlcmlmeSB1c2VyXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAzMDEpIHtcclxuICAgICAgcmV0dXJuIFZlcmlmaWNhdGlvblN0YXR1cy5BbHJlYWR5VmVyaWZpZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gVmVyaWZpY2F0aW9uU3RhdHVzLlZlcmlmaWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZXJyb3JcIik7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBWZXJpZmljYXRpb25TdGF0dXMuVW5rbm93bkVycm9yO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5086\n')},686:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.VerificationStatus = void 0;\r\nvar VerificationStatus;\r\n(function (VerificationStatus) {\r\n    VerificationStatus[VerificationStatus["Verified"] = 200] = "Verified";\r\n    VerificationStatus[VerificationStatus["AlreadyVerified"] = 301] = "AlreadyVerified";\r\n    VerificationStatus[VerificationStatus["Forbidden"] = 403] = "Forbidden";\r\n    VerificationStatus[VerificationStatus["UnknownError"] = 500] = "UnknownError";\r\n})(VerificationStatus = exports.VerificationStatus || (exports.VerificationStatus = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg2LmpzIiwibWFwcGluZ3MiOiI7OztBQUFBLElBQVksa0JBS1g7QUFMRCxXQUFZLGtCQUFrQjtJQUM1QixxRUFBYztJQUNkLG1GQUFxQjtJQUNyQix1RUFBZTtJQUNmLDZFQUFrQjtBQUNwQixDQUFDLEVBTFcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFLN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9Nb2RlbHMvVmVyaWZpY2F0aW9uU3RhdHVzLnRzP2I2YjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gVmVyaWZpY2F0aW9uU3RhdHVzIHtcclxuICBWZXJpZmllZCA9IDIwMCxcclxuICBBbHJlYWR5VmVyaWZpZWQgPSAzMDEsXHJcbiAgRm9yYmlkZGVuID0gNDAzLFxyXG4gIFVua25vd25FcnJvciA9IDUwMCxcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///686\n')},6523:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nconst VerifyEmail_1 = __webpack_require__(5086);\r\nconst VerificationStatus_1 = __webpack_require__(686);\r\nfunction isValidObjectId(id) {\r\n    return /^[a-f\\d]{24}$/i.test(id);\r\n}\r\nfunction isValidToken(token) {\r\n    return typeof token === "string" && token.length > 0;\r\n}\r\nfunction init() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const urlParams = new URLSearchParams(window.location.search);\r\n        const id = urlParams.get("id");\r\n        const token = urlParams.get("verificationCode");\r\n        const validation = document.getElementById("verify-validation");\r\n        if (id && token && isValidObjectId(id) && isValidToken(token)) {\r\n            const verified = yield (0, VerifyEmail_1.VerifyEmail)(id, token);\r\n            if (verified === VerificationStatus_1.VerificationStatus.Verified) {\r\n                window.location.replace("/pages/login/login.html");\r\n            }\r\n            else if (verified === VerificationStatus_1.VerificationStatus.AlreadyVerified) {\r\n                window.location.replace("/pages/login/login.html");\r\n            }\r\n            else {\r\n                // Update the page to display an error message\r\n                validation.textContent = "Verification failed. Please try again.";\r\n                validation.style.display = "block";\r\n            }\r\n        }\r\n        else {\r\n            // Update the page to display an error message\r\n            validation.textContent = "Invalid URL or parameters.";\r\n            validation.style.display = "block";\r\n        }\r\n    });\r\n}\r\ninit();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUyMy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdEQUFvRTtBQUNwRSxzREFBcUU7QUFFckUsU0FBUyxlQUFlLENBQUMsRUFBVTtJQUNqQyxPQUFPLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsS0FBYTtJQUNqQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBRUQsU0FBZSxJQUFJOztRQUNqQixNQUFNLFNBQVMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlELE1BQU0sRUFBRSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0IsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVoRSxJQUFJLEVBQUUsSUFBSSxLQUFLLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM3RCxNQUFNLFFBQVEsR0FBRyxNQUFNLDZCQUFXLEVBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTlDLElBQUksUUFBUSxLQUFLLHVDQUFrQixDQUFDLFFBQVEsRUFBRTtnQkFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQzthQUNwRDtpQkFBTSxJQUFJLFFBQVEsS0FBSyx1Q0FBa0IsQ0FBQyxlQUFlLEVBQUU7Z0JBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0wsOENBQThDO2dCQUM5QyxVQUFVLENBQUMsV0FBVyxHQUFHLHdDQUF3QyxDQUFDO2dCQUNsRSxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7YUFDcEM7U0FDRjthQUFNO1lBQ0wsOENBQThDO1lBQzlDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLENBQUM7WUFDdEQsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUFBO0FBQ0QsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9WaWV3cy9WZXJpZnkgRW1haWwvdmVyaWZ5RW1haWwudHM/MWI0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJpZnlFbWFpbCB9IGZyb20gXCIuLi8uLi9Db250cm9sbGVycy9TaWduIHVwL1ZlcmlmeUVtYWlsXCI7XHJcbmltcG9ydCB7IFZlcmlmaWNhdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvVmVyaWZpY2F0aW9uU3RhdHVzXCI7XHJcblxyXG5mdW5jdGlvbiBpc1ZhbGlkT2JqZWN0SWQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAvXlthLWZcXGRdezI0fSQvaS50ZXN0KGlkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZFRva2VuKHRva2VuOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gdHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiICYmIHRva2VuLmxlbmd0aCA+IDA7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICBjb25zdCBpZCA9IHVybFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICBjb25zdCB0b2tlbiA9IHVybFBhcmFtcy5nZXQoXCJ2ZXJpZmljYXRpb25Db2RlXCIpO1xyXG4gIGNvbnN0IHZhbGlkYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcmlmeS12YWxpZGF0aW9uXCIpO1xyXG5cclxuICBpZiAoaWQgJiYgdG9rZW4gJiYgaXNWYWxpZE9iamVjdElkKGlkKSAmJiBpc1ZhbGlkVG9rZW4odG9rZW4pKSB7XHJcbiAgICBjb25zdCB2ZXJpZmllZCA9IGF3YWl0IFZlcmlmeUVtYWlsKGlkLCB0b2tlbik7XHJcblxyXG4gICAgaWYgKHZlcmlmaWVkID09PSBWZXJpZmljYXRpb25TdGF0dXMuVmVyaWZpZWQpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiKTtcclxuICAgIH0gZWxzZSBpZiAodmVyaWZpZWQgPT09IFZlcmlmaWNhdGlvblN0YXR1cy5BbHJlYWR5VmVyaWZpZWQpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgcGFnZSB0byBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2VcclxuICAgICAgdmFsaWRhdGlvbi50ZXh0Q29udGVudCA9IFwiVmVyaWZpY2F0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIjtcclxuICAgICAgdmFsaWRhdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBVcGRhdGUgdGhlIHBhZ2UgdG8gZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlXHJcbiAgICB2YWxpZGF0aW9uLnRleHRDb250ZW50ID0gXCJJbnZhbGlkIFVSTCBvciBwYXJhbWV0ZXJzLlwiO1xyXG4gICAgdmFsaWRhdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH1cclxufVxyXG5pbml0KCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6523\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\n// static API_BASE_URL = "http://localhost:5000";\r\nConstants.API_BASE_URL = "https://elliotapiserver.com";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFNBQVM7O0FBQXRCLDhCQUdDO0FBRkMsaURBQWlEO0FBQzFDLHNCQUFZLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9Db25zdGFudHMvQ29uc3RhbnRzLnRzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgLy8gc3RhdGljIEFQSV9CQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCI7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9IFwiaHR0cHM6Ly9lbGxpb3RhcGlzZXJ2ZXIuY29tXCI7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}var __webpack_exports__=__webpack_require__(6523)})();