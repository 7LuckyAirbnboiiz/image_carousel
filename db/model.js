/* eslint-disable array-callback-return */
const Listing = require('./index.js');

module.exports = {
  getListings: (callback) => {
    Listing.find((error, listings) => {
      if (error) {
        console.log('cannot search database');
        callback(error);
      } else {
        console.log('database searched');
        callback(null, listings);
      }
    });
  },
};

// create listing

// update listing

// delete listing
