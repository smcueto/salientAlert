const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const Raid = require('../models/ServerPort');

ServerPortRouter.route('/add').post(function (req, res) {
  
  const serverport = new Raid(req.body);
  serverport.save()
    .then(serverport => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ServerPortRouter.route('/').get(function (req, res) {
    Raid.find(function (err, serverports){
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
  Raid.findById(id, function (err, serverport){
      res.json(serverport);
  });
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    Raid.findById(req.params.id, function(err, serverport) {
    if (!serverport)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      serverport.iceRaidPost = req.body.iceRaidPost;
      serverport.iceRaidAddress = req.body.iceRaidAddress;
      serverport.iceRaidZipcode = req.body.iceRaidZipcode;
      serverport.iceRaidCity = req.body.iceRaidCity;
      serverport.iceRaidState = req.body.iceRaidState;
      serverport.iceRaidDate = req.body.iceRaidDate;
      serverport.iceRaidTime = req.body.iceRaidTime;
      serverport.save().then(serverport => {
          res.json(serverport);
    
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ServerPortRouter.route('/delete/:id').get(function (req, res) {
    Raid.findByIdAndRemove({_id: req.params.id},
       function(err, serverport){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerPortRouter;