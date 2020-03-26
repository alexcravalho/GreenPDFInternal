const puppeteer = require('puppeteer');

module.exports.generatePDF = async function generatePDF(data) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
  for (var key in data.inputs) {
    await page.click(key)
    const elementHandle = await page.$(key);
    await elementHandle.type(data.inputs[key]);
  }
  for (var key in data.checkboxes) {
    if (data.checkboxes[key] === true) {
      await page.click(key)
    }
  }
  await page.pdf({
    path: './server/' + data.createdName,
    width: 1200,
    height: 2400,
    printBackground: true
  });
  await browser.close();
};

