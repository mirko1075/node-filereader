"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes/routes"));
exports.app = (0, express_1.default)();
exports.app.set('view engine', 'hbs');
exports.app.set('views', path_1.default.join(__dirname, '/public/views'));
exports.app.use('/', routes_1.default);
exports.app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
module.exports = { app: exports.app };
//# sourceMappingURL=server.js.map