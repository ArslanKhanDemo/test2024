/*! For license information please see main.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./index.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{eval("var express = __webpack_require__(/*! express */ \"express\");\nvar app = express();\n\n//const router = express().router;\n\n// router.get('/', () => {\n//     res.send('I am working')\n// });\n\napp.use('/', function (req, res) {\n  res.send('I am working');\n});\napp.listen(3000, function () {\n  console.log('App is listning to port: 3000');\n});\n\n//# sourceURL=webpack://any/./index.js?")},express:e=>{"use strict";e.exports=express}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](r,r.exports,__webpack_require__),r.exports}var __webpack_exports__=__webpack_require__("./index.js")})();