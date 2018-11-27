// const { Pool } = require('pg');  // non local host
const pg = require('pg');
// connection string
const connection = "postgres://@localhost:5432/description";
// new connection
const db = new pg.Client(connection);

// connect
db.connect();


const description =
  `CREATE TABLE IF NOT EXISTS description (
    id bigint PRIMARY KEY,
    imageUrl varchar,
    Owner varchar,
    houseName varchar,
    description varchar,
    bedrooms int,
    beds int,
    guests int,
    baths int,
    amenities varchar,
    city varchar,
    lock varchar,
    rate int
)`;

const csvSeed = `COPY description FROM '/Users/mikaylahasal/Desktop/HRgit/Description/database-cassandra/description.csv' WITH (FORMAT csv);`;

const create = () => {
  db.query(description)
    .then((res) => {
      console.log('created table');
    })
    .catch((err) => {
      console.log(err);
    });
 };

const seed = () => {
  db.query(csvSeed)
  .then((res) => {
    console.log('seeded db');
  })
  .catch((err) => {
    console.log(err);
  });
};

create();
seed();
