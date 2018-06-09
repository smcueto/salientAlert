const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CheckPoint = new Schema({
  checkPointPost: {
    type: String
  },
  checkPointDateTimeCreated: {
    type: Date
  },
  checkPointAddress: {
    type: String
  },
  checkPointZipcode: {
      type: Number
  },
  checkPointCity: {
    type: String
  },
  checkPointState: {
    type: String
  },
  checkPointDate: {
    type: String
  },
  checkPointTime: {
    type: String
  }
},{
    collection: 'checkpoints'
});

module.exports = mongoose.model('CheckPoint', CheckPoint);