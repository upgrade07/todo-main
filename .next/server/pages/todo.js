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
exports.id = "pages/todo";
exports.ids = ["pages/todo"];
exports.modules = {

/***/ "./pages/todo.js":
/*!***********************!*\
  !*** ./pages/todo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-firebase-auth */ \"next-firebase-auth\");\n/* harmony import */ var next_firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_getAbsoluteURL__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getAbsoluteURL */ \"./utils/getAbsoluteURL.js\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"@chakra-ui/icons\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nconst Todo = ()=>{\n    const AuthUser = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.useAuthUser)();\n    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: todos , 1: setTodos  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // console.log(AuthUser)\n    // console.log(todos)\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        AuthUser.id && firebase_app__WEBPACK_IMPORTED_MODULE_6___default().firestore().collection(AuthUser.id).orderBy(\"timestamp\", \"desc\").onSnapshot((snapshot)=>{\n            setTodos(snapshot.docs.map((doc)=>doc.data().todo));\n        });\n    });\n    const sendData = ()=>{\n        try {\n            // try to update doc\n            firebase_app__WEBPACK_IMPORTED_MODULE_6___default().firestore().collection(AuthUser.id) // each user will have their own collection\n            .doc(input) // set the collection name to the input so that we can easily delete it later on\n            .set({\n                todo: input,\n                timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_6___default().firestore.FieldValue.serverTimestamp()\n            }).then(console.log(\"Data was successfully sent to cloud firestore!\"));\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const deleteTodo = (t)=>{\n        try {\n            firebase_app__WEBPACK_IMPORTED_MODULE_6___default().firestore().collection(AuthUser.id).doc(t).delete().then(console.log(\"Data was successfully deleted!\"));\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        flexDir: \"column\",\n        maxW: 800,\n        align: \"center\",\n        justify: \"center\",\n        minH: \"100vh\",\n        m: \"auto\",\n        px: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                justify: \"space-between\",\n                w: \"100%\",\n                align: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {\n                        mb: 4,\n                        children: [\n                            \"Welcome, \",\n                            AuthUser.email,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                            ml: 2,\n                            onClick: AuthUser.signOut,\n                            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.StarIcon, {}, void 0, false, void 0, void 0)\n                        }, void 0, false, {\n                            fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputLeftElement, {\n                        pointerEvents: \"none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.AddIcon, {\n                            color: \"gray.300\"\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, {\n                        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        type: \"text\",\n                        onChange: (e)=>setInput(e.target.value),\n                        placeholder: \"Enter Todo\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        ml: 2,\n                        onClick: ()=>sendData(),\n                        children: \"Add Todo\"\n                    }, void 0, false, {\n                        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, undefined),\n            todos.map((t, i)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        i > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                            fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                            lineNumber: 99,\n                            columnNumber: 35\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                            w: \"100%\",\n                            p: 5,\n                            my: 2,\n                            align: \"center\",\n                            borderRadius: 5,\n                            justifyContent: \"space-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                                    align: \"center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            fontSize: \"xl\",\n                                            mr: 4,\n                                            children: [\n                                                i + 1,\n                                                \".\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                            children: t\n                                        }, void 0, false, {\n                                            fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n                                    onClick: ()=>deleteTodo(t),\n                                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.DeleteIcon, {}, void 0, false, void 0, void 0)\n                                }, void 0, false, {\n                                    fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n                            lineNumber: 100,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"G:\\\\react\\\\todo-main\\\\pages\\\\todo.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, undefined);\n};\nconst getServerSideProps = (0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.withAuthUserTokenSSR)({\n    whenUnauthed: next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.AuthAction.REDIRECT_TO_LOGIN\n})(async ({ AuthUser , req  })=>{\n    // Optionally, get other props.\n    // You can return anything you'd normally return from\n    // `getServerSideProps`, including redirects.\n    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering\n    const token = await AuthUser.getIdToken();\n    const endpoint = (0,_utils_getAbsoluteURL__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"/api/example\", req);\n    const response = await fetch(endpoint, {\n        method: \"GET\",\n        headers: {\n            Authorization: token || \"unauthenticated\"\n        }\n    });\n    const data = await response.json();\n    if (!response.ok) {\n        throw new Error(`Data fetching failed with status ${response.status}: ${JSON.stringify(data)}`);\n    }\n    return {\n        props: {\n            favoriteColor: data.favoriteColor\n        }\n    };\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.withAuthUser)({\n    whenUnauthedAfterInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.AuthAction.REDIRECT_TO_LOGIN,\n    whenUnauthedBeforeInit: next_firebase_auth__WEBPACK_IMPORTED_MODULE_3__.AuthAction.REDIRECT_TO_LOGIN\n})(Todo));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFFRixpRUFBZXRGLGdFQUFZLENBQUM7SUFDeEJ1RixxQkFBcUIsRUFBRXJGLDRFQUE0QjtJQUNuRHNGLHNCQUFzQixFQUFFdEYsNEVBQTRCO0NBQ3ZELENBQUMsQ0FBQ00sSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhhbXBsZS8uL3BhZ2VzL3RvZG8uanM/NWIyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gICAgRmxleCxcclxuICAgIEhlYWRpbmcsXHJcbiAgICBJbnB1dEdyb3VwLFxyXG4gICAgSW5wdXRMZWZ0RWxlbWVudCxcclxuICAgIElucHV0LFxyXG4gICAgQnV0dG9uLFxyXG4gICAgVGV4dCxcclxuICAgIEljb25CdXR0b24sXHJcbiAgICBEaXZpZGVyLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuaW1wb3J0IHtcclxuICAgIHVzZUF1dGhVc2VyLFxyXG4gICAgd2l0aEF1dGhVc2VyLFxyXG4gICAgd2l0aEF1dGhVc2VyVG9rZW5TU1IsXHJcbiAgICBBdXRoQWN0aW9uLFxyXG59IGZyb20gJ25leHQtZmlyZWJhc2UtYXV0aCdcclxuaW1wb3J0IGdldEFic29sdXRlVVJMIGZyb20gJy4uL3V0aWxzL2dldEFic29sdXRlVVJMJ1xyXG5pbXBvcnQgeyBBZGRJY29uLCBEZWxldGVJY29uLCBTdGFySWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCJcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcblxyXG5jb25zdCBUb2RvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgQXV0aFVzZXIgPSB1c2VBdXRoVXNlcigpXHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhBdXRoVXNlcilcclxuICAgIC8vIGNvbnNvbGUubG9nKHRvZG9zKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgQXV0aFVzZXIuaWQgJiZcclxuICAgICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oQXV0aFVzZXIuaWQpXHJcbiAgICAgICAgICAgICAgICAub3JkZXJCeSgndGltZXN0YW1wJywgJ2Rlc2MnKVxyXG4gICAgICAgICAgICAgICAgLm9uU25hcHNob3Qoc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRvZG9zKHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpLnRvZG8pKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgc2VuZERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gdHJ5IHRvIHVwZGF0ZSBkb2NcclxuICAgICAgICAgICAgZmlyZWJhc2VcclxuICAgICAgICAgICAgICAgIC5maXJlc3RvcmUoKVxyXG4gICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oQXV0aFVzZXIuaWQpIC8vIGVhY2ggdXNlciB3aWxsIGhhdmUgdGhlaXIgb3duIGNvbGxlY3Rpb25cclxuICAgICAgICAgICAgICAgIC5kb2MoaW5wdXQpIC8vIHNldCB0aGUgY29sbGVjdGlvbiBuYW1lIHRvIHRoZSBpbnB1dCBzbyB0aGF0IHdlIGNhbiBlYXNpbHkgZGVsZXRlIGl0IGxhdGVyIG9uXHJcbiAgICAgICAgICAgICAgICAuc2V0KHtcclxuICAgICAgICAgICAgICAgICAgICB0b2RvOiBpbnB1dCxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGNvbnNvbGUubG9nKCdEYXRhIHdhcyBzdWNjZXNzZnVsbHkgc2VudCB0byBjbG91ZCBmaXJlc3RvcmUhJykpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSAodCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZpcmViYXNlXHJcbiAgICAgICAgICAgICAgICAuZmlyZXN0b3JlKClcclxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKEF1dGhVc2VyLmlkKVxyXG4gICAgICAgICAgICAgICAgLmRvYyh0KVxyXG4gICAgICAgICAgICAgICAgLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihjb25zb2xlLmxvZygnRGF0YSB3YXMgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhJykpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiIG1heFc9ezgwMH0gYWxpZ249XCJjZW50ZXJcIiBqdXN0aWZ5PVwiY2VudGVyXCIgbWluSD1cIjEwMHZoXCIgbT1cImF1dG9cIiBweD17NH0+XHJcbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgdz1cIjEwMCVcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgbWI9ezR9PldlbGNvbWUsIHtBdXRoVXNlci5lbWFpbH0hPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgPEZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gbWw9ezJ9IG9uQ2xpY2s9e0F1dGhVc2VyLnNpZ25PdXR9IGljb249ezxTdGFySWNvbiAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17PEFkZEljb24gY29sb3I9XCJncmF5LjMwMFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVudGVyIFRvZG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG1sPXsyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbmREYXRhKCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIFRvZG9cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcblxyXG4gICAgICAgICAgICB7dG9kb3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpID4gMCAmJiA8RGl2aWRlciAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHA9ezV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteT17Mn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJ4bFwiIG1yPXs0fT57aSArIDF9LjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD57dH08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUb2RvKHQpfSBpY29uPXs8RGVsZXRlSWNvbiAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3aXRoQXV0aFVzZXJUb2tlblNTUih7XHJcbiAgICB3aGVuVW5hdXRoZWQ6IEF1dGhBY3Rpb24uUkVESVJFQ1RfVE9fTE9HSU4sXHJcbn0pKGFzeW5jICh7IEF1dGhVc2VyLCByZXEgfSkgPT4ge1xyXG4gICAgLy8gT3B0aW9uYWxseSwgZ2V0IG90aGVyIHByb3BzLlxyXG4gICAgLy8gWW91IGNhbiByZXR1cm4gYW55dGhpbmcgeW91J2Qgbm9ybWFsbHkgcmV0dXJuIGZyb21cclxuICAgIC8vIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLCBpbmNsdWRpbmcgcmVkaXJlY3RzLlxyXG4gICAgLy8gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYmFzaWMtZmVhdHVyZXMvZGF0YS1mZXRjaGluZyNnZXRzZXJ2ZXJzaWRlcHJvcHMtc2VydmVyLXNpZGUtcmVuZGVyaW5nXHJcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IEF1dGhVc2VyLmdldElkVG9rZW4oKVxyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBnZXRBYnNvbHV0ZVVSTCgnL2FwaS9leGFtcGxlJywgcmVxKVxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbiB8fCAndW5hdXRoZW50aWNhdGVkJyxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgIGBEYXRhIGZldGNoaW5nIGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c306ICR7SlNPTi5zdHJpbmdpZnkoXHJcbiAgICAgICAgICAgICAgICBkYXRhXHJcbiAgICAgICAgICAgICl9YFxyXG4gICAgICAgIClcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZmF2b3JpdGVDb2xvcjogZGF0YS5mYXZvcml0ZUNvbG9yLFxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aFVzZXIoe1xyXG4gICAgd2hlblVuYXV0aGVkQWZ0ZXJJbml0OiBBdXRoQWN0aW9uLlJFRElSRUNUX1RPX0xPR0lOLFxyXG4gICAgd2hlblVuYXV0aGVkQmVmb3JlSW5pdDogQXV0aEFjdGlvbi5SRURJUkVDVF9UT19MT0dJTixcclxufSkoVG9kbylcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJGbGV4IiwiSGVhZGluZyIsIklucHV0R3JvdXAiLCJJbnB1dExlZnRFbGVtZW50IiwiSW5wdXQiLCJCdXR0b24iLCJUZXh0IiwiSWNvbkJ1dHRvbiIsIkRpdmlkZXIiLCJ1c2VBdXRoVXNlciIsIndpdGhBdXRoVXNlciIsIndpdGhBdXRoVXNlclRva2VuU1NSIiwiQXV0aEFjdGlvbiIsImdldEFic29sdXRlVVJMIiwiQWRkSWNvbiIsIkRlbGV0ZUljb24iLCJTdGFySWNvbiIsImZpcmViYXNlIiwiVG9kbyIsIkF1dGhVc2VyIiwiaW5wdXQiLCJzZXRJbnB1dCIsInRvZG9zIiwic2V0VG9kb3MiLCJpZCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJ0b2RvIiwic2VuZERhdGEiLCJzZXQiLCJ0aW1lc3RhbXAiLCJGaWVsZFZhbHVlIiwic2VydmVyVGltZXN0YW1wIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRlbGV0ZVRvZG8iLCJ0IiwiZGVsZXRlIiwiZmxleERpciIsIm1heFciLCJhbGlnbiIsImp1c3RpZnkiLCJtaW5IIiwibSIsInB4IiwidyIsIm1iIiwiZW1haWwiLCJtbCIsIm9uQ2xpY2siLCJzaWduT3V0IiwiaWNvbiIsInBvaW50ZXJFdmVudHMiLCJjaGlsZHJlbiIsImNvbG9yIiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJpIiwicCIsIm15IiwiYm9yZGVyUmFkaXVzIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsIm1yIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwid2hlblVuYXV0aGVkIiwiUkVESVJFQ1RfVE9fTE9HSU4iLCJyZXEiLCJ0b2tlbiIsImdldElkVG9rZW4iLCJlbmRwb2ludCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImpzb24iLCJvayIsIkVycm9yIiwic3RhdHVzIiwiSlNPTiIsInN0cmluZ2lmeSIsInByb3BzIiwiZmF2b3JpdGVDb2xvciIsIndoZW5VbmF1dGhlZEFmdGVySW5pdCIsIndoZW5VbmF1dGhlZEJlZm9yZUluaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/todo.js\n");

/***/ }),

/***/ "./utils/getAbsoluteURL.js":
/*!*********************************!*\
  !*** ./utils/getAbsoluteURL.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* globals window */ const getAbsoluteURL = (url, req = null)=>{\n    let host;\n    if (req) {\n        host = req.headers.host;\n    } else {\n        if (true) {\n            throw new Error('The \"req\" parameter must be provided if on the server side.');\n        }\n        host = window.location.host;\n    }\n    const isLocalhost = host.indexOf(\"localhost\") === 0;\n    const protocol = isLocalhost ? \"http\" : \"https\";\n    return `${protocol}://${host}${url}`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAbsoluteURL);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9nZXRBYnNvbHV0ZVVSTC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsa0JBQWtCLEdBRWxCLE1BQU1BLGNBQWMsR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsR0FBRyxJQUFJLEdBQUs7SUFDMUMsSUFBSUMsSUFBSTtJQUNSLElBQUlELEdBQUcsRUFBRTtRQUNQQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsT0FBTyxDQUFDRCxJQUFJO0tBQ3hCLE1BQU07UUFDTCxJQUFJLElBQTZCLEVBQUU7WUFDakMsTUFBTSxJQUFJRSxLQUFLLENBQ2IsNkRBQTZELENBQzlEO1NBQ0Y7UUFDREYsSUFBSSxHQUFHRyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0osSUFBSTtLQUM1QjtJQUNELE1BQU1LLFdBQVcsR0FBR0wsSUFBSSxDQUFDTSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUNuRCxNQUFNQyxRQUFRLEdBQUdGLFdBQVcsR0FBRyxNQUFNLEdBQUcsT0FBTztJQUMvQyxPQUFPLENBQUMsRUFBRUUsUUFBUSxDQUFDLEdBQUcsRUFBRVAsSUFBSSxDQUFDLEVBQUVGLEdBQUcsQ0FBQyxDQUFDO0NBQ3JDO0FBRUQsaUVBQWVELGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLy4vdXRpbHMvZ2V0QWJzb2x1dGVVUkwuanM/ZTUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxzIHdpbmRvdyAqL1xyXG5cclxuY29uc3QgZ2V0QWJzb2x1dGVVUkwgPSAodXJsLCByZXEgPSBudWxsKSA9PiB7XHJcbiAgbGV0IGhvc3RcclxuICBpZiAocmVxKSB7XHJcbiAgICBob3N0ID0gcmVxLmhlYWRlcnMuaG9zdFxyXG4gIH0gZWxzZSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICdUaGUgXCJyZXFcIiBwYXJhbWV0ZXIgbXVzdCBiZSBwcm92aWRlZCBpZiBvbiB0aGUgc2VydmVyIHNpZGUuJ1xyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBob3N0ID0gd2luZG93LmxvY2F0aW9uLmhvc3RcclxuICB9XHJcbiAgY29uc3QgaXNMb2NhbGhvc3QgPSBob3N0LmluZGV4T2YoJ2xvY2FsaG9zdCcpID09PSAwXHJcbiAgY29uc3QgcHJvdG9jb2wgPSBpc0xvY2FsaG9zdCA/ICdodHRwJyA6ICdodHRwcydcclxuICByZXR1cm4gYCR7cHJvdG9jb2x9Oi8vJHtob3N0fSR7dXJsfWBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0QWJzb2x1dGVVUkxcclxuIl0sIm5hbWVzIjpbImdldEFic29sdXRlVVJMIiwidXJsIiwicmVxIiwiaG9zdCIsImhlYWRlcnMiLCJFcnJvciIsIndpbmRvdyIsImxvY2F0aW9uIiwiaXNMb2NhbGhvc3QiLCJpbmRleE9mIiwicHJvdG9jb2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/getAbsoluteURL.js\n");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("firebase/firestore");

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
var __webpack_exports__ = (__webpack_exec__("./pages/todo.js"));
module.exports = __webpack_exports__;

})();