const mongoose = require('mongoose');

const { Schema } = mongoose;

// Define collection and schema for Items
const IceRaidModel = new Schema({
  iceRaidPost: {
    type: String,
  },
  iceRaidAddress: {
    type: String,
  },
  iceRaidZipcode: {
    type: Number,
  },
  iceRaidCity: {
    type: String,
  },
  iceRaidState: {
    type: String,
  },
  iceRaidDate: {
    type: Date,
  },
  iceRaidVoteUp: {
    type: Number,
  },
  iceRaidVoteDown: {
    type: Number,
  },
}, {
  collection: 'iceraids',
});

module.exports = mongoose.model('IceRaidModel', IceRaidModel);
