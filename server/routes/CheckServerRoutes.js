const express = require('express');

const app = express();
const ServerPortRouter = express.Router();
const CheckPointModel = require('../models/CheckPoint');

ServerPortRouter.route('/add').post((req, res) => {
  const checkPointBodyRequest = new CheckPointModel(req.body);
  checkPointBodyRequest.save()
    .then((checkPointBodyRequest) => {
      res.json('Check Point added successfully');
    })
    .catch((err) => {
      res.status(500).send('unable to save to database');
    });
});

ServerPortRouter.route('/').get((req, res) => {
  CheckPointModel.find((err, serverports) => {
    if (err) {
      return err;
    }
    res.json(serverports);
  });
});

ServerPortRouter.route('/edit/:id').get((req, res) => {
  const id = req.params.id;
  CheckPointModel.findById(id, (err, checkPointBodyRequest) => {
    res.json(checkPointBodyRequest);
  });
});

ServerPortRouter.route('/update/:id').post((req, res) => {
  CheckPointModel.findById(req.params.id, (err, checkPointBodyRequest) => {
    if (!checkPointBodyRequest) { return next(new Error('Could not load Document')); }

    // do your updates here
    checkPointBodyRequest.checkPointPost = req.body.checkPointPost;
    checkPointBodyRequest.checkPointAddress = req.body.checkPointAddress;
    checkPointBodyRequest.checkPointZipcode = req.body.checkPointZipcode;
    checkPointBodyRequest.checkPointCity = req.body.checkPointCity;
    checkPointBodyRequest.checkPointState = req.body.checkPointState;
    checkPointBodyRequest.checkPointDate = req.body.checkPointDate;
    checkPointBodyRequest.checkPointTime = req.body.checkPointTime;
    checkPointBodyRequest.save().then((checkPointBodyRequest) => {
      res.json(checkPointBodyRequest);
    })
      .catch((err) => {
        res.status(500).send('unable to update the database');
      });
  });
});

ServerPortRouter.route('/delete/:id').get((req, res) => {
  CheckPointModel.findByIdAndRemove(
    { _id: req.params.id },
    (err, checkPointBodyRequest) => {
      if (err) res.json(err);
      else res.json('Successfully removed');
    },
  );
});

module.exports = ServerPortRouter;
