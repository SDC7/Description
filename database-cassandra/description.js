const cassandra = require('cassandra-driver');
const async = require('async');
const seed = require('./data-seed.js');
const distance = cassandra.types.distance;
// const loadBalancing = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy('local');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  // pooling: {
  //   coreConnectionsPerHost: {
  //     [distance.local]: 1
  //   }
  // },
  // policies: {
  //   loadBalancing: loadBalancing
  // }
});

console.time();

client.connect()
  .then(() => {
    const createKS = "CREATE KEYSPACE IF NOT EXISTS sdc WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' }";
    return client.execute(createKS);
  })
  .then(() => {
    const createTable = "CREATE TABLE IF NOT EXISTS sdc.description ( id int PRIMARY KEY, imageUrl text, Owner text, houseName text, full text, description text, bedrooms int, beds int, guests int, baths int, amenities text, city text, lock text, rate int )";
    return client.execute(createTable);
  })
  .then(() => {
    const test = 'SELECT * from sdc.description WHERE propertyid = ?';
    return client.execute(test, [10000], {prepare: true});
  })
  .then(result => {
    const row = result.first();
    console.log('Retrieved row: %j', row);
    return client.shutdown();
  })
  .catch(err => {
    console.error('There was an error', err);
    return client.shutdown().then(() => { throw err; });
  });

console.timeEnd();