const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Items
const IceRaidModel = new Schema({
  iceRaidDateTime: {
    type: Date
  },
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
}
},{
    collection: 'iceraids'
});

module.exports = mongoose.model('IceRaidModel', IceRaidModel);
