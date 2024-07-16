const mongoose = require('mongoose')
const DataSchema = new mongoose.Schema({
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  year: Number,
  country: String,
  topics: String,
  region: String,
  city: String,
  // Add other fields from the JSON data
});

module.exports = mongoose.model('Data', DataSchema);