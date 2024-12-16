const mongoose = require('mongoose');

// Define the schema for a Person
//model for active person
const most_active_person = new mongoose.Schema({
  Person: {
    type: String,
  },
  count: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('mostActivePerson', most_active_person, "mostActivePerson");

