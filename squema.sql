-- schema creation

CREATE SCHEMA listingSchema;

DROP TABLE IF EXISTS properties;

-- CREATE TABLE properties(
--   propertyId INTEGER,
--   -- propertyId SERIAL PRIMARY KEY NOT NULL
-- );

-- DROP TABLE IF EXISTS listings;

CREATE TABLE properties(
  propertyId INTEGER,
  -- listingId SERIAL PRIMARY KEY NOT NULL,
  img VARCHAR (50),
  superhost BOOLEAN,
  wasLiked BOOLEAN,
  avgRating SMALLINT,
  numberOfRatings INTEGER,
  numberOfBeds SMALLINT,
  typeOfRoom VARCHAR (20),
  descrip VARCHAR (100),
  price INTEGER,
);

DROP TABLE IF EXISTS propertyListings;

CREATE TABLE propertyListings (
  popertyId INTEGER,
  listingId INTEGER,
  FOREIGN KEY (propertyId) REFERENCES properties(propertyId),
  FOREIGN KEY (listingId) REFERENCES properties(propertyId),
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
SELECT * FROM properties WHERE propertyId IN (
  SELECT * FROM propertyListings WHERE propertyId = 1
)

-- SELECT * FROM propertyListings WHERE propertyId = 1;

-- SELECT * FROM properties WHERE propertyId = "the ids which were saved";


-- SELECT * FROM related_properties WHERE property_id = 1;

--POST request
INSERT INTO properties (propertyId) VALUES (55);

-- INSERT INTO listings (listingId, img, superhost, wasLiked, avgRating, numberOfRatings, typeOfRoom, descrip, price) VALUES (1, 'some img url string', true, false, 3, 44, 'awesome place', 'this is an awesome place', 68);

-- or for one
-- INSERT INTO listings (superhost) VALUES (true);

-- PATCH request
UPDATE properties
SET propertyId = 5,
    img = 'some url string',
    superhost = false,
    wasLiked = true,
    avgRating = 3,
    numberOfRatings = 56,
    typeOfRoom = 'cozy place',
    descrip = 'this is a very cozy place',
    price = 77,
WHERE lisitingId = 1;

-- DELETE request
DELETE FROM properties
WHERE propertyId;
