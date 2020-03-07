import compression from 'compression';
import express from 'express';
import cors from 'cors';
import path from 'path';
import PDFDocument from 'pdfkit';
import { nodemailerSendEmail } from './nodemailer'

const app = express();
const { PORT = 3000 } = process.env;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'src', 'dist')));
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
// app.use(compression());

app.post('/pdf', (req, res) => {
// create a blank pdf with pdfkit
  const doc = new PDFDocument();
  // doc.pipe(fs.createWriteStream('output.pdf'))
// add an image to the blank pdf
  doc.image(req.body.image, {
    align: 'center',
    valign: 'center'
  });
// finalize the pdf
  doc.end();
// add the new PDF to the request object
  req.body.document = doc;
  // send the completed pdf doc to the specified email
  // tslint:disable-next-line:no-console
  nodemailerSendEmail(req.body).catch((err: any) => { console.log(err) })
  //
})

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Express server is running on port: ${PORT}`);
})
