const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
const IceRaidModel = new Schema({
  iceRaidPost: {
    type: String
  },
  iceRaidDateTimeCreated: {
    type: Date
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

module.exports = mongoose.model('IceRaidnModel', IceRaidModel);
