const mongoose = require('mongoose');


const gifSchema = new mongoose.Schema({
  URL: String,
  description: String,
});












module.exports = mongoose.model('GIF', gifSchema);
