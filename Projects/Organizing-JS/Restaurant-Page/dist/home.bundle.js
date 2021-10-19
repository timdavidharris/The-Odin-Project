/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nlet i = 0;\nlet homeDiv = document.createElement('div');\n\nfunction homePage(contentDivInput) {\n    let contentDiv = contentDivInput;\n    if (contentDiv === null) {\n        return homeDiv.style.display = 'none';\n    }\n    if (i === 0) {\n        contentDiv.append(homeDiv);\n        const homeHeaderDiv = document.createElement('div');\n        const homeHeaderH1 = document.createElement('h1');\n        const homeImage = document.createElement('img');\n        const infoP = document.createElement('p');\n        const reviewsDiv = document.createElement('div');\n        homeImage.src = '../assets/images/burger-overhead-shot.jpg';\n        homeDiv.setAttribute('class', 'page-div');\n        homeDiv.setAttribute('style', 'white-space: pre;');\n        homeHeaderH1.textContent = \"TIM'S BURGERS\";\n        homeHeaderDiv.append(homeHeaderH1);\n        homeDiv.append(homeHeaderDiv);\n        homeDiv.append(homeImage);\n        homeDiv.append(infoP);\n        homeDiv.append(reviewsDiv);\n        infoDivText(infoP);\n        reviewsDivText(reviewsDiv);\n        i++;\n    }\n    homeDiv.style.display = 'contents'; \n}\n\nfunction infoDivText(input) {\n    let infoP = input;\n    infoP.textContent = \"HOURS:\\r\\n\";\n    infoP.textContent += \"M-F - 10:10 AM to 10:10 PM\\r\\n\";\n    infoP.textContent += \"Sat & Sun - 9:45 AM to 11:00 PM\\r\\n\\r\\n\";\n    infoP.textContent += 'Welcome to Tim\\'s Burgers!\\r\\n';\n    infoP.textContent += 'We are a local, family-owned business that focuses on one thing:\\r\\n';\n    infoP.textContent += 'making the best damn burger you\\'ve ever had.\\r\\n';\n    infoP.textContent += 'Please place an order online or come in person to see for yourself!\\r\\n';\n}\n\nfunction reviewsDivText(input) {\n    let reviewsDiv = input;\n    const firstQuote = document.createElement('p');\n    const secondQuote = document.createElement('p');\n    const firstQuotePerson = document.createElement('p');\n    const secondQuotePerson = document.createElement('p');\n    firstQuote.textContent = '\"These burgers literally blew my mind. \\r\\nDon\\'t miss an opportunity to get your mind blown\"';\n    firstQuotePerson.textContent = '~ Simon from Uptown'\n    secondQuote.textContent = '\"I thought that I\\'d had a good burger before I tried Tim\\'s. \\r\\nI was wrong.\"'\n    secondQuotePerson.textContent = '~ Guy Fieri'\n    reviewsDiv.append(firstQuote);\n    reviewsDiv.append(firstQuotePerson);\n    reviewsDiv.append(secondQuote);\n    reviewsDiv.append(secondQuotePerson);\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;