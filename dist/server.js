/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/routes/routes.ts":
/*!******************************!*\
  !*** ./src/routes/routes.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__(/*! express */ "express");
const multer_1 = __importDefault(__webpack_require__(/*! multer */ "multer"));
const FileReader_1 = __webpack_require__(/*! ../singletons/FileReader */ "./src/singletons/FileReader.ts");
const upload = (0, multer_1.default)();
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('index');
});
router.post('/upload', upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const myFileReader = FileReader_1.MyFilereader.getInstance();
    const contentToAnalyze = req.file.buffer.toString('utf8');
    const fileContent = myFileReader.getTextFromData(contentToAnalyze);
    const totalWords = myFileReader.getTotalWords(contentToAnalyze);
    const totalCharacters = myFileReader.getTotalCharacters(contentToAnalyze);
    const totalSpaces = myFileReader.getTotalSpaces(contentToAnalyze);
    const repeatedWords = myFileReader.getRepeatedWords(contentToAnalyze);
    res.render('results', { fileContent, totalWords, totalCharacters, totalSpaces, repeatedWords });
}));
router.use((req, res) => {
    res.status(404).send('Not Found');
});
exports["default"] = router;


/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.app = void 0;
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const routes_1 = __importDefault(__webpack_require__(/*! ./routes/routes */ "./src/routes/routes.ts"));
exports.app = (0, express_1.default)();
exports.app.set('view engine', 'hbs');
exports.app.set('views', path_1.default.join(__dirname, '/public/views'));
exports.app.use('/', routes_1.default);
exports.app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
module.exports = { app: exports.app };


/***/ }),

/***/ "./src/singletons/FileReader.ts":
/*!**************************************!*\
  !*** ./src/singletons/FileReader.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyFilereader = void 0;
class MyFilereader {
    static getInstance() {
        if (!this.instance) {
            this.instance = new MyFilereader();
        }
        return this.instance;
    }
    getTextFromData(data) {
        return data;
    }
    getWordsFromData(data) {
        return data.split(/\s+/);
    }
    getTotalWords(data) {
        return this.getWordsFromData(data).length;
    }
    getTotalCharacters(data) {
        return data.replace(/[^a-z]/gi, '').length;
    }
    getTotalSpaces(data) {
        return data.split(' ').length - 1;
    }
    getRepeatedWords(data) {
        const words = this.getWordsFromData(data);
        const wordCounts = {};
        console.log('words :>> ', words);
        words.reduce((acc, word) => {
            acc[word] = (acc[word] || 0) + 1;
            return acc;
        }, wordCounts);
        return Object.entries(wordCounts).filter(([word, count]) => count > 10);
    }
}
exports.MyFilereader = MyFilereader;
MyFilereader.instance = null;


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.js.map