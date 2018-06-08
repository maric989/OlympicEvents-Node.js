const Event = require('../models/events');

module.exports = {

  showEvents : (req,res) => {
    // get all events


    //return a view with data
    res.render('pages/events',{ events : events});
  },

  //single event
  showSingle : (req,res) => {

    const event = { name: 'Kosarka', slug: 'basket', description : 'Baca se lopta'};

    res.render('pages/single',{event : event})

  },

  //seed db
  seedEvents: (req,res) => {
    //create some events
    const events = [
      { name: 'Kosarka', description : 'Baca se lopta'},
      { name: 'Fudbal', description : 'Sutira se lopta'},
      { name: 'Plivanje', description : 'Ne baca se lopta'}
    ];

    //insert into model
    for (event of events)
    {
      var newEvent = new Event(event);
      newEvent.save();
    }

    //seeded
    res.send('Database seeded');
  }

}
