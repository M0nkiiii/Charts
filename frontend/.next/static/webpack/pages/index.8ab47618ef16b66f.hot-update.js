"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/chart/ComposedChart.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/component/Legend.js\");\n/* harmony import */ var _barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Bar,CartesianGrid,ComposedChart,Legend,Line,ResponsiveContainer,Tooltip,XAxis,YAxis!=!recharts */ \"./node_modules/recharts/es6/cartesian/Bar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Register the required components for Chart.js\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend);\nconst Dashboard = ()=>{\n    _s();\n    const [candlestickData, setCandlestickData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [lineData, setLineData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [barData, setBarData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [pieData, setPieData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:8000/api/line-chart-data/\").then((response)=>response.json()).then((data)=>{\n            setLineData({\n                labels: data.labels,\n                datasets: [\n                    {\n                        label: \"Line Chart\",\n                        data: data.data,\n                        borderColor: \"rgba(75,192,192,1)\",\n                        fill: false\n                    }\n                ]\n            });\n        });\n        fetch(\"http://localhost:8000/api/bar-chart-data/\").then((response)=>response.json()).then((data)=>{\n            setBarData({\n                labels: data.labels,\n                datasets: [\n                    {\n                        label: \"Bar Chart\",\n                        data: data.data,\n                        backgroundColor: [\n                            \"rgba(255,99,132,0.2)\",\n                            \"rgba(54,162,235,0.2)\",\n                            \"rgba(255,206,86,0.2)\"\n                        ]\n                    }\n                ]\n            });\n        });\n        fetch(\"http://localhost:8000/api/pie-chart-data/\").then((response)=>response.json()).then((data)=>{\n            setPieData({\n                labels: data.labels,\n                datasets: [\n                    {\n                        label: \"Pie Chart\",\n                        data: data.data,\n                        backgroundColor: [\n                            \"#FF6384\",\n                            \"#36A2EB\",\n                            \"#FFCE56\"\n                        ]\n                    }\n                ]\n            });\n        });\n        fetch(\"http://localhost:8000/api/candlestick-data/\").then((response)=>response.json()).then((data)=>{\n            setCandlestickData(data.data);\n        });\n    }, []);\n    // Convert candlestick data to format suitable for Recharts\n    const formatCandlestickData = (data)=>{\n        if (!data) return [];\n        return data.map((d)=>({\n                date: d.x,\n                open: d.open,\n                high: d.high,\n                low: d.low,\n                close: d.close\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, undefined),\n            lineData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                data: lineData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 119,\n                columnNumber: 20\n            }, undefined),\n            barData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n                data: barData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 120,\n                columnNumber: 19\n            }, undefined),\n            pieData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Pie, {\n                data: pieData\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 121,\n                columnNumber: 19\n            }, undefined),\n            candlestickData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_4__.ResponsiveContainer, {\n                width: \"100%\",\n                height: 400,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_5__.ComposedChart, {\n                    data: formatCandlestickData(candlestickData),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_6__.CartesianGrid, {\n                            stroke: \"#f5f5f5\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 125,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_7__.XAxis, {\n                            dataKey: \"date\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_8__.YAxis, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 127,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_9__.Tooltip, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_10__.Legend, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_11__.Bar, {\n                            dataKey: \"open\",\n                            barSize: 10,\n                            fill: \"#413ea0\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bar_CartesianGrid_ComposedChart_Legend_Line_ResponsiveContainer_Tooltip_XAxis_YAxis_recharts__WEBPACK_IMPORTED_MODULE_11__.Bar, {\n                            dataKey: \"close\",\n                            barSize: 10,\n                            fill: \"#ff7300\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                            lineNumber: 131,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n                lineNumber: 123,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nepac\\\\OneDrive\\\\Documents\\\\Charts\\\\frontend\\\\pages\\\\index.js\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Dashboard, \"xmIm0nL3vdoUpjm125tQO7MmTME=\");\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs0QkFBQ3dDLFFBQU87Ozs7OztzQ0FDdEIsOERBQUMxQyxzSkFBS0E7NEJBQUMyQyxTQUFROzs7Ozs7c0NBQ2YsOERBQUMxQyxzSkFBS0E7Ozs7O3NDQUNOLDhEQUFDRSx3SkFBZUE7Ozs7O3NDQUNoQiw4REFBQ0Msd0pBQWNBOzs7OztzQ0FDZiw4REFBQ0MscUpBQVdBOzRCQUFDc0MsU0FBUTs0QkFBT0MsU0FBUzs0QkFBSWpCLE1BQUs7Ozs7OztzQ0FDOUMsOERBQUN0QixxSkFBV0E7NEJBQUNzQyxTQUFROzRCQUFRQyxTQUFTOzRCQUFJakIsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0Q7R0FsR01sQjtLQUFBQTtBQW9HTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQ2hhcnQgYXMgQ2hhcnRKUyxcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgQXJjRWxlbWVudCwgLy8gSW1wb3J0IEFyY0VsZW1lbnRcclxuICBQb2ludEVsZW1lbnQsXHJcbiAgTGluZUVsZW1lbnQsXHJcbiAgVGl0bGUsXHJcbiAgVG9vbHRpcCxcclxuICBMZWdlbmQsXHJcbn0gZnJvbSBcImNoYXJ0LmpzXCI7XHJcbmltcG9ydCB7IEJhciwgTGluZSwgUGllIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xyXG5pbXBvcnQge1xyXG4gIENvbXBvc2VkQ2hhcnQsXHJcbiAgWEF4aXMsXHJcbiAgWUF4aXMsXHJcbiAgQ2FydGVzaWFuR3JpZCxcclxuICBUb29sdGlwIGFzIFJlY2hhcnRzVG9vbHRpcCxcclxuICBMZWdlbmQgYXMgUmVjaGFydHNMZWdlbmQsXHJcbiAgQmFyIGFzIFJlY2hhcnRzQmFyLFxyXG4gIExpbmUgYXMgUmVjaGFydHNMaW5lLFxyXG4gIFJlc3BvbnNpdmVDb250YWluZXIsXHJcbn0gZnJvbSBcInJlY2hhcnRzXCI7XHJcblxyXG4vLyBSZWdpc3RlciB0aGUgcmVxdWlyZWQgY29tcG9uZW50cyBmb3IgQ2hhcnQuanNcclxuQ2hhcnRKUy5yZWdpc3RlcihcclxuICBDYXRlZ29yeVNjYWxlLFxyXG4gIExpbmVhclNjYWxlLFxyXG4gIEJhckVsZW1lbnQsXHJcbiAgQXJjRWxlbWVudCwgLy8gUmVnaXN0ZXIgQXJjRWxlbWVudFxyXG4gIFBvaW50RWxlbWVudCxcclxuICBMaW5lRWxlbWVudCxcclxuICBUaXRsZSxcclxuICBUb29sdGlwLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjYW5kbGVzdGlja0RhdGEsIHNldENhbmRsZXN0aWNrRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGluZURhdGEsIHNldExpbmVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtiYXJEYXRhLCBzZXRCYXJEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtwaWVEYXRhLCBzZXRQaWVEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xpbmUtY2hhcnQtZGF0YS9cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0TGluZURhdGEoe1xyXG4gICAgICAgICAgbGFiZWxzOiBkYXRhLmxhYmVscyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJMaW5lIENoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2Jhci1jaGFydC1kYXRhL1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRCYXJEYXRhKHtcclxuICAgICAgICAgIGxhYmVsczogZGF0YS5sYWJlbHMsXHJcbiAgICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQmFyIENoYXJ0XCIsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5kYXRhLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDI1NSw5OSwxMzIsMC4yKVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDU0LDE2MiwyMzUsMC4yKVwiLFxyXG4gICAgICAgICAgICAgICAgXCJyZ2JhKDI1NSwyMDYsODYsMC4yKVwiLFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcGllLWNoYXJ0LWRhdGEvXCIpXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFBpZURhdGEoe1xyXG4gICAgICAgICAgbGFiZWxzOiBkYXRhLmxhYmVscyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJQaWUgQ2hhcnRcIixcclxuICAgICAgICAgICAgICBkYXRhOiBkYXRhLmRhdGEsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjRkY2Mzg0XCIsIFwiIzM2QTJFQlwiLCBcIiNGRkNFNTZcIl0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvY2FuZGxlc3RpY2stZGF0YS9cIilcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0Q2FuZGxlc3RpY2tEYXRhKGRhdGEuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gQ29udmVydCBjYW5kbGVzdGljayBkYXRhIHRvIGZvcm1hdCBzdWl0YWJsZSBmb3IgUmVjaGFydHNcclxuICBjb25zdCBmb3JtYXRDYW5kbGVzdGlja0RhdGEgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhKSByZXR1cm4gW107XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoKGQpID0+ICh7XHJcbiAgICAgIGRhdGU6IGQueCxcclxuICAgICAgb3BlbjogZC5vcGVuLFxyXG4gICAgICBoaWdoOiBkLmhpZ2gsXHJcbiAgICAgIGxvdzogZC5sb3csXHJcbiAgICAgIGNsb3NlOiBkLmNsb3NlLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cclxuICAgICAge2xpbmVEYXRhICYmIDxMaW5lIGRhdGE9e2xpbmVEYXRhfSAvPn1cclxuICAgICAge2JhckRhdGEgJiYgPEJhciBkYXRhPXtiYXJEYXRhfSAvPn1cclxuICAgICAge3BpZURhdGEgJiYgPFBpZSBkYXRhPXtwaWVEYXRhfSAvPn1cclxuICAgICAge2NhbmRsZXN0aWNrRGF0YSAmJiAoXHJcbiAgICAgICAgPFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PXs0MDB9PlxyXG4gICAgICAgICAgPENvbXBvc2VkQ2hhcnQgZGF0YT17Zm9ybWF0Q2FuZGxlc3RpY2tEYXRhKGNhbmRsZXN0aWNrRGF0YSl9PlxyXG4gICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2U9XCIjZjVmNWY1XCIgLz5cclxuICAgICAgICAgICAgPFhBeGlzIGRhdGFLZXk9XCJkYXRlXCIgLz5cclxuICAgICAgICAgICAgPFlBeGlzIC8+XHJcbiAgICAgICAgICAgIDxSZWNoYXJ0c1Rvb2x0aXAgLz5cclxuICAgICAgICAgICAgPFJlY2hhcnRzTGVnZW5kIC8+XHJcbiAgICAgICAgICAgIDxSZWNoYXJ0c0JhciBkYXRhS2V5PVwib3BlblwiIGJhclNpemU9ezEwfSBmaWxsPVwiIzQxM2VhMFwiIC8+XHJcbiAgICAgICAgICAgIDxSZWNoYXJ0c0JhciBkYXRhS2V5PVwiY2xvc2VcIiBiYXJTaXplPXsxMH0gZmlsbD1cIiNmZjczMDBcIiAvPlxyXG4gICAgICAgICAgICB7LyogQ3VzdG9taXplIGZ1cnRoZXIgaWYgbmVlZGVkICovfVxyXG4gICAgICAgICAgPC9Db21wb3NlZENoYXJ0PlxyXG4gICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiQmFyRWxlbWVudCIsIkFyY0VsZW1lbnQiLCJQb2ludEVsZW1lbnQiLCJMaW5lRWxlbWVudCIsIlRpdGxlIiwiVG9vbHRpcCIsIkxlZ2VuZCIsIkJhciIsIkxpbmUiLCJQaWUiLCJDb21wb3NlZENoYXJ0IiwiWEF4aXMiLCJZQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJSZWNoYXJ0c1Rvb2x0aXAiLCJSZWNoYXJ0c0xlZ2VuZCIsIlJlY2hhcnRzQmFyIiwiUmVjaGFydHNMaW5lIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsInJlZ2lzdGVyIiwiRGFzaGJvYXJkIiwiY2FuZGxlc3RpY2tEYXRhIiwic2V0Q2FuZGxlc3RpY2tEYXRhIiwibGluZURhdGEiLCJzZXRMaW5lRGF0YSIsImJhckRhdGEiLCJzZXRCYXJEYXRhIiwicGllRGF0YSIsInNldFBpZURhdGEiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImJvcmRlckNvbG9yIiwiZmlsbCIsImJhY2tncm91bmRDb2xvciIsImZvcm1hdENhbmRsZXN0aWNrRGF0YSIsIm1hcCIsImQiLCJkYXRlIiwieCIsIm9wZW4iLCJoaWdoIiwibG93IiwiY2xvc2UiLCJkaXYiLCJoMSIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb2tlIiwiZGF0YUtleSIsImJhclNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});