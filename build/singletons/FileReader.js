"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=FileReader.js.map