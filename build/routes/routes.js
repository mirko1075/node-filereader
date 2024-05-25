"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const FileReader_1 = require("../singletons/FileReader");
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
exports.default = router;
//# sourceMappingURL=routes.js.map