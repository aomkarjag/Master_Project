const mongoose = require('mongoose');

// Define the schema for a Person
const most_active_business_schema = new mongoose.Schema({
  Company: {
    type: String,
  },
  count: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('most_active_business', most_active_business_schema, "most_active_business");

