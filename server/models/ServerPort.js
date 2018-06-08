var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var ServerPort = new Schema({
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

module.exports = mongoose.model('ServerPort', ServerPort);

// var CheckPointPort = new Schema({
//   checkPointPost: {
//     type: String
//   },
//   checkPointAddress: {
//     type: String
//   },
//   checkPointZipcode: {
//       type: Number
//   },
//   checkPointCity: {
//     type: String
//   },
//   checkPointState: {
//     type: String
//   },
//   checkPointDate: {
//     type: String
//   },
//   checkPointTime: {
//     type: String
//   }
// },{
//     collection: 'checkpoints'
// });

// module.exports = mongoose.model('CheckPointPort', CheckPointPort);