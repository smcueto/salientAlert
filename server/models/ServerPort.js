var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
  iceraidpost: {
    type: String
  },
  iceraidzipcode: {
      type: Number
  }
},{
    collection: 'iceraids'
});

module.exports = mongoose.model('ServerPort', ServerPort);