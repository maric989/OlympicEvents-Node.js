const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

//create Schema
const eventSchema = new Schema({
  name: String,
  slug: {
    type: String,
    unique: true
  },
  description: String

});
//middleware
//create slug from name
eventSchema.pre('save',function(next){
  this.slug = slugify(this.name);
  next();
});

//create model
const eventModel = mongoose.model('Event',eventSchema);

//export model
module.exports = eventModel;


//slugify
function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}
