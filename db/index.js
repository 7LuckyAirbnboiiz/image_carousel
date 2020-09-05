const mongoose = require('mongoose');

// used locally
const mongoUrl = 'mongodb://localhost:27017/suggestedListings';

// used with ec2
// const morgoUrl = 'mongdb://database/suggestedListings';

mongoose.connect(mongoUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database!');
});

const listingSchema = new mongoose.Schema({
  image: String,
  description: String,
  title: String,
  rate: Number,
  avgRating: Number,
  numberOfRatings: Number,
  wasLiked: Boolean,
  superhost: Boolean,
});

const roomsSchema = new mongoose.Schema({
  _id: Number,
  rooms: Array,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
