const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const iceCollectionDirectory = require('../models/IceRaidModel');

ServerPortRouter.route('/add').post(function (req, res) {
  
  const raidBodyRequest = new iceCollectionDirectory(req.body);
  raidBodyRequest.save()
    .then(raidBodyRequest => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ServerPortRouter.route('/').get(function (req, res) {
    iceCollectionDirectory.find(function (err, serverports){
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
  iceCollectionDirectory.findById(id, function (err, raidBodyRequest){
      res.json(raidBodyRequest);
  });
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    iceCollectionDirectory.findById(req.params.id, function(err, raidBodyRequest) {
    if (!raidBodyRequest)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      raidBodyRequest.iceRaidPost = req.body.iceRaidPost;
      raidBodyRequest.iceRaidAddress = req.body.iceRaidAddress;
      raidBodyRequest.iceRaidZipcode = req.body.iceRaidZipcode;
      raidBodyRequest.iceRaidCity = req.body.iceRaidCity;
      raidBodyRequest.iceRaidState = req.body.iceRaidState;
      raidBodyRequest.iceRaidDate = req.body.iceRaidDate;
      raidBodyRequest.iceRaidTime = req.body.iceRaidTime;
      raidBodyRequest.save().then(raidBodyRequest => {
          res.json(raidBodyRequest);
    
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ServerPortRouter.route('/delete/:id').get(function (req, res) {
    iceCollectionDirectory.findByIdAndRemove({_id: req.params.id},
       function(err, raidBodyRequest){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerPortRouter;