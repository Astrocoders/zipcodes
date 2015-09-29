Zipcodes = new Mongo.Collection('zipcodes');

Zipcodes.attachSchema(new SimpleSchema({
  code: {
    type: String,
    index: 1
  },

  city: {
    type: String
  },
  
  state: {
    type: String
  },

  address: {
    type: String,
    optional: true
  },
  
  neighborhood: {
    type: String,
    optional: true
  },
  
  latitude: {
    type: String,
    optional: true
  },

  longitude: {
    type: String,
    optional: true
  },
}));