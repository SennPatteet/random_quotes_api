//require
const express = require('express');
const mongoose = require('mongoose');

//add Router
const router = express.Router();

//get model
const Quote = require('../models/quote')

//get all quotes
router.get('/read', (req, res, next) => {
  Quote.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

//post a quote
router.post('/quotes/create', (req, res, next) => {

  const quote = new Quote({
    _id: new mongoose.Types.ObjectId(),
    quote: req.body.quote,
    character: req.body.character
  });

  quote.save().then(result => {
      console.log(result);
      res.status(201).json({
        message: "handling POST requests to /quotes",
        createdQuote: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

//get SPECIFIC quote
router.get('/:quoteId', (req, res, next) => {
  const id = req.params.quoteId;
  Quote.findById(id)
    .exec()
    .then(doc => {
      console.log("from database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({
          message: "No valid entry found for provided ID"
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

//update SPECIFIC quote
router.patch('/:quoteId', (req, res, next) => {
  const id = req.params.quoteId
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Quote.update({
      _id: id
    }, {
      $set: updateOps
    })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

//delete SPECIFIC quote
router.delete('/:quoteId', (req, res, next) => {
  const id = req.params.quoteId
  Quote.remove({
      _id: id
    })
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
    });
});

module.exports = router;
