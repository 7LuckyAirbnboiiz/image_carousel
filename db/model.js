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

  // create listing

  // // update listing
  // updateListing: (req, res) => {
  //   // if required information is not given: throw an error
  //   // User.findByIdAndUpdate(req.params.id, req.body, { new: true })
  //   Listing.findByIdAndUpdate(req.params.id, req.body, { new: true })
  //     // then
  //     .then((listings) => {
  //       res.status(200).send(listings);
  //     })
  //       // if that listing doesn't exit
  //         // throw an error
  //     // catch error
  //     .catch((err) => {
  //       throw (err);
  //     });
  // },

  // delete listing

};
