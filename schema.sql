-- schema creation

-- I don't think this line doing anything because I'm already in that database at this point which I can't drop
DROP DATABASE IF EXISTS listing;

CREATE DATABASE listing;

\c listing;

DROP TABLE IF EXISTS property_listings;

DROP TABLE IF EXISTS properties;

-- CREATE TABLE properties(
--   propertyId INTEGER,
--   -- propertyId SERIAL PRIMARY KEY NOT NULL
-- );

-- DROP TABLE IF EXISTS listings;

CREATE TABLE IF NOT EXISTS properties(
  property_id SERIAL PRIMARY KEY,
  -- listingId SERIAL PRIMARY KEY NOT NULL,
  img VARCHAR (100) NOT NULL,
  superhost BOOLEAN NOT NULL,
  was_liked BOOLEAN NOT NULL,
  avg_rating DECIMAL NOT NULL,
  number_of_ratings INTEGER NOT NULL,
  number_of_beds SMALLINT NOT NULL,
  type_of_room VARCHAR (20) NOT NULL,
  descrip VARCHAR (150) NOT NULL,
  price INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS property_listings (
  property_id INTEGER,
  listing_id INTEGER,
  FOREIGN KEY (property_id) REFERENCES properties(property_id) ON UPDATE CASCADE,
  FOREIGN KEY (listing_id) REFERENCES properties(property_id) ON UPDATE CASCADE
  -- PRIMARY KEY (propertyId, listingID),
  -- FOREIGN KEY (propertyId) REFERENCES property(propertyId), ON UPDATE CASCADE,
  -- ON DELETE instead?
  -- FOREIGN KEY (listingId) REFERENCES listings(listingId) ON UPDATE CASCADE,
);

-- CREATE TABLE propertyListings (
--   popertyId INTEGER,
--   listingId INTEGER,
--   -- PRIMARY KEY (propertyId, listingID),
--   FOREIGN KEY (propertyId) REFERENCES property(propertyId) ON UPDATE CASCADE,
--   -- ON DELETE instead?
--   FOREIGN KEY (listingId) REFERENCES listings(listingId) ON UPDATE CASCADE,
-- );

-- need to edit to add some identification of property
-- GET request
-- SELECT * FROM properties WHERE propertyId IN (
--   SELECT * FROM propertyListings WHERE propertyId = 1
-- )

-- SELECT * FROM propertyListings WHERE propertyId = 1;

-- SELECT * FROM properties WHERE propertyId = "the ids which were saved";


-- SELECT * FROM related_properties WHERE property_id = 1;

--POST request
-- INSERT INTO properties (propertyId) VALUES (55);

-- INSERT INTO properties (property_id, img, superhost, was_liked, avg_rating, number_of_ratings, number_of_beds, type_of_room, descrip, price) VALUES (10000011, 'some img url string', true, false, 3, 44, 5, 'awesome place', 'this is an awesome place', 68);

-- or for one
-- INSERT INTO listings (superhost) VALUES (true);

-- PATCH request
-- UPDATE properties
-- SET img = 'some url string',
--     superhost = false,
--     wasLiked = true,
--     avgRating = 3,
--     numberOfRatings = 56,
--     typeOfRoom = 'cozy place',
--     descrip = 'this is a very cozy place',
--     price = 77
-- WHERE propertyId = 10000011

-- DELETE request
-- DELETE FROM properties
-- WHERE propertyId;

-- UPDATE properties SET img = 'some url string', superhost = false, was_liked = true, avg_rating = 3, number_of_ratings = 56, type_of_room = 'cozy place', descrip = 'this is a very cozy place', price = 77 WHERE property_id = 10000011;


-- INSERT INTO properties (img, superhost, was_liked, avg_rating, number_of_ratings, number_of_beds, type_of_room, descrip, price) VALUES ('some img url string', true, false, 3, 44, 5, 'awesome place', 'this is an awesome place', 68);

-- INSERT INTO property_listings (property_id, listing_id) VALUES (1000, 55);