/* eslint-disable array-callback-return */
const { Client } = require('pg');
const Listing = require('./index.js');
// const conString = require('./PostgreSQL/postgresConfig.js');

// const client = new Client({
//   connectionString: conString,
// });



// client.connect();
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message); // Hello World!
//   client.end();
// });

// client.query('SELECT * FROM properties WHERE property_id = 1', (err, res) => {
//   console.log('something works');
//   console.log(conString);
//   console.log(res);
//   client.end();
// });

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
