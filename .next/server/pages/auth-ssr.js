"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/auth-ssr";
exports.ids = ["pages/auth-ssr"];
exports.modules = {

/***/ "./components/FirebaseAuth.js":
/*!************************************!*\
  !*** ./components/FirebaseAuth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebaseui/StyledFirebaseAuth */ \"react-firebaseui/StyledFirebaseAuth\");\n/* harmony import */ var react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_4__);\n/* globals window */ \n\n\n\n\n// Note that next-firebase-auth inits Firebase for us,\n// so we don't need to.\nconst firebaseAuthConfig = {\n    signInFlow: \"popup\",\n    // Auth providers\n    // https://github.com/firebase/firebaseui-web#configure-oauth-providers\n    signInOptions: [\n        {\n            provider: (firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth.EmailAuthProvider.PROVIDER_ID),\n            requireDisplayName: false\n        }, \n    ],\n    signInSuccessUrl: \"/\",\n    credentialHelper: \"none\",\n    callbacks: {\n        // https://github.com/firebase/firebaseui-web#signinsuccesswithauthresultauthresult-redirecturl\n        signInSuccessWithAuthResult: ()=>// Don't automatically redirect. We handle redirects using\n            // `next-firebase-auth`.\n            false\n    }\n};\nconst FirebaseAuth = ()=>{\n    // Do not SSR FirebaseUI, because it is not supported.\n    // https://github.com/firebase/firebaseui-web/issues/213\n    const { 0: renderAuth , 1: setRenderAuth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (false) {}\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: renderAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_firebaseui_StyledFirebaseAuth__WEBPACK_IMPORTED_MODULE_2___default()), {\n            uiConfig: firebaseAuthConfig,\n            firebaseAuth: firebase_app__WEBPACK_IMPORTED_MODULE_3___default().auth()\n        }, void 0, false, {\n            fileName: \"G:\\\\react\\\\todo-main\\\\components\\\\FirebaseAuth.js\",\n            lineNumber: 43,\n            columnNumber: 9\n        }, undefined) : null\n    }, void 0, false, {\n        fileName: \"G:\\\\react\\\\todo-main\\\\components\\\\FirebaseAuth.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FirebaseAuth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtCQUFrQixHQUNsQjtBQUFrRDtBQUNrQjtBQUNqQztBQUNiO0FBRXRCLHNEQUFzRDtBQUN0RCx1QkFBdUI7QUFFdkIsTUFBTUssa0JBQWtCLEdBQUc7SUFDekJDLFVBQVUsRUFBRSxPQUFPO0lBQ25CLGlCQUFpQjtJQUNqQix1RUFBdUU7SUFDdkVDLGFBQWEsRUFBRTtRQUNiO1lBQ0VDLFFBQVEsRUFBRUosd0ZBQTJDO1lBQ3JEUSxrQkFBa0IsRUFBRSxLQUFLO1NBQzFCO0tBQ0Y7SUFDREMsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQkMsZ0JBQWdCLEVBQUUsTUFBTTtJQUN4QkMsU0FBUyxFQUFFO1FBQ1QsK0ZBQStGO1FBQy9GQywyQkFBMkIsRUFBRSxJQUMzQiwwREFBMEQ7WUFDMUQsd0JBQXdCO1lBQ3hCLEtBQUs7S0FDUjtDQUNGO0FBRUQsTUFBTUMsWUFBWSxHQUFHLElBQU07SUFDekIsc0RBQXNEO0lBQ3RELHdEQUF3RDtJQUN4RCxNQUFNLEtBQUNDLFVBQVUsTUFBRUMsYUFBYSxNQUFJakIsK0NBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkRELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksS0FBNkIsRUFBRSxFQUVsQztLQUNGLEVBQUUsRUFBRSxDQUFDO0lBQ04scUJBQ0UsOERBQUNtQixLQUFHO2tCQUNERixVQUFVLGlCQUNULDhEQUFDZiw0RUFBa0I7WUFDakJrQixRQUFRLEVBQUVoQixrQkFBa0I7WUFDNUJpQixZQUFZLEVBQUVsQix3REFBYSxFQUFFOzs7OztxQkFDN0IsR0FDQSxJQUFJOzs7OztpQkFDSixDQUNQO0NBQ0Y7QUFFRCxpRUFBZWEsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9jb21wb25lbnRzL0ZpcmViYXNlQXV0aC5qcz8zYWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbHMgd2luZG93ICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTdHlsZWRGaXJlYmFzZUF1dGggZnJvbSAncmVhY3QtZmlyZWJhc2V1aS9TdHlsZWRGaXJlYmFzZUF1dGgnXHJcbmltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcclxuXHJcbi8vIE5vdGUgdGhhdCBuZXh0LWZpcmViYXNlLWF1dGggaW5pdHMgRmlyZWJhc2UgZm9yIHVzLFxyXG4vLyBzbyB3ZSBkb24ndCBuZWVkIHRvLlxyXG5cclxuY29uc3QgZmlyZWJhc2VBdXRoQ29uZmlnID0ge1xyXG4gIHNpZ25JbkZsb3c6ICdwb3B1cCcsXHJcbiAgLy8gQXV0aCBwcm92aWRlcnNcclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2V1aS13ZWIjY29uZmlndXJlLW9hdXRoLXByb3ZpZGVyc1xyXG4gIHNpZ25Jbk9wdGlvbnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZXI6IGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXHJcbiAgICAgIHJlcXVpcmVEaXNwbGF5TmFtZTogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgc2lnbkluU3VjY2Vzc1VybDogJy8nLFxyXG4gIGNyZWRlbnRpYWxIZWxwZXI6ICdub25lJyxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9maXJlYmFzZS9maXJlYmFzZXVpLXdlYiNzaWduaW5zdWNjZXNzd2l0aGF1dGhyZXN1bHRhdXRocmVzdWx0LXJlZGlyZWN0dXJsXHJcbiAgICBzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQ6ICgpID0+XHJcbiAgICAgIC8vIERvbid0IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3QuIFdlIGhhbmRsZSByZWRpcmVjdHMgdXNpbmdcclxuICAgICAgLy8gYG5leHQtZmlyZWJhc2UtYXV0aGAuXHJcbiAgICAgIGZhbHNlLFxyXG4gIH0sXHJcbn1cclxuXHJcbmNvbnN0IEZpcmViYXNlQXV0aCA9ICgpID0+IHtcclxuICAvLyBEbyBub3QgU1NSIEZpcmViYXNlVUksIGJlY2F1c2UgaXQgaXMgbm90IHN1cHBvcnRlZC5cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmlyZWJhc2UvZmlyZWJhc2V1aS13ZWIvaXNzdWVzLzIxM1xyXG4gIGNvbnN0IFtyZW5kZXJBdXRoLCBzZXRSZW5kZXJBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgc2V0UmVuZGVyQXV0aCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7cmVuZGVyQXV0aCA/IChcclxuICAgICAgICA8U3R5bGVkRmlyZWJhc2VBdXRoXHJcbiAgICAgICAgICB1aUNvbmZpZz17ZmlyZWJhc2VBdXRoQ29uZmlnfVxyXG4gICAgICAgICAgZmlyZWJhc2VBdXRoPXtmaXJlYmFzZS5hdXRoKCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpcmViYXNlQXV0aFxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0eWxlZEZpcmViYXNlQXV0aCIsImZpcmViYXNlIiwiZmlyZWJhc2VBdXRoQ29uZmlnIiwic2lnbkluRmxvdyIsInNpZ25Jbk9wdGlvbnMiLCJwcm92aWRlciIsImF1dGgiLCJFbWFpbEF1dGhQcm92aWRlciIsIlBST1ZJREVSX0lEIiwicmVxdWlyZURpc3BsYXlOYW1lIiwic2lnbkluU3VjY2Vzc1VybCIsImNyZWRlbnRpYWxIZWxwZXIiLCJjYWxsYmFja3MiLCJzaWduSW5TdWNjZXNzV2l0aEF1dGhSZXN1bHQiLCJGaXJlYmFzZUF1dGgiLCJyZW5kZXJBdXRoIiwic2V0UmVuZGVyQXV0aCIsImRpdiIsInVpQ29uZmlnIiwiZmlyZWJhc2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FirebaseAuth.js\n");

/***/ }),

/***/ "./pages/auth-ssr.js":
/*!***************************!*\
  !*** ./pages/auth-ssr.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FirebaseAuth */ \"./components/FirebaseAuth.js\");\n\n\n\n\nconst styles = {\n    content: {\n        padding: `8px 32px`\n    },\n    textContainer: {\n        display: \"flex\",\n        justifyContent: \"center\",\n        margin: 16\n    }\n};\nconst Auth = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: styles.content,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n                lineNumber: 22,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: styles.textContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"This auth page is \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            children: \"not\"\n                        }, void 0, false, {\n                            fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n                            lineNumber: 25,\n                            columnNumber: 27\n                        }, undefined),\n                        \" static. It will server-side redirect to the app if the user is already authenticated.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n                lineNumber: 23,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\auth-ssr.js\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, undefined);\nconst getServerSideProps = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUserTokenSSR)({\n    whenAuthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_APP\n})();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.withAuthUser)({\n    whenAuthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_2__.AuthAction.REDIRECT_TO_APP\n})(Auth));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoLXNzci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUtFO0FBQzBCO0FBRXJELE1BQU1LLE1BQU0sR0FBRztJQUNiQyxPQUFPLEVBQUU7UUFDUEMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO0tBQ3BCO0lBQ0RDLGFBQWEsRUFBRTtRQUNiQyxPQUFPLEVBQUUsTUFBTTtRQUNmQyxjQUFjLEVBQUUsUUFBUTtRQUN4QkMsTUFBTSxFQUFFLEVBQUU7S0FDWDtDQUNGO0FBRUQsTUFBTUMsSUFBSSxHQUFHLGtCQUNYLDhEQUFDQyxLQUFHO1FBQUNDLEtBQUssRUFBRVQsTUFBTSxDQUFDQyxPQUFPOzswQkFDeEIsOERBQUNTLElBQUU7MEJBQUMsU0FBTzs7Ozs7eUJBQUs7MEJBQ2hCLDhEQUFDRixLQUFHO2dCQUFDQyxLQUFLLEVBQUVULE1BQU0sQ0FBQ0csYUFBYTswQkFDOUIsNEVBQUNRLEdBQUM7O3dCQUFDLG9CQUNpQjtzQ0FBQSw4REFBQ0MsR0FBQztzQ0FBQyxLQUFHOzs7OztxQ0FBSTt3QkFBQSx3RkFFOUI7Ozs7Ozs2QkFBSTs7Ozs7eUJBQ0E7MEJBQ04sOERBQUNKLEtBQUc7MEJBQ0YsNEVBQUNULGdFQUFZOzs7OzZCQUFHOzs7Ozt5QkFDWjs7Ozs7O2lCQUNGO0FBR0QsTUFBTWMsa0JBQWtCLEdBQUdoQix3RUFBb0IsQ0FBQztJQUNyRGlCLFVBQVUsRUFBRWhCLDBFQUEwQjtDQUN2QyxDQUFDLEVBQUU7QUFFSixpRUFBZUYsZ0VBQVksQ0FBQztJQUMxQmtCLFVBQVUsRUFBRWhCLDBFQUEwQjtDQUN2QyxDQUFDLENBQUNTLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4YW1wbGUvLi9wYWdlcy9hdXRoLXNzci5qcz8zMzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtcclxuICB3aXRoQXV0aFVzZXIsXHJcbiAgd2l0aEF1dGhVc2VyVG9rZW5TU1IsXHJcbiAgQXV0aEFjdGlvbixcclxufSBmcm9tICduZXh0LWZpcmViYXNlLWF1dGgnXHJcbmltcG9ydCBGaXJlYmFzZUF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9GaXJlYmFzZUF1dGgnXHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29udGVudDoge1xyXG4gICAgcGFkZGluZzogYDhweCAzMnB4YCxcclxuICB9LFxyXG4gIHRleHRDb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1hcmdpbjogMTYsXHJcbiAgfSxcclxufVxyXG5cclxuY29uc3QgQXV0aCA9ICgpID0+IChcclxuICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICA8aDM+U2lnbiBpbjwvaDM+XHJcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudGV4dENvbnRhaW5lcn0+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFRoaXMgYXV0aCBwYWdlIGlzIDxiPm5vdDwvYj4gc3RhdGljLiBJdCB3aWxsIHNlcnZlci1zaWRlIHJlZGlyZWN0IHRvIHRoZVxyXG4gICAgICAgIGFwcCBpZiB0aGUgdXNlciBpcyBhbHJlYWR5IGF1dGhlbnRpY2F0ZWQuXHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPEZpcmViYXNlQXV0aCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoQXV0aFVzZXJUb2tlblNTUih7XHJcbiAgd2hlbkF1dGhlZDogQXV0aEFjdGlvbi5SRURJUkVDVF9UT19BUFAsXHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoVXNlcih7XHJcbiAgd2hlbkF1dGhlZDogQXV0aEFjdGlvbi5SRURJUkVDVF9UT19BUFAsXHJcbn0pKEF1dGgpXHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIndpdGhBdXRoVXNlciIsIndpdGhBdXRoVXNlclRva2VuU1NSIiwiQXV0aEFjdGlvbiIsIkZpcmViYXNlQXV0aCIsInN0eWxlcyIsImNvbnRlbnQiLCJwYWRkaW5nIiwidGV4dENvbnRhaW5lciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsIkF1dGgiLCJkaXYiLCJzdHlsZSIsImgzIiwicCIsImIiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJ3aGVuQXV0aGVkIiwiUkVESVJFQ1RfVE9fQVBQIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth-ssr.js\n");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("firebase/auth");

/***/ }),

/***/ "next-firebase-auth":
/*!*************************************!*\
  !*** external "next-firebase-auth" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("next-firebase-auth");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebaseui/StyledFirebaseAuth":
/*!******************************************************!*\
  !*** external "react-firebaseui/StyledFirebaseAuth" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("react-firebaseui/StyledFirebaseAuth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth-ssr.js"));
module.exports = __webpack_exports__;

})();