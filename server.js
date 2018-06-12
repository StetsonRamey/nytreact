const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

//* MIDDLEWARE

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// ADD ROUTES, API & VIEW
app.use(routes);

//* CONNECT TO MONGO DATABASE
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact');

//* START THE API SERVER
app.listen(PORT, function() {
  console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
