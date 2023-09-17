(()=>{"use strict";var __webpack_modules__={954:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.CheckLogin = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction CheckLogin() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const status = {\r\n            LoggedIn: false,\r\n            EmailVerificationRequired: false,\r\n            Unauthorized: false,\r\n        };\r\n        try {\r\n            const token = localStorage.getItem("token");\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/isUserAuthenticated`, {\r\n                method: "GET",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                    Authorization: `Bearer ${token}`,\r\n                },\r\n            });\r\n            switch (response.status) {\r\n                case 201:\r\n                    status.LoggedIn = true;\r\n                    break;\r\n                case 401:\r\n                    status.EmailVerificationRequired = true;\r\n                    break;\r\n                case 403:\r\n                    status.Unauthorized = true;\r\n                    break;\r\n                default:\r\n                    throw new Error("Unknown error");\r\n            }\r\n        }\r\n        catch (error) {\r\n            status.Unauthorized = true;\r\n        }\r\n        return status;\r\n    });\r\n}\r\nexports.CheckLogin = CheckLogin;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTU0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5RDtBQVF6RCxTQUFzQixVQUFVOztRQUM5QixNQUFNLE1BQU0sR0FBZ0I7WUFDMUIsUUFBUSxFQUFFLEtBQUs7WUFDZix5QkFBeUIsRUFBRSxLQUFLO1lBQ2hDLFlBQVksRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLHFCQUFTLENBQUMsWUFBWSxnQ0FBZ0MsRUFBRTtnQkFDdEYsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRTtpQkFDakM7YUFDRixDQUFDLENBQUM7WUFFSCxRQUFRLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZCLEtBQUssR0FBRztvQkFDTixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQztvQkFDeEMsTUFBTTtnQkFDUixLQUFLLEdBQUc7b0JBQ04sTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUNwQztTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FBQTtBQW5DRCxnQ0FtQ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9Db250cm9sbGVycy9Mb2dpbi9DaGVja0xvZ2luLnRzPzIxMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSBcIi4uLy4uLy4uL0NvbnN0YW50cy9Db25zdGFudHNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW5TdGF0dXMge1xyXG4gIExvZ2dlZEluOiBib29sZWFuO1xyXG4gIEVtYWlsVmVyaWZpY2F0aW9uUmVxdWlyZWQ6IGJvb2xlYW47XHJcbiAgVW5hdXRob3JpemVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gQ2hlY2tMb2dpbigpOiBQcm9taXNlPExvZ2luU3RhdHVzPiB7XHJcbiAgY29uc3Qgc3RhdHVzOiBMb2dpblN0YXR1cyA9IHtcclxuICAgIExvZ2dlZEluOiBmYWxzZSxcclxuICAgIEVtYWlsVmVyaWZpY2F0aW9uUmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgVW5hdXRob3JpemVkOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtDb25zdGFudHMuQVBJX0JBU0VfVVJMfS9hcGkvdXNlcnMvaXNVc2VyQXV0aGVudGljYXRlZGAsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICBjYXNlIDIwMTpcclxuICAgICAgICBzdGF0dXMuTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDQwMTpcclxuICAgICAgICBzdGF0dXMuRW1haWxWZXJpZmljYXRpb25SZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgNDAzOlxyXG4gICAgICAgIHN0YXR1cy5VbmF1dGhvcml6ZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gZXJyb3JcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHN0YXR1cy5VbmF1dGhvcml6ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXR1cztcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///954\n')},3936:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.getNotifications = void 0;\r\nconst Constants_1 = __webpack_require__(2079);\r\nfunction getNotifications() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const token = localStorage.getItem("token");\r\n            const response = yield fetch(`${Constants_1.Constants.API_BASE_URL}/api/users/notifications`, {\r\n                method: "GET",\r\n                headers: {\r\n                    "Content-Type": "application/json",\r\n                    Authorization: `Bearer ${token}`,\r\n                },\r\n            });\r\n            console.log(response);\r\n            if (response.status === 404) {\r\n                return null;\r\n            }\r\n            try {\r\n                const data = yield response.json();\r\n                return data;\r\n            }\r\n            catch (error) {\r\n                throw new Error("Error parsing response");\r\n            }\r\n        }\r\n        catch (error) {\r\n            return null;\r\n        }\r\n    });\r\n}\r\nexports.getNotifications = getNotifications;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkzNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFHekQsU0FBc0IsZ0JBQWdCOztRQUNwQyxJQUFJO1lBQ0YsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLHFCQUFTLENBQUMsWUFBWSwwQkFBMEIsRUFBRTtnQkFDaEYsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7b0JBQ2xDLGFBQWEsRUFBRSxVQUFVLEtBQUssRUFBRTtpQkFDakM7YUFDRixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXRCLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFFRCxJQUFJO2dCQUNGLE1BQU0sSUFBSSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNuQyxPQUFPLElBQWdDLENBQUM7YUFDekM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7YUFDM0M7U0FDRjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Q0FBQTtBQXpCRCw0Q0F5QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9zcmMvVHlwZVNjcmlwdC9BdXRoZW50aWNhdGlvbi9Db250cm9sbGVycy9Ob3RpZmljYXRpb25zL2dldE5vdGlmaWNhdGlvbnMudHM/NzZjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tIFwiLi4vLi4vLi4vQ29uc3RhbnRzL0NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2RlbCB9IGZyb20gXCIuLi8uLi9Nb2RlbHMvTm90aWZpY2F0aW9uc01vZGVsXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Tm90aWZpY2F0aW9ucygpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtDb25zdGFudHMuQVBJX0JBU0VfVVJMfS9hcGkvdXNlcnMvbm90aWZpY2F0aW9uc2AsIHtcclxuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIGRhdGEgYXMgQXJyYXk8Tm90aWZpY2F0aW9uTW9kZWw+O1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXJyb3IgcGFyc2luZyByZXNwb25zZVwiKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3936\n')},4068:function(__unused_webpack_module,exports,__webpack_require__){eval('\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.displayNotifications = void 0;\r\nconst generateDateString_1 = __webpack_require__(3513);\r\nconst CheckLogin_1 = __webpack_require__(954);\r\nconst getNotifications_1 = __webpack_require__(3936);\r\nconst displayNotifications = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    try {\r\n        const authenticated = yield (0, CheckLogin_1.CheckLogin)();\r\n        if (!authenticated.LoggedIn) {\r\n            return window.location.replace("/pages/login/login");\r\n        }\r\n        const notifications = yield (0, getNotifications_1.getNotifications)();\r\n        if (notifications === null) {\r\n            return;\r\n        }\r\n        console.log(notifications);\r\n        const notificationsContainer = document.getElementById("notifications-container");\r\n        notificationsContainer.innerHTML = "";\r\n        notifications.forEach((notification) => {\r\n            const notificationElement = createNotificationElement(notification);\r\n            notificationsContainer.appendChild(notificationElement);\r\n        });\r\n        const notificationsCount = document.getElementById("notifications-count");\r\n        if (notificationsCount) {\r\n            notificationsCount.innerHTML = notifications.length.toString();\r\n        }\r\n    }\r\n    catch (error) {\r\n        console.error("Error displaying notifications:", error);\r\n    }\r\n});\r\nexports.displayNotifications = displayNotifications;\r\nconst createNotificationElement = (notification) => {\r\n    const { profileImgColor, displayName, message, createdAt } = notification;\r\n    const notificationElement = document.createElement("button");\r\n    notificationElement.classList.add("c-notification");\r\n    notificationElement.innerHTML = `\r\n    <div class="c-notification__profile-img" style="background-color: ${profileImgColor}">${displayName[0]}</div>\r\n    <div class="c-notification__content">\r\n      <div class="c-notification__details">\r\n        <div class="c-notification__display-name">${displayName}</div>\r\n        <div class="c-notification__message">${message}</div>\r\n        <div class="c-notification__not-seen"></div>\r\n      </div>\r\n      <span class="c-notification__date">${(0, generateDateString_1.GenerateDateString)(createdAt)}</span>\r\n    </div>\r\n  `;\r\n    return notificationElement;\r\n};\r\n(0, exports.displayNotifications)();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDA2OC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBeUU7QUFDekUsOENBQWdFO0FBQ2hFLHFEQUFvRjtBQUU3RSxNQUFNLG9CQUFvQixHQUFHLEdBQVMsRUFBRTtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxhQUFhLEdBQUcsTUFBTSwyQkFBVSxHQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsTUFBTSxhQUFhLEdBQUcsTUFBTSx1Q0FBZ0IsR0FBRSxDQUFDO1FBQy9DLElBQUksYUFBYSxLQUFLLElBQUksRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTNCLE1BQU0sc0JBQXNCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2xGLHNCQUFzQixDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFdEMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3JDLE1BQU0sbUJBQW1CLEdBQUcseUJBQXlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDcEUsc0JBQXNCLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUMxRSxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLGtCQUFrQixDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2hFO0tBQ0Y7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDekQ7QUFDSCxDQUFDLEVBQUM7QUE3QlcsNEJBQW9CLHdCQTZCL0I7QUFFRixNQUFNLHlCQUF5QixHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUU7SUFDakQsTUFBTSxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLFlBQVksQ0FBQztJQUUxRSxNQUFNLG1CQUFtQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXBELG1CQUFtQixDQUFDLFNBQVMsR0FBRzt3RUFDc0MsZUFBZSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7OztvREFHdEQsV0FBVzsrQ0FDaEIsT0FBTzs7OzJDQUdYLDJDQUFrQixFQUFDLFNBQVMsQ0FBQzs7R0FFckUsQ0FBQztJQUVGLE9BQU8sbUJBQW1CLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBRUYsZ0NBQW9CLEdBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0F1dGhlbnRpY2F0aW9uL1ZpZXdzL05vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9uc1ZpZXcudHM/YTliMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZW5lcmF0ZURhdGVTdHJpbmcgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9nZW5lcmF0ZURhdGVTdHJpbmdcIjtcclxuaW1wb3J0IHsgQ2hlY2tMb2dpbiB9IGZyb20gXCIuLi8uLi9Db250cm9sbGVycy9Mb2dpbi9DaGVja0xvZ2luXCI7XHJcbmltcG9ydCB7IGdldE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwiLi4vLi4vQ29udHJvbGxlcnMvTm90aWZpY2F0aW9ucy9nZXROb3RpZmljYXRpb25zXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZGlzcGxheU5vdGlmaWNhdGlvbnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWQgPSBhd2FpdCBDaGVja0xvZ2luKCk7XHJcbiAgICBpZiAoIWF1dGhlbnRpY2F0ZWQuTG9nZ2VkSW4pIHtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiL3BhZ2VzL2xvZ2luL2xvZ2luXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCBnZXROb3RpZmljYXRpb25zKCk7XHJcbiAgICBpZiAobm90aWZpY2F0aW9ucyA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cobm90aWZpY2F0aW9ucyk7XHJcblxyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZpY2F0aW9ucy1jb250YWluZXJcIik7XHJcbiAgICBub3RpZmljYXRpb25zQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgbm90aWZpY2F0aW9ucy5mb3JFYWNoKChub3RpZmljYXRpb24pID0+IHtcclxuICAgICAgY29uc3Qgbm90aWZpY2F0aW9uRWxlbWVudCA9IGNyZWF0ZU5vdGlmaWNhdGlvbkVsZW1lbnQobm90aWZpY2F0aW9uKTtcclxuICAgICAgbm90aWZpY2F0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChub3RpZmljYXRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbnNDb3VudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90aWZpY2F0aW9ucy1jb3VudFwiKTtcclxuICAgIGlmIChub3RpZmljYXRpb25zQ291bnQpIHtcclxuICAgICAgbm90aWZpY2F0aW9uc0NvdW50LmlubmVySFRNTCA9IG5vdGlmaWNhdGlvbnMubGVuZ3RoLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkaXNwbGF5aW5nIG5vdGlmaWNhdGlvbnM6XCIsIGVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVOb3RpZmljYXRpb25FbGVtZW50ID0gKG5vdGlmaWNhdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgcHJvZmlsZUltZ0NvbG9yLCBkaXNwbGF5TmFtZSwgbWVzc2FnZSwgY3JlYXRlZEF0IH0gPSBub3RpZmljYXRpb247XHJcblxyXG4gIGNvbnN0IG5vdGlmaWNhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIG5vdGlmaWNhdGlvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImMtbm90aWZpY2F0aW9uXCIpO1xyXG5cclxuICBub3RpZmljYXRpb25FbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjLW5vdGlmaWNhdGlvbl9fcHJvZmlsZS1pbWdcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7cHJvZmlsZUltZ0NvbG9yfVwiPiR7ZGlzcGxheU5hbWVbMF19PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYy1ub3RpZmljYXRpb25fX2NvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImMtbm90aWZpY2F0aW9uX19kZXRhaWxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImMtbm90aWZpY2F0aW9uX19kaXNwbGF5LW5hbWVcIj4ke2Rpc3BsYXlOYW1lfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjLW5vdGlmaWNhdGlvbl9fbWVzc2FnZVwiPiR7bWVzc2FnZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYy1ub3RpZmljYXRpb25fX25vdC1zZWVuXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImMtbm90aWZpY2F0aW9uX19kYXRlXCI+JHtHZW5lcmF0ZURhdGVTdHJpbmcoY3JlYXRlZEF0KX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG5cclxuICByZXR1cm4gbm90aWZpY2F0aW9uRWxlbWVudDtcclxufTtcclxuXHJcbmRpc3BsYXlOb3RpZmljYXRpb25zKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4068\n')},2079:(__unused_webpack_module,exports)=>{eval('\r\nvar _a, _b;\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.Constants = void 0;\r\nconst env = ((_b = (_a = document.getElementById("jsEnvironment")) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.trim()) || "development";\r\nclass Constants {\r\n}\r\nexports.Constants = Constants;\r\nConstants.API_BASE_URL = env === "production"\r\n    ? "https://elliotapiserver.com"\r\n    : env === "test"\r\n        ? "https://test.elliotapiserver.com"\r\n        : "http://localhost:5001";\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjA3OS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxHQUFHLEdBQUcscUJBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLDBDQUFFLFdBQVcsMENBQUUsSUFBSSxFQUFFLEtBQUksYUFBYSxDQUFDO0FBRTNGLE1BQWEsU0FBUzs7QUFBdEIsOEJBT0M7QUFOUSxzQkFBWSxHQUNqQixHQUFHLEtBQUssWUFBWTtJQUNsQixDQUFDLENBQUMsNkJBQTZCO0lBQy9CLENBQUMsQ0FBQyxHQUFHLEtBQUssTUFBTTtRQUNoQixDQUFDLENBQUMsa0NBQWtDO1FBQ3BDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BleGFtcGxlL2Jhc2ljcy8uL3NyYy9UeXBlU2NyaXB0L0NvbnN0YW50cy9Db25zdGFudHMudHM/ZjZjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlbnYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRW52aXJvbm1lbnRcIik/LnRleHRDb250ZW50Py50cmltKCkgfHwgXCJkZXZlbG9wbWVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgc3RhdGljIEFQSV9CQVNFX1VSTCA9XHJcbiAgICBlbnYgPT09IFwicHJvZHVjdGlvblwiXHJcbiAgICAgID8gXCJodHRwczovL2VsbGlvdGFwaXNlcnZlci5jb21cIlxyXG4gICAgICA6IGVudiA9PT0gXCJ0ZXN0XCJcclxuICAgICAgPyBcImh0dHBzOi8vdGVzdC5lbGxpb3RhcGlzZXJ2ZXIuY29tXCJcclxuICAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMVwiO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2079\n')},3513:(__unused_webpack_module,exports)=>{eval('\r\nObject.defineProperty(exports, "__esModule", ({ value: true }));\r\nexports.GenerateDateString = void 0;\r\nfunction GenerateDateString(isoDate) {\r\n    const date = new Date(isoDate);\r\n    const strArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];\r\n    const d = date.getDate();\r\n    const m = strArray[date.getMonth()];\r\n    const y = date.getFullYear();\r\n    const hh = date.getHours();\r\n    const mm = date.getMinutes();\r\n    return `${m} ${d <= 9 ? "0" + d : d}, ${y} at ${hh >= 12 ? hh - 12 : hh}:${mm <= 9 ? "0" + mm : mm} ${hh >= 12 && mm > 0 ? "PM" : "AM"}`;\r\n}\r\nexports.GenerateDateString = GenerateDateString;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUxMy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixrQkFBa0IsQ0FBQyxPQUFhO0lBQzlDLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLE1BQU0sUUFBUSxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN0RyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDekIsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzdCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUNoRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFDOUIsRUFBRSxDQUFDO0FBQ0wsQ0FBQztBQVhELGdEQVdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGV4YW1wbGUvYmFzaWNzLy4vc3JjL1R5cGVTY3JpcHQvaGVscGVycy9nZW5lcmF0ZURhdGVTdHJpbmcudHM/ODhhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gR2VuZXJhdGVEYXRlU3RyaW5nKGlzb0RhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShpc29EYXRlKTtcclxuICBjb25zdCBzdHJBcnJheSA9IFtcIkphblwiLCBcIkZlYlwiLCBcIk1hclwiLCBcIkFwclwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bFwiLCBcIkF1Z1wiLCBcIlNlcFwiLCBcIk9jdFwiLCBcIk5vdlwiLCBcIkRlY1wiXTtcclxuICBjb25zdCBkID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgY29uc3QgbSA9IHN0ckFycmF5W2RhdGUuZ2V0TW9udGgoKV07XHJcbiAgY29uc3QgeSA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBoaCA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICBjb25zdCBtbSA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gIHJldHVybiBgJHttfSAke2QgPD0gOSA/IFwiMFwiICsgZCA6IGR9LCAke3l9IGF0ICR7aGggPj0gMTIgPyBoaCAtIDEyIDogaGh9OiR7bW0gPD0gOSA/IFwiMFwiICsgbW0gOiBtbX0gJHtcclxuICAgIGhoID49IDEyICYmIG1tID4gMCA/IFwiUE1cIiA6IFwiQU1cIlxyXG4gIH1gO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3513\n')}},__webpack_module_cache__={};function __webpack_require__(n){var Q=__webpack_module_cache__[n];if(void 0!==Q)return Q.exports;var t=__webpack_module_cache__[n]={exports:{}};return __webpack_modules__[n].call(t.exports,t,t.exports,__webpack_require__),t.exports}var __webpack_exports__=__webpack_require__(4068)})();