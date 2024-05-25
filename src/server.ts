import express from 'express';
import path from 'path';

import routes from './routes/routes';

export const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/public/views'));

app.use('/', routes);

app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});

module.exports = { app };
