const ExpressCassandra = require('express-cassandra');

const models = ExpressCassandra.createClient({
  clientOptions: {
    contactPoints: ['127.0.0.1'],
    protocolOptions: { port: 9042 },
    keyspace: 'mykeyspace',
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

var descriptionModel = models.loadSchema('Description', {
  fields: {
    id: 'int',
    imageUrl: 'text',
    Owner: 'text',
    houseName: 'text',
    full: 'text',
    description: 'text',
    bedrooms: 'int',
    beds: 'int',
    guests: 'int',
    baths: 'int',
    amenities: 'text',
    city: 'text',
    lock: 'text',
    rate: 'int'
  },
  key: ['id']
});

descriptionModel.syncDB(function(err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('New description schema', result);
  }
});