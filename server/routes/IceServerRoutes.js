const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const IceRaidModel = require('../models/IceRaid');

ServerPortRouter.route('/add').post(function (req, res) {
  
  const raidBodyRequest = new IceRaidModel(req.body);
  raidBodyRequest.save()
    .then(raidBodyRequest => {
        res.json('Ice Raid Report added successfully');
    })
    .catch(err => {
    res.status(500).send("unable to save to database");
    });
});

ServerPortRouter.route('/').get(function (req, res) {
    IceRaidModel.find(function (err, serverports){
    if(err){
      return err;
    }
    else {
      res.json(serverports);
    }
  });
});

ServerPortRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  IceRaidModel.findById(id, function (err, raidBodyRequest){
      res.json(raidBodyRequest);
  });
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    IceRaidModel.findById(req.params.id, function(err, raidBodyRequest) {
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
            res.status(500).send("unable to update the database");
      });
    }
  });
});

ServerPortRouter.route('/delete/:id').get(function (req, res) {
    IceRaidModel.findByIdAndRemove({_id: req.params.id},
       function(err, raidBodyRequest){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerPortRouter;