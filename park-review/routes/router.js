const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Park = require('../models/park');

router.get('/', (req, res, next) => {
  Park.find()
    .exec()
    .then(parks => {
      res.status(200).json(parks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.post('/addPark', (req, res, next) => {
  const park = new Park({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image_link: req.body.image_link,
    location: req.body.location,
    established_date: req.body.established_date,
    area: req.body.area,
    yearly_visitors: req.body.yearly_visitors,
    description: req.body.description, 
    twitter_id: req.body.twitter_id
  });
  park.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: 'Handling POST requests to /parks',
      createdPark: result
    });
  }).catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get('/:parkId', (req,res,next) => {
  const id = req.params.parkId;
  Park.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:parkId", (req, res, next) => {
  const id = req.params.parkId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Park.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.delete("/:parkId", (req, res, next) => {
  const id = req.params.parkId;
  Park.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

module.exports = router;
