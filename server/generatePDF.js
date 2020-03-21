const puppeteer = require('puppeteer');

// let obj = {
//   createdName: 'new-example.pdf',
//   inputs: {
//     '.truck': 'new',
//     '.driver': '2',
//     '.helper': '3',
//     '.date': '4',
//     '.notes': '5',
//     '.lsd': '6',
//     '.ins': '7',
//     '.filter': '8',
//     '.coupler': '9',
//     '.tabs': '10',
//     '.pre': '11',
//     '.lube': '12',
//     '.product': '13'
//   },
//   checkboxes: {
//     '.airfilter-pantyhoecheck': true,
//     '.checkbelt-hoses': true,
//     '.checkoil': true,
//     '.no-oiladded': true,
//     '.green-coolant': true,
//     '.yes-powersteering': false,
//     '.no-powersteering': true
//   }
// };

module.exports.generatePDF = async function generatePDF(data) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.setViewport({width: 875, height: 1670, deviceScaleFactor: 2});
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
    height: 2290,
    printBackground: true
  });
  await browser.close();
};

// generatePDF(obj);

// module.exports.generatePDF = generatePDF;

    // in order to pass the correct "input" here we need the className of the input. Go to the HTML page and locate all the correct class names for all the inputs. Then change all the items on data (in the front end) to reflect the appropriate class names as keys.