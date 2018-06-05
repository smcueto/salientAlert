var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  iceRaidPost: {
    type: String
  },
  iceRaidZipcode: {
      type: Number
  }
},{
    collection: 'iceraids'
});

module.exports = mongoose.model('ServerPort', ServerPort);