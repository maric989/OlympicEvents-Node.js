//load env variables
require('dotenv').config();

// grab dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  expressLayouts = require('express-ejs-layouts'),
  mongoose = require('mongoose');

//configure App
//tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

//set ejs as our templating engine
app.set('view engine','ejs');
app.use(expressLayouts);

//Connect with db
mongoose.connect(process.env.DB_URI);

//routes
app.use(require('./app/route'))

//start server
app.listen(port,() => {
  console.log(`App listening on http://localhost:${port}`)
});
