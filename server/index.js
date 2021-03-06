const compression = require('compression');
const express = require('express');
const cors = require('cors');
const path = require('path');
const { generatePDF } = require('./generatePDF.js');
const { nodemailerSendEmail } = require('./nodemailer.js')

const app = express();
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'src', 'dist')));
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(compression({ level: 9 }));

app.post('/pdf', async (req, res) => {
  // generate the pdf
    console.log('Generating PDF, please wait!');
    await generatePDF(req.body).catch(err => console.log(err));
    console.log('The pdf was created!')
  // send the pdf over nodemailer
    await nodemailerSendEmail(req.body).catch(err => {
      console.log(err);
      res.status(500).send(err)
      console.log("nodemailer had an error sending the email")
    });
  // send the completed pdf doc to the specified email & log success if there are no errors
    res.status(200).send("nodemailer sent an email to the in mail system")
    console.log("nodemailer sent an email to the in mail system")
})

app.listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}`);
})
