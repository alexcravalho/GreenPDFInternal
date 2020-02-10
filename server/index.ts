// import compression from 'compression';
import express from 'express';
const app = express();
const PORT = 3000 || process.env.PORT;
import path from 'path';

app.use(express.static(path.resolve(__dirname, '..', 'client', 'src', 'dist')));
app.use(express.json());
// app.use(compression());

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Express server is running on port: ${PORT}`);
})
