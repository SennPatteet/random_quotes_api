//require
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const cors = require('cors');
app.use(cors());

app.set('view engine', 'ejs');

app.use(express.static('public'));

//auto refresh
app.use(morgan('dev'));

//bodyParser
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//routes
const quoteRoutes = require('./api/routes/quotes');

//call/connect mongoose
mongoose.connect('mongodb://quotes-api:' + process.env.MONGO_ATLAS_PW + '@cluster0-shard-00-00-49ywq.mongodb.net:27017,cluster0-shard-00-01-49ywq.mongodb.net:27017,cluster0-shard-00-02-49ywq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', {
  useNewUrlParser: true
});

//prevent CORS errors
app.use((req, res, next) => {
  res.header('Acces-Control-Allow-Origin', '*');
  res.header('Acces-Control-Allow-Headers', 'origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Acces-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({});
  }
  next();
});

//put '/quotes' in path by default
app.use('/quotes', quoteRoutes);

// error handling
// app.use((req, res, next) => {
//   const error = new Error('Not found');
//   error.status = 404;
//   next(error);
// });
//
// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   })
// });

module.exports = app;
