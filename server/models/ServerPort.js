var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  iceRaidPost: {
    type: String
  },
  iceRaidZipcode: {
      type: Number
  },
  iceRaidCity: {
    type: string
  },
  iceRaidDate: {
    type: string
  },
  iceRaidTime: {
    type: string
  }
},{
    collection: 'iceraids'
});

module.exports = mongoose.model('ServerPort', ServerPort);