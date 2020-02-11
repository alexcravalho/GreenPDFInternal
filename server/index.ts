import compression from 'compression';
import express from 'express';
import cors from 'cors';
import path from 'path';
const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'src', 'dist')));
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(compression());

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Express server is running on port: ${PORT}`);
})
