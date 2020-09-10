const { Client } = require('pg');
// const pgp = require('pg-promise');
// const conString = require('./postgresConfig.js');

// const db = pgp('postgres://username:password@host:port/database');

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const conString = 'postgres://pickAUserName:PickAPassword@54.153.73.47:5432/listing';

// const connectionString = 'postgres://username:password@host:port/database';

const client = new Client({
  // for using a username and password
  connectionString: conString,
});

client.connect();

module.exports = {
  getListings: (propertyId, callback) => {
    // client.connect();
    client.query(`SELECT * FROM properties WHERE property_id IN(SELECT listing_id FROM property_listings WHERE property_id = ${propertyId})`, (err, res) => {
      console.log('getListings for Postgres working');
      if (err) {
        console.log('error in postgres db side');
        callback(err, null);
      } else {
        callback(null, res);
      }
    });
  },
};

//   SELECT * FROM properties WHERE property_id IN(SELECT listing_id FROM property_listings WHERE property_id = 985);

//   var pgp = require('pg-promise')(/* options */)
// var db = pgp('postgres://username:password@host:port/database')

// db.one('SELECT $1 AS value', 123)
//   .then(function (data) {
//     console.log('DATA:', data.value)
//   })
//   .catch(function (error) {
//     console.log('ERROR:', error)
//   })

//   getProperties: (callback) => {
//     Listing.find((error, listings) => {
//       if (error) {
//         console.log('cannot search database');
//         callback(error);
//       } else {
//         console.log('database searched');
//         callback(null, listings);
//       }
//     });
//   },