// create new express routes
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controller'),
  eventsController = require('./controllers/events.controller');

//Export Router
module.exports = router;

//define routes
router.get('/', mainController.showHome);
router.get('/events'      ,eventsController.showEvents);


//seed db
router.get('/events/seed',eventsController.seedEvents);

//show single event
router.get('/events/:slug',eventsController.showSingle);
