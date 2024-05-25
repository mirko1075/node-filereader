"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.set('view engine', 'hbs');
app.set('views', path_1.default.join(__dirname, '/public/views'));
app.use('/', routes_1.default);
app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
