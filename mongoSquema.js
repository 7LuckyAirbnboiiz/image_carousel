const mongoose = require('mongoose');

// used locally
const mongoUrl = 'mongodb://localhost:27017';
// const mongoUrl = 'mongodb://localhost:27017/propertyId';

// used with ec2
// const morgoUrl = 'mongdb://database/propertyId';

mongoose.connect(mongoUrl, { useNewUrlParser: true });
const db = mongoose.connection;

const propertySchema = new mongoose.Schema({
  propertyId: Number,
  listings: [Array],
  // ex: listings: [2, 3, 5, 7, 10, 11, 14, 17, 19, 22, 21, 24]
});

const listingSchema = new mongoose.Schema({
  listingId: Number,
  image: String,
  superhost: Boolean,
  wasLiked: Boolean,
  avgRating: Number,
  numberOfRatings: Number,
  typeOfRoom: String,
  description: String,
  price: Number,
});

// GET Request
const property = db.propertySchema.findOne({ propertyId: 1 });
const listings = db.listingSchema.find({ listingId: { $in: property.listings } }).toArray();

db.propertySchema.find({
  propertyId: { $in: propertySchema.listings },
  listings: { $in: propertySchema.listings },
}).toArray();

// POST Request
db.propertySchema.insertOne({
  propertyId: 15,
  listing: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
});

// PATCH Request
db.listingSchema.updateOne({
  listingId: 4,
},
{
  superhost: true,
  price: 1000000,
});

// Delete Request
db.propertySchema.deleteOne({
  propertyId: 5,
});
