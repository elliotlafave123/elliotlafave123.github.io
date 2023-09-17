(()=>{var __webpack_modules__={4631:()=>{eval('// Define HTMLElements\r\nconst passwordInput = document.getElementById("password");\r\nconst errorMessagePassword = document.getElementById("errorMessagePassword");\r\nconst lengthCheck = document.getElementById("length");\r\nconst upperCheck = document.getElementById("upper");\r\nconst numberCheck = document.getElementById("number");\r\nconst specialCheck = document.getElementById("special");\r\nconst showPasswordEye = document.getElementById("ShowPasswordEye");\r\nconst hidePasswordEye = document.getElementById("HidePasswordEye");\r\n// Function to validate password\r\nconst validatePassword = () => {\r\n    const password = passwordInput.value;\r\n    [lengthCheck, upperCheck, numberCheck, specialCheck].forEach((check) => check.classList.remove("checked"));\r\n    // Validate length\r\n    if (password.length >= 8) {\r\n        lengthCheck.classList.add("active");\r\n    }\r\n    else {\r\n        lengthCheck.classList.remove("active");\r\n    }\r\n    // Validate uppercase and lowercase\r\n    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {\r\n        upperCheck.classList.add("active");\r\n    }\r\n    else {\r\n        upperCheck.classList.remove("active");\r\n    }\r\n    // Validate numbers\r\n    if (/\\d/.test(password)) {\r\n        numberCheck.classList.add("active");\r\n    }\r\n    else {\r\n        numberCheck.classList.remove("active");\r\n    }\r\n    // Validate special characters\r\n    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {\r\n        specialCheck.classList.add("active");\r\n    }\r\n    else {\r\n        specialCheck.classList.remove("active");\r\n    }\r\n    // Show/hide error message\r\n    if (lengthCheck.classList.contains("active") &&\r\n        upperCheck.classList.contains("active") &&\r\n        numberCheck.classList.contains("active") &&\r\n        specialCheck.classList.contains("active")) {\r\n        errorMessagePassword.style.display = "none"; // Change this to match your SCSS\r\n    }\r\n    else {\r\n        errorMessagePassword.style.display = "block"; // Change this to match your SCSS\r\n    }\r\n};\r\n// Event listener for password input change\r\npasswordInput.addEventListener("input", validatePassword);\r\n// Initialize hidden state of error message\r\nerrorMessagePassword.classList.add("hidden");\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDYzMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZXhhbXBsZS9iYXNpY3MvLi9Db21wb25lbnRBc3NldHMvc2ltcGxlQ29tcG9uZW50cy9wYXNzd29yZFJlcXVpcmVtZW50cy9wYXNzd29yZFJlcXVpcmVtZW50cy50cz85OWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQjtBQUN0QixNQUFNLGFBQWEsR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQXFCLENBQUM7QUFDaEcsTUFBTSxvQkFBb0IsR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBRSxDQUFDO0FBQzNGLE1BQU0sV0FBVyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDO0FBQ3BFLE1BQU0sVUFBVSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBRSxDQUFDO0FBQ2xFLE1BQU0sV0FBVyxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRSxDQUFDO0FBQ3BFLE1BQU0sWUFBWSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBRSxDQUFDO0FBQ3RFLE1BQU0sZUFBZSxHQUFnQixRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFFLENBQUM7QUFDakYsTUFBTSxlQUFlLEdBQWdCLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUUsQ0FBQztBQUVqRixnQ0FBZ0M7QUFDaEMsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDNUIsTUFBTSxRQUFRLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUVyQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUUzRyxrQkFBa0I7SUFDbEIsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN4QixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyQztTQUFNO1FBQ0wsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDeEM7SUFFRCxtQ0FBbUM7SUFDbkMsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDcEQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDcEM7U0FBTTtRQUNMLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsbUJBQW1CO0lBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN2QixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUNyQztTQUFNO1FBQ0wsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDeEM7SUFFRCw4QkFBOEI7SUFDOUIsSUFBSSx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0MsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDdEM7U0FBTTtRQUNMLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3pDO0lBRUQsMEJBQTBCO0lBQzFCLElBQ0UsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3hDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDeEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQ3pDO1FBQ0Esb0JBQW9CLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxpQ0FBaUM7S0FDL0U7U0FBTTtRQUNMLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsaUNBQWlDO0tBQ2hGO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsMkNBQTJDO0FBQzNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztBQUUxRCwyQ0FBMkM7QUFDM0Msb0JBQW9CLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIERlZmluZSBIVE1MRWxlbWVudHNcclxuY29uc3QgcGFzc3dvcmRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcclxuY29uc3QgZXJyb3JNZXNzYWdlUGFzc3dvcmQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvck1lc3NhZ2VQYXNzd29yZFwiKSE7XHJcbmNvbnN0IGxlbmd0aENoZWNrOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVuZ3RoXCIpITtcclxuY29uc3QgdXBwZXJDaGVjazogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVwcGVyXCIpITtcclxuY29uc3QgbnVtYmVyQ2hlY2s6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJudW1iZXJcIikhO1xyXG5jb25zdCBzcGVjaWFsQ2hlY2s6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVjaWFsXCIpITtcclxuY29uc3Qgc2hvd1Bhc3N3b3JkRXllOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiU2hvd1Bhc3N3b3JkRXllXCIpITtcclxuY29uc3QgaGlkZVBhc3N3b3JkRXllOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSGlkZVBhc3N3b3JkRXllXCIpITtcclxuXHJcbi8vIEZ1bmN0aW9uIHRvIHZhbGlkYXRlIHBhc3N3b3JkXHJcbmNvbnN0IHZhbGlkYXRlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG5cclxuICBbbGVuZ3RoQ2hlY2ssIHVwcGVyQ2hlY2ssIG51bWJlckNoZWNrLCBzcGVjaWFsQ2hlY2tdLmZvckVhY2goKGNoZWNrKSA9PiBjaGVjay5jbGFzc0xpc3QucmVtb3ZlKFwiY2hlY2tlZFwiKSk7XHJcblxyXG4gIC8vIFZhbGlkYXRlIGxlbmd0aFxyXG4gIGlmIChwYXNzd29yZC5sZW5ndGggPj0gOCkge1xyXG4gICAgbGVuZ3RoQ2hlY2suY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgbGVuZ3RoQ2hlY2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIC8vIFZhbGlkYXRlIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlXHJcbiAgaWYgKC9bYS16XS8udGVzdChwYXNzd29yZCkgJiYgL1tBLVpdLy50ZXN0KHBhc3N3b3JkKSkge1xyXG4gICAgdXBwZXJDaGVjay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1cHBlckNoZWNrLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgfVxyXG5cclxuICAvLyBWYWxpZGF0ZSBudW1iZXJzXHJcbiAgaWYgKC9cXGQvLnRlc3QocGFzc3dvcmQpKSB7XHJcbiAgICBudW1iZXJDaGVjay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBudW1iZXJDaGVjay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWRhdGUgc3BlY2lhbCBjaGFyYWN0ZXJzXHJcbiAgaWYgKC9bIUAjJCVeJiooKSwuP1wiOnt9fDw+XS8udGVzdChwYXNzd29yZCkpIHtcclxuICAgIHNwZWNpYWxDaGVjay5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzcGVjaWFsQ2hlY2suY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcblxyXG4gIC8vIFNob3cvaGlkZSBlcnJvciBtZXNzYWdlXHJcbiAgaWYgKFxyXG4gICAgbGVuZ3RoQ2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmXHJcbiAgICB1cHBlckNoZWNrLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJlxyXG4gICAgbnVtYmVyQ2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmXHJcbiAgICBzcGVjaWFsQ2hlY2suY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXHJcbiAgKSB7XHJcbiAgICBlcnJvck1lc3NhZ2VQYXNzd29yZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7IC8vIENoYW5nZSB0aGlzIHRvIG1hdGNoIHlvdXIgU0NTU1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlcnJvck1lc3NhZ2VQYXNzd29yZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAvLyBDaGFuZ2UgdGhpcyB0byBtYXRjaCB5b3VyIFNDU1NcclxuICB9XHJcbn07XHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgcGFzc3dvcmQgaW5wdXQgY2hhbmdlXHJcbnBhc3N3b3JkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHZhbGlkYXRlUGFzc3dvcmQpO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBoaWRkZW4gc3RhdGUgb2YgZXJyb3IgbWVzc2FnZVxyXG5lcnJvck1lc3NhZ2VQYXNzd29yZC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4iXX0=\n//# sourceURL=webpack-internal:///4631\n')}},__webpack_exports__={};__webpack_modules__[4631]()})();