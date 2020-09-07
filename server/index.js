const express = require('express');
const path = require('path');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const model = require('../db/model.js');
const postgres = require('../db/PostgreSQL/index.js');

// what to put into url: before my changes
// http://localhost:3004/rooms/5/

const app = express();
app.use(compression());

const PORT = 3004;
// app.use('/rooms/:room_id', express.static(path.join(__dirname, '../public')));
app.use('/rooms/:id', expressStaticGzip(path.join(__dirname, '../public')));

// get request original mongodb

app.get('/suggestedListings', (req, res) => {
  console.log('get req working!');
  model.getListings((error, listings) => {
    if (error) {
      console.log('server down');
      res.status(400).send(error);
    } else {
      console.log('GET received!');
      res.status(200).send(listings);
    }
  });
});

// new get request for PostgreSQL

app.get('/listing/:id', (req, res) => {
  console.log('get req working!');
  let id = req.params.id;
  postgres.getListings(id, (err, listings) => {
    if (err) {
      console.log('server down');
      res.status(400).send(err);
    } else {
      console.log('Postgres working in server!');
      res.status(200).send(listings);
    }
  });
});

// post request

// put request
// might need to add individual id of room
// app.put('/suggestedListings', (req, res) => {
//   console.log(req.body);
//   console.log('get put working!');
//   model.updateListing((error, listings) => {
//     if (error) {
//       console.log('server down');
//       res.status(400).send(error);
//     } else {
//       console.log('PUT received!');
//       res.status(200).send(listings);
//     }
//   });
// });

// delete request

app.listen(PORT, (error) => {
  if (error) {
    console.log('Failed Server Connection');
  } else {
    console.log(`Server listening on PORT: ${PORT}`);
  }
});
