const express = require('express');
const app = express();
const ServerPortRouter = express.Router();
const ServerPort = require('../models/ServerPort');

ServerPortRouter.route('/add').post(function (req, res) {
  const serverport = new ServerPort(req.body);
  serverport.save()
    .then(serverport => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// ServerPortRouter.route('/map').post(function (req, res) {
//   const serverport = new ServerPort(req.body);
//   serverport.save()
//     .then(serverport => {
//         res.json('loaded map page successfully');
//     })
//     .catch(err => {
//     res.status(400).send("unable to load map page");
//     });
// });

ServerPortRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, serverports){
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
  ServerPort.findById(id, function (err, serverport){
      res.json(serverport);
  });
});

ServerPortRouter.route('/update/:id').post(function (req, res) {
    ServerPort.findById(req.params.id, function(err, serverport) {
    if (!serverport)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      serverport.iceRaidPost = req.body.iceRaidPost;
      serverport.iceRaidZipcode = req.body.iceRaidZipcode;
      serverport.iceRaidCity = req.body.iceRaidCity;
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
    ServerPort.findByIdAndRemove({_id: req.params.id},
       function(err, serverport){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ServerPortRouter;