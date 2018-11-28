// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Description = require('../database-postgres/pgindex.js');

const app = express();
const port = 3322;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../public'))

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))

});


app.get('/description/:id', Description.getSingleDescription);
app.post('/api/description', Description.createDescription);
// app.get('/description', (req, res) => {
//   Description.count().exec(function(err, count) {
//     var random = Math.floor(Math.random() * count)

//   Description.findOne({})
//   .skip(random)
//   .exec(function (err, description) {
//       if (err) {
//         console.log('Error')
//       }
//       res.status(200).send(JSON.stringify(description))
//    })
//   });
// });

// app.delete('/description', (req, res) => {
//   Description.deleteOne({id: req.params.id}, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   })
// });

// app.put('/description', (req, res) => {
//   Description.updateOne({id: req.params.id} , (err) => {
//     if (err) {
//       console.log(err);
//     }
//   })
// });

// app.post('/description', (req, res) => {
//   const description = new Description(req.body.description);
//   description.save((err) => {
//     if(err) {
//       console.log(err);
//     }
//   })
// })


app.listen(port, () => {
  console.log(`listening on port 3322`);
});

module.exports = app;