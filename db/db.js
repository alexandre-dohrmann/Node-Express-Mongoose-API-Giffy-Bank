const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/gif";
mongoose.connect(url, { useNewUrlParser: true });



mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});
