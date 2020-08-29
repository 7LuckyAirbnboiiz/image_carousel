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
  image: String,
  superhost: Boolean,
  wasLiked: Boolean,
  avgRating: Number,
  numberOfRatings: Number,
  typeOfRoom: String,
  numberOfBeds: Number,
  description: String,
  price: Number,
  listings: [Array],
  // do I need this part?
  thisPropertyListed: [Array],
});

// const listingSchema = new mongoose.Schema({
//   listingId: Number,
//   image: String,
//   superhost: Boolean,
//   wasLiked: Boolean,
//   avgRating: Number,
//   numberOfRatings: Number,
//   typeOfRoom: String,
//   description: String,
//   price: Number,
//   // not sure if I need this part
//   // might need if listing is ever deleted
//   // would be all properties which indlude this listing
//   properties: [Array],
//   // or the id to a new table
//   properties: Number,
//   // or maybe use ObjectId()
//   properties: String,
// });

// // might need a new table for which properties have which listings in their listings array
// const propertyListings = new mongoose.Schema({
//   // would be all properties which indlude this listing
//   properties: [Array],
//   // if number id
//   listing: Number,
//   // if ObjectId()
//   listing: String,
// });

// GET Request
// const property = db.propertySchema.findOne({ propertyId: 1 });
// const listings = db.listingSchema.find({ listingId: { $in: property.listings } }).toArray();

const property = db.propertySchema.find({ propertyId: 1});
const listings = db.propertySchema.find({ propertyId: { $in : property.listings } }).toArray();

// POST Request
db.propertySchema.insertOne({
  propertyId: 15,
  image: 'some image url',
  superhost: true,
  wasLiked: false,
  avgRating: 3,
  numberOfRatings: 56,
  typeOfRoom: 'Entire unit',
  numberOfBeds: 3,
  description: 'this place is awesome',
  price: Number,
  listing: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
});

// PATCH Request
db.propertySchema.updateOne({
  propertyId: 4,
},
{
  superhost: true,
  price: 1000000,
});

// thisPropertyListed: [Array],

// Delete Request
const property = db.propertySchema.find({propertyId: 5});
//want to find all property's which contains this propertyId in their listings (5)
const allProperties = db.propertySchema.find({});

db.propertySchema.deleteOne({
  propertyId: 5,
});

for (var i = 0; i < property.thisPropertyListed; i++) {
  for (var j = 0; j < allProperties; j++) {
    if (property.thisPropertyListed === allProperties.listings) {
      db.propertySchema.updateOne({
        propertyId: 5,
      },
      {
        // using some listing randomizer
        listing: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13]
      });
    }
  }
}
property.thisPropertyListed
allProperties.listings

// if deleting a listing

// I feel like this process doesn't make sense => if it was actually done like this it would take
// way to long because you would be going through all the properties to check if a listing existed
// in that listings array and then replacing them. The replacing part won't be too bad but just going
// through all the prperties like that doesn't make sense. It's more likely checked if each time it
// loads, it either recreates a new listing that makes sense for that property, or uses the old one
// and checks if all those listings still exist or not, and if not, chooses some new ones to replace
// and missing ones

// find the listing with certain id => use listing.properties to get id of propertyListings
const listing = db.listingSchema.findOne({ listingId: 2 });
// find all propertyIds stored in that propertyListing
// const properties = db.propertyListings.find({ properties: { $in: listingId: 2 } });

const properties = db.propertySchema.find({ listings: { $in: listing.properties } }).toArray();

// remove the lisingId form all the properties and replace with a new one
// the replaacing would most likely be dealt with with an specialized algorithem =>
// but could just replace with another random listing

// delete listing
db.listingSchema.deletOne({
  listingId: 2,
});

// what I want the arrays for each property which includes thie listing which is goint to be deleted
const properties = db.propertySchema.find({ listings: { $in: }})
// update that array so that id replaced with another listings id
// delete the listing