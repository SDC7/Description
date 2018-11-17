const express = require('express');
const bodyParser = require('body-parser');

const Description = require('../database-mongodb/description.js');

const app = express();
const port = 3322;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'))

app.get('/description', (req, res) => {
  Description.count().exec(function(err, count) {
    var random = Math.floor(Math.random() * count)

  Description.findOne({})
  .skip(random)
  .exec(function (err, description) {
      if (err) {
        console.log('Error')
      }
      res.status(200).send(JSON.stringify(description))
   })
  });
});

// app.post('/', (req, res) => {

// });


app.listen(port, () => {
  console.log(`listening on port 3322`);
});