var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CheckPointCollectionModel = new Schema({
  checkPointPost: {
    type: String
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

module.exports = mongoose.model('CheckPointModel', CheckPointModel);