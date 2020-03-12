import compression from 'compression';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { nodemailerSendEmail } from './nodemailer'

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'src', 'dist')));
app.use(cors({ credentials: true, origin: true }));

app.use(express.json({ limit: '100mb'}));
// app.use(compression());

app.post('/pdf', (req, res) => {
// send the pdf over nodemailer


  // send the completed pdf doc to the specified email
  // tslint:disable-next-line:no-console
  // nodemailerSendEmail(req.body).catch((err: any) => { console.log(err) })
  // // log success if there are no errors
  // res.status(200).send("nodemailerSent an email to the in mail system")
})

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Express server is running on port: ${PORT}`);
})
