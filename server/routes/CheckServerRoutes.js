const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const checkPointCollectionDirectory = require('../models/CheckPoint');

ServerPortRouter.route('/add').post(function (req, res) {
  
  const checkPointBodyRequest = new checkPointCollectionDirectory(req.body);
  checkPointBodyRequest.save()
    .then(checkPointBodyRequest => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ServerPortRouter.route('/').get(function (req, res) {
    checkPointCollectionDirectory.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });
});

ServerPortRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  checkPointCollectionDirectory.findById(id, function (err, checkPointBodyRequest){
      res.json(checkPointBodyRequest);
  });
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    checkPointCollectionDirectory.findById(req.params.id, function(err, checkPointBodyRequest) {
    if (!checkPointBodyRequest)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      checkPointBodyRequest.checkPointPost = req.body.checkPointPost;
      checkPointBodyRequest.checkPointAddress = req.body.checkPointAddress;
      checkPointBodyRequest.checkPointZipcode = req.body.checkPointZipcode;
      checkPointBodyRequest.checkPointCity = req.body.checkPointCity;
      checkPointBodyRequest.checkPointState = req.body.checkPointState;
      checkPointBodyRequest.checkPointDate = req.body.checkPointDate;
      checkPointBodyRequest.checkPointTime = req.body.checkPointTime;
      checkPointBodyRequest.save().then(checkPointBodyRequest => {
          res.json(checkPointBodyRequest);
    
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ServerPortRouter.route('/delete/:id').get(function (req, res) {
    checkPointCollectionDirectory.findByIdAndRemove({_id: req.params.id},
       function(err, checkPointBodyRequest){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerPortRouter;