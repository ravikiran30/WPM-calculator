const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://navyashreekenkare:navyashreekenkare@cluster0.grfr0hn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});