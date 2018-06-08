var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var iceRaidCollection = new Schema({
  iceRaidPost: {
    type: String
  },
  iceRaidAddress: {
    type: String
},
  iceRaidZipcode: {
      type: Number
  },
  iceRaidCity: {
    type: String
  },
  iceRaidState: {
    type: String
},
  iceRaidDate: {
    type: String
  },
  iceRaidTime: {
    type: String
  }
},{
    collection: 'iceraids'
});

module.exports = mongoose.model('IceRaidModel', IceRaidModel);
