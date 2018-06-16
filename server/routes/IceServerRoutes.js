const express = require('express');

const app = express();
const ServerPortRouter = express.Router();
const IceRaidModel = require('../models/IceRaid');

ServerPortRouter.route('/add').post((req, res) => {
  const raidBodyRequest = new IceRaidModel(req.body);
  raidBodyRequest.save()
    .then((raidBodyRequest) => {
      res.json('Ice Raid Report added successfully');
    })
    .catch((err) => {
      // send error to backend
      console.log('=========================================', err.errors, '========================================================');
      // sending error to the frontendconsole
      res.status(500).send(err.errors);
    });
});

ServerPortRouter.route('/icemapmarker/:id').get((req, res) => {
  console.log(req.query);
  console.log(req.params);
  IceRaidModel.findById(
    req.params.id,
    (err, iceraid) => {
      if (err) res.json(err);
      else res.json(iceraid);
    },
  );
});

ServerPortRouter.route('/').get((req, res) => {
  IceRaidModel.find((err, serverports) => {
    if (err) {
      return err;
    }
    res.json(serverports);
  });
});

ServerPortRouter.route('/edit/:id').get((req, res) => {
  const id = req.params.id;
  IceRaidModel.findById(id, (err, raidBodyRequest) => {
    res.json(raidBodyRequest);
  });
});

ServerPortRouter.route('/update/:id').post((req, res) => {
  IceRaidModel.findById(req.params.id, (err, raidBodyRequest) => {
    if (!raidBodyRequest) { return next(new Error('Could not load Document')); }

    // do your updates here
    raidBodyRequest.iceRaidPost = req.body.iceRaidPost;
    raidBodyRequest.iceRaidAddress = req.body.iceRaidAddress;
    raidBodyRequest.iceRaidZipcode = req.body.iceRaidZipcode;
    raidBodyRequest.iceRaidCity = req.body.iceRaidCity;
    raidBodyRequest.iceRaidState = req.body.iceRaidState;
    raidBodyRequest.iceRaidDate = req.body.iceRaidDate;
    raidBodyRequest.save().then((raidBodyRequest) => {
      res.json(raidBodyRequest);
    })
      .catch((err) => {
        res.status(500).send('unable to update the database');
      });
  });
});

ServerPortRouter.route('/delete/:id').get((req, res) => {
  IceRaidModel.findByIdAndRemove(
    { _id: req.params.id },
    (err, raidBodyRequest) => {
      if (err) res.json(err);
      else res.json('Successfully removed');
    },
  );
});

module.exports = ServerPortRouter;
