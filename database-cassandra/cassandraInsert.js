const ExpressCassandra = require('express-cassandra');

const models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'description',
    queryOptions: {consistency: ExpressCassandra.consistencies.one}
  },
  ormOptions: {
    defaultReplicationsStrategy: {
      class: 'SimpleStrategy',
      replication_factor: 1
    },
    migration: 'safe'
  }
});

var descriptionModel = models.loadSchema('data', {
  fields: {
    id: 'int',
    Owner: 'text',
    amenities: 'text',
    baths: 'int',
    bedrooms: 'int',
    beds: 'int',
    description: 'text',
    full: 'text',
    guests: 'int',
    houseName: 'text',
    imageUrl: 'text',
    lock: 'text',
    rate: 'int'
  },
  key: ['id']
});

descriptionModel.syncDB(function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('New description schema');
  }
});