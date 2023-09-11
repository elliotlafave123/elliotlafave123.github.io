(()=>{"use strict";var __webpack_modules__={2514:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.ResetPassword = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nconst ResetPasswordResult_1 = __webpack_require__(2050);\r\nfunction ResetPassword(resetPassword) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/resetpassword/${resetPassword.id}/${resetPassword.token}`, {\r\n                method: "POST",\r\n                headers: { "Content-Type": "application/json" },\r\n                body: JSON.stringify({\r\n                    email: resetPassword.email,\r\n                    password: resetPassword.password,\r\n                    passwordConfirmation: resetPassword.passwordConfirmation,\r\n                }),\r\n            });\r\n            if (response.status === 200) {\r\n                return ResetPasswordResult_1.ResetPasswordResult.Success;\r\n            }\r\n            if (response.status === 403) {\r\n                return ResetPasswordResult_1.ResetPasswordResult.InvalidEmailOrPassword;\r\n            }\r\n            if (response.status === 301) {\r\n                return ResetPasswordResult_1.ResetPasswordResult.EmailVerificationRequired;\r\n            }\r\n            return ResetPasswordResult_1.ResetPasswordResult.Error;\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n            return ResetPasswordResult_1.ResetPasswordResult.Error;\r\n        }\r\n    });\r\n}\r\nexports.ResetPassword = ResetPassword;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUxNC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFFekQsd0RBQXVFO0FBRXZFLFNBQXNCLGFBQWEsQ0FBQyxhQUFpQzs7UUFDbkUsSUFBSTtZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLHFCQUFTLENBQUMsWUFBWSw0QkFBNEIsYUFBYSxDQUFDLEVBQUUsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQzlGO2dCQUNFLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtnQkFDL0MsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ25CLEtBQUssRUFBRSxhQUFhLENBQUMsS0FBSztvQkFDMUIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRO29CQUNoQyxvQkFBb0IsRUFBRSxhQUFhLENBQUMsb0JBQW9CO2lCQUN6RCxDQUFDO2FBQ0gsQ0FDRixDQUFDO1lBRUYsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsT0FBTyx5Q0FBbUIsQ0FBQyxPQUFPLENBQUM7YUFDcEM7WUFDRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUMzQixPQUFPLHlDQUFtQixDQUFDLHNCQUFzQixDQUFDO2FBQ25EO1lBQ0QsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDM0IsT0FBTyx5Q0FBbUIsQ0FBQyx5QkFBeUIsQ0FBQzthQUN0RDtZQUVELE9BQU8seUNBQW1CLENBQUMsS0FBSyxDQUFDO1NBQ2xDO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25CLE9BQU8seUNBQW1CLENBQUMsS0FBSyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztDQUFBO0FBOUJELHNDQThCQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL0NvbnRyb2xsZXJzL1Jlc2V0IFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmQudHM/NGJjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vLi4vQ29uc3RhbnRzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1Jlc2V0UGFzc3dvcmRNb2RlbFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVzdWx0IH0gZnJvbSBcIi4uLy4uL01vZGVscy9SZXNldFBhc3N3b3JkUmVzdWx0XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUmVzZXRQYXNzd29yZChyZXNldFBhc3N3b3JkOiBSZXNldFBhc3N3b3JkTW9kZWwpOiBQcm9taXNlPFJlc2V0UGFzc3dvcmRSZXN1bHQ+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYCR7Q29uc3RhbnRzLkFQSV9CQVNFX1VSTH0vYXBpL3VzZXJzL3Jlc2V0cGFzc3dvcmQvJHtyZXNldFBhc3N3b3JkLmlkfS8ke3Jlc2V0UGFzc3dvcmQudG9rZW59YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGVtYWlsOiByZXNldFBhc3N3b3JkLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHJlc2V0UGFzc3dvcmQucGFzc3dvcmQsXHJcbiAgICAgICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogcmVzZXRQYXNzd29yZC5wYXNzd29yZENvbmZpcm1hdGlvbixcclxuICAgICAgICB9KSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFJlc2V0UGFzc3dvcmRSZXN1bHQuU3VjY2VzcztcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xyXG4gICAgICByZXR1cm4gUmVzZXRQYXNzd29yZFJlc3VsdC5JbnZhbGlkRW1haWxPclBhc3N3b3JkO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMzAxKSB7XHJcbiAgICAgIHJldHVybiBSZXNldFBhc3N3b3JkUmVzdWx0LkVtYWlsVmVyaWZpY2F0aW9uUmVxdWlyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFJlc2V0UGFzc3dvcmRSZXN1bHQuRXJyb3I7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybiBSZXNldFBhc3N3b3JkUmVzdWx0LkVycm9yO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2514\n')},2050:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.ResetPasswordResult = void 0;\r\nvar ResetPasswordResult;\r\n(function (ResetPasswordResult) {\r\n    ResetPasswordResult[ResetPasswordResult["Success"] = 0] = "Success";\r\n    ResetPasswordResult[ResetPasswordResult["InvalidEmailOrPassword"] = 1] = "InvalidEmailOrPassword";\r\n    ResetPasswordResult[ResetPasswordResult["EmailVerificationRequired"] = 2] = "EmailVerificationRequired";\r\n    ResetPasswordResult[ResetPasswordResult["Error"] = 3] = "Error";\r\n})(ResetPasswordResult = exports.ResetPasswordResult || (exports.ResetPasswordResult = {}));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA1MC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFZLG1CQUtYO0FBTEQsV0FBWSxtQkFBbUI7SUFDN0IsbUVBQU87SUFDUCxpR0FBc0I7SUFDdEIsdUdBQXlCO0lBQ3pCLCtEQUFLO0FBQ1AsQ0FBQyxFQUxXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBSzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvQXV0aGVudGljYXRpb24vTW9kZWxzL1Jlc2V0UGFzc3dvcmRSZXN1bHQudHM/NjVkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBSZXNldFBhc3N3b3JkUmVzdWx0IHtcclxuICBTdWNjZXNzLFxyXG4gIEludmFsaWRFbWFpbE9yUGFzc3dvcmQsXHJcbiAgRW1haWxWZXJpZmljYXRpb25SZXF1aXJlZCxcclxuICBFcnJvcixcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2050\n')},583:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.resetPassword = void 0;\r\nconst ResetPassword_1 = __webpack_require__(2514);\r\nconst ResetPasswordResult_1 = __webpack_require__(2050);\r\nfunction resetPassword() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const form = document.getElementById("resetPasswordForm");\r\n        const password = document.getElementById("password");\r\n        const confirmPassword = document.getElementById("confirmPassword");\r\n        const errorMessagePassword = document.getElementById("errorMessagePassword");\r\n        const errorMessageConfirmPassword = document.getElementById("errorMessageConfirmPassword");\r\n        form.addEventListener("submit", (e) => __awaiter(this, void 0, void 0, function* () {\r\n            e.preventDefault();\r\n            if (password.value !== confirmPassword.value) {\r\n                console.log(errorMessagePassword, errorMessageConfirmPassword);\r\n                errorMessagePassword.style.display = "block";\r\n                errorMessagePassword.classList.remove("hidden");\r\n                errorMessageConfirmPassword.style.display = "block";\r\n                return;\r\n            }\r\n            else {\r\n                errorMessagePassword.style.display = "none";\r\n                errorMessageConfirmPassword.style.display = "none";\r\n            }\r\n            const urlParams = new URLSearchParams(window.location.search);\r\n            const id = urlParams.get("id");\r\n            const token = urlParams.get("passwordResetCode");\r\n            const email = urlParams.get("email");\r\n            if (id && token && email) {\r\n                const resetPasswordData = {\r\n                    id: id,\r\n                    token: token,\r\n                    email: email,\r\n                    password: password.value,\r\n                    passwordConfirmation: confirmPassword.value,\r\n                };\r\n                const resetResult = yield (0, ResetPassword_1.ResetPassword)(resetPasswordData);\r\n                switch (resetResult) {\r\n                    case ResetPasswordResult_1.ResetPasswordResult.Success:\r\n                        window.location.replace("/pages/login/login.html");\r\n                        break;\r\n                    case ResetPasswordResult_1.ResetPasswordResult.InvalidEmailOrPassword:\r\n                        errorMessagePassword.innerText = "Invalid password.";\r\n                        errorMessagePassword.style.display = "block";\r\n                        break;\r\n                    case ResetPasswordResult_1.ResetPasswordResult.EmailVerificationRequired:\r\n                        errorMessagePassword.innerText = "Email verification required.";\r\n                        break;\r\n                    case ResetPasswordResult_1.ResetPasswordResult.Error:\r\n                        errorMessagePassword.innerText = "An error occurred while resetting the password.";\r\n                        errorMessagePassword.style.display = "block";\r\n                        break;\r\n                    default:\r\n                        break;\r\n                }\r\n            }\r\n            else {\r\n                console.log("Missing URL parameters");\r\n            }\r\n        }));\r\n    });\r\n}\r\nexports.resetPassword = resetPassword;\r\nresetPassword();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxPQUFPLENBQUM7d0JBQzdDLE1BQU07b0JBQ1I7d0JBQ0UsTUFBTTtpQkFDVDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQzthQUN2QztRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztDQUFBO0FBN0RELHNDQTZEQztBQUVELGFBQWEsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvQXV0aGVudGljYXRpb24vVmlld3MvUmVzZXQgUGFzc3dvcmQvcmVzZXRQYXNzd29yZC50cz8yNmQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc2V0UGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlcnMvUmVzZXQgUGFzc3dvcmQvUmVzZXRQYXNzd29yZFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkTW9kZWwgfSBmcm9tIFwiLi4vLi4vTW9kZWxzL1Jlc2V0UGFzc3dvcmRNb2RlbFwiO1xyXG5pbXBvcnQgeyBSZXNldFBhc3N3b3JkUmVzdWx0IH0gZnJvbSBcIi4uLy4uL01vZGVscy9SZXNldFBhc3N3b3JkUmVzdWx0XCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXNldFBhc3N3b3JkRm9ybVwiKTtcclxuICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGNvbnN0IGVycm9yTWVzc2FnZVBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvck1lc3NhZ2VQYXNzd29yZFwiKTtcclxuICBjb25zdCBlcnJvck1lc3NhZ2VDb25maXJtUGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVycm9yTWVzc2FnZUNvbmZpcm1QYXNzd29yZFwiKTtcclxuXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkLnZhbHVlICE9PSBjb25maXJtUGFzc3dvcmQudmFsdWUpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlUGFzc3dvcmQsIGVycm9yTWVzc2FnZUNvbmZpcm1QYXNzd29yZCk7XHJcbiAgICAgIGVycm9yTWVzc2FnZVBhc3N3b3JkLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgIGVycm9yTWVzc2FnZVBhc3N3b3JkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICAgIGVycm9yTWVzc2FnZUNvbmZpcm1QYXNzd29yZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvck1lc3NhZ2VQYXNzd29yZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIGVycm9yTWVzc2FnZUNvbmZpcm1QYXNzd29yZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXJsUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgICBjb25zdCBpZCA9IHVybFBhcmFtcy5nZXQoXCJpZFwiKTtcclxuICAgIGNvbnN0IHRva2VuID0gdXJsUGFyYW1zLmdldChcInBhc3N3b3JkUmVzZXRDb2RlXCIpO1xyXG4gICAgY29uc3QgZW1haWwgPSB1cmxQYXJhbXMuZ2V0KFwiZW1haWxcIik7XHJcblxyXG4gICAgaWYgKGlkICYmIHRva2VuICYmIGVtYWlsKSB7XHJcbiAgICAgIGNvbnN0IHJlc2V0UGFzc3dvcmREYXRhOiBSZXNldFBhc3N3b3JkTW9kZWwgPSB7XHJcbiAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgIHRva2VuOiB0b2tlbixcclxuICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiBjb25maXJtUGFzc3dvcmQudmFsdWUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCByZXNldFJlc3VsdCA9IGF3YWl0IFJlc2V0UGFzc3dvcmQocmVzZXRQYXNzd29yZERhdGEpO1xyXG5cclxuICAgICAgc3dpdGNoIChyZXNldFJlc3VsdCkge1xyXG4gICAgICAgIGNhc2UgUmVzZXRQYXNzd29yZFJlc3VsdC5TdWNjZXNzOlxyXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoXCIvcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUmVzZXRQYXNzd29yZFJlc3VsdC5JbnZhbGlkRW1haWxPclBhc3N3b3JkOlxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlUGFzc3dvcmQuaW5uZXJUZXh0ID0gXCJJbnZhbGlkIHBhc3N3b3JkLlwiO1xyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlUGFzc3dvcmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgUmVzZXRQYXNzd29yZFJlc3VsdC5FbWFpbFZlcmlmaWNhdGlvblJlcXVpcmVkOlxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlUGFzc3dvcmQuaW5uZXJUZXh0ID0gXCJFbWFpbCB2ZXJpZmljYXRpb24gcmVxdWlyZWQuXCI7XHJcblxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSZXNldFBhc3N3b3JkUmVzdWx0LkVycm9yOlxyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlUGFzc3dvcmQuaW5uZXJUZXh0ID0gXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZXNldHRpbmcgdGhlIHBhc3N3b3JkLlwiO1xyXG4gICAgICAgICAgZXJyb3JNZXNzYWdlUGFzc3dvcmQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJNaXNzaW5nIFVSTCBwYXJhbWV0ZXJzXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5yZXNldFBhc3N3b3JkKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///583\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\n// static API_BASE_URL = "http://localhost:5000";\r\nConstants.API_BASE_URL = "https://elliotapiserver.com";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFNBQVM7O0FBQXRCLDhCQUdDO0FBRkMsaURBQWlEO0FBQzFDLHNCQUFZLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9Db25zdGFudHMvQ29uc3RhbnRzLnRzP2Y2YzgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgLy8gc3RhdGljIEFQSV9CQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCI7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9IFwiaHR0cHM6Ly9lbGxpb3RhcGlzZXJ2ZXIuY29tXCI7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2079\n')}},__webpack_module_cache__={};function __webpack_require__(s){var e=__webpack_module_cache__[s];if(void 0!==e)return e.exports;var Q=__webpack_module_cache__[s]={exports:{}};return __webpack_modules__[s].call(Q.exports,Q,Q.exports,__webpack_require__),Q.exports}var __webpack_exports__=__webpack_require__(583)})();