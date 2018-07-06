const DB = process.env.MONGOLAB_URI ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/salientalert';

module.exports = {
  DB,
};
