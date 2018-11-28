// const { Pool } = require('pg');  // non local host
const pgp = require('pg-promise')(/*options*/);
// connection string
var promise = require('bluebird');

var options = {
  promiseLib: promise
};

const connection = "postgres://localhost:5432/description";
// new connection
const db = pgp(connection);

// connect
// db.connect();
function getSingleDescription(req, res, next) {
  var desID = parseInt(req.params.id);
  db.one('select * from description where id = $1', desID)
    .then(function (data) {
      res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved one description'
      })
    })
    .catch(function(err) {
      return next(err);
    })
}

function createDescription(req, res, next) {
  db.none('insert into description(id, imageUrl, Owner, houseName, description, bedrooms, beds, guests, baths, amenities, lock, rate)' +
    'values(${id}, ${imageUrl}, ${Owner}, ${houseName}, ${description}, ${bedrooms}, ${beds}, ${guests}, ${baths}, ${amenities}, ${lock}, ${rate})', req.body)
      .then(function() {
        res.status(200)
        .json({
          status:'success',
          message: 'inserted description'
        });
      })
      .catch(function (err) {
        return next(err);
      });
}

module.exports = {
  getSingleDescription: getSingleDescription,
  createDescription: createDescription
};