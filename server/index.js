// const compression = require('compression');
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const path = require('path');

app.use(express.static(path.resolve(__dirname, '..', 'client', 'src', 'dist')));
app.use(express.json());
// app.use(compression());

app.get('/', (req, res) => {
  console.log("got request");
})

app.listen(PORT, () => {
  console.log(`Express server is running on port: ${PORT}`);
})
