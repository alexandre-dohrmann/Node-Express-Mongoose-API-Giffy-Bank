const mongoose = require('mongoose');


const gifSchema = new mongoose.Schema({
  url: String,
  description: String,
});












module.exports = mongoose.model('GIF', gifSchema);
