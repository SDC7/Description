const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const Description = require('../database-mongodb/description.js');

const app = express();
const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(path.join(__dirname, '..', '/public')));

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


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});