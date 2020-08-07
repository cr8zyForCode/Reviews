const express = require('express');
const app = express();
const port = 3000;
const model = require('../db/model.js');
const parser = require('body-parser')
const path = require('path');

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(parser.urlencoded({extended: false}));

app.listen(port, () => console.log(`Listening At Port ${port}`))

app.get('/reviews', (req, res) => {});

app.get('/reviews', (req, res) => {
  model.getUsers((err, data) => {
    if (err) {
      res.status(400).send()
    } else {
      res.stauts(200).send(data);
    }
  })
})