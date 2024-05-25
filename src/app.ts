import express from 'express';
import path from 'path';

import routes from './routes/routes';

export const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/public/views'));

app.use('/', routes);

module.exports = { app };
