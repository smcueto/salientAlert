const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
const IceRaidModel = new Schema({
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
    type: Date
  }
},{
    collection: 'iceraids'
});

module.exports = mongoose.model('IceRaidnModel', IceRaidModel);
