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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homePage)\n/* harmony export */ });\nlet pageBuilt = false;\n\nfunction homePage(homeDivInput) {\n    let homeDiv = homeDivInput;\n    if (pageBuilt === false) {\n        const homeHeaderDiv = document.createElement('div');\n        const homeHeaderH1 = document.createElement('h1');\n        const homeImage = document.createElement('img');\n        const infoDiv = document.createElement('div');\n        const hours = document.createElement('p');\n        const about = document.createElement('p');\n        const reviewsDiv = document.createElement('div');\n        const imageCredit = document.createElement('p');\n        infoDiv.setAttribute('class', 'home-info');\n        imageCredit.setAttribute('class', 'image-credit');\n        homeDiv.setAttribute('class', 'page-div');\n        imageCredit.innerHTML = 'Photo by <a href=\"https://unsplash.com/@danielcgold?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Dan Gold</a> on <a href=\"https://unsplash.com/s/photos/burger-restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>'\n        homeImage.src = '../assets/images/burger-overhead-shot.jpg';\n        homeHeaderH1.textContent = \"TIM'S BURGERS\";\n        homeHeaderDiv.append(homeHeaderH1);\n        homeDiv.append(homeHeaderDiv);\n        homeDiv.append(homeImage);\n        homeDiv.append(infoDiv);\n        homeDiv.append(reviewsDiv);\n        homeDiv.append(imageCredit);\n        infoDivText(hours, about);\n        reviewsDivText(reviewsDiv);\n        infoDiv.append(hours);\n        infoDiv.append(about);\n        pageBuilt = true;\n    }\n}\n\nfunction infoDivText(Hours, About) {\n    Hours.textContent = \"HOURS: \"\n        + \"M-F - 10:10 AM to 10:10 PM \"\n        + \"Sat & Sun - 9:45 AM to 11:00 PM\"\n    About.textContent = 'Welcome to Tim\\'s Burgers! '\n        + 'We are a local, family-owned business '\n        + 'that focuses on one thing: '\n        + 'making the best burger you\\'ve ever had. '\n        + 'Please place an order online or come in person '\n        + 'to see for yourself!';\n}\n\nfunction reviewsDivText(input) {\n    let reviewsDiv = input;\n    const firstQuote = document.createElement('p');\n    const secondQuote = document.createElement('p');\n    const firstQuotePerson = document.createElement('p');\n    const secondQuotePerson = document.createElement('p');\n    firstQuote.textContent = '\"These burgers literally blew my mind. '\n        + 'Don\\'t miss an opportunity to get your mind blown\"';\n    firstQuotePerson.textContent = '~ Simon from Uptown'\n    secondQuote.textContent = '\"I thought I\\'d had a good burger '\n        + ' before I tried Tim\\'s. I was wrong.\"';\n    secondQuotePerson.textContent = '~ Guy Fieri'\n    reviewsDiv.append(firstQuote);\n    reviewsDiv.append(firstQuotePerson);\n    reviewsDiv.append(secondQuote);\n    reviewsDiv.append(secondQuotePerson);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

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