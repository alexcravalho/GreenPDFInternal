const nodemailer = require('nodemailer');
const path = require('path');
const authConfig = require('./emailAuth.js');

module.exports.nodemailerSendEmail = async function nodemailerSendEmail(requestObj) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: authConfig.user,
      pass: authConfig.pass
    }
  });
  // configure mailing options with attachment
  const mailOptions = {
    from: "test@test.com", // sender address
    to: "test@test.com", // list of receivers
    subject: "Test for nodemailer", // Subject line
    text: `Here is the Pre-Checkout Checklist for ${requestObj.inputs['.driver']} on ${requestObj.inputs['.date']}`, // plain text body
    attachments: [
      {
        filename: requestObj.createdName,
        path: path.join(__dirname, requestObj.createdName),
        contentType: 'application/pdf'
      }
    ]
  };
  // send mail with defined transport object
  await transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
  });
}
