"use strict";
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
router.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const myFileReader = FileReader_1.MyFilereader.getInstance();
    const contentToAnalyze = req.file.buffer.toString('utf8');
    const fileContent = await myFileReader.getTextFromData(contentToAnalyze);
    const totalWords = await myFileReader.getTotalWords(contentToAnalyze);
    const totalCharacters = await myFileReader.getTotalCharacters(contentToAnalyze);
    const totalSpaces = await myFileReader.getTotalSpaces(contentToAnalyze);
    const repeatedWords = await myFileReader.getRepeatedWords(contentToAnalyze);
    res.render('results', { fileContent, totalWords, totalCharacters, totalSpaces, repeatedWords });
});
exports.default = router;
