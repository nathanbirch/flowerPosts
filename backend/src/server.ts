import http from 'http';
import express, { Express } from 'express';
import routes from './routes/posts';

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  // api restrictions - todo: modify this when preparing for deploy
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'origin, X-Requested-With,Content-Type,Accept, Authorization'
  );
  next();
});

app.use('/', routes);

app.use((req, res) => {
  const error = new Error('not found');
  return res.status(404).json({
    message: error.message,
  });
});

const server = http.createServer(app);
const PORT: any = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Running on ${PORT}`));
module.exports = server;
