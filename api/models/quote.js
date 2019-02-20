const mongoose = require('mongoose');

const quoteModel = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  quote: String,
  character: String 
});

module.exports = mongoose.model('Quote', quoteModel);
