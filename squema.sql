-- schema creation

CREATE SCHEMA listingSchema;

DROP TABLE properties;

CREATE TABLE properties(
  propertyId INTEGER,
  -- propertyId SERIAL PRIMARY KEY NOT NULL
);

DROP TABLE listings;

CREATE TABLE listings(
  listingId INTEGER,
  -- listingId SERIAL PRIMARY KEY NOT NULL,
  img VARCHAR (50),
  superhost BOOLEAN,
  wasLiked BOOLEAN,
  avgRating INTEGER,
  numberOfRatings INTEGER,
  typeOfRoom VARCHAR (50),
  descrip VARCHAR (100),
  price INTEGER,
);

DROP TABLE propertyListings;

CREATE TABLE propertyListings (
  popertyId INTEGER,
  listingId INTEGER,
  -- PRIMARY KEY (propertyId, listingID),
  FOREIGN KEY (propertyId) REFERENCES property(propertyId) ON UPDATE CASCADE,
  FOREIGN KEY (listingId) REFERENCES listings(listingId) ON UPDATE CASCADE
);

-- need to edit to add some identification of property
-- GET request
SELECT * FROM propertyListings WHERE propertyId = 1;

--POST request
INSERT INTO properties (propertyId) VALUES (55);

-- INSERT INTO listings (listingId, img, superhost, wasLiked, avgRating, numberOfRatings, typeOfRoom, descrip, price) VALUES (1, 'some img url string', true, false, 3, 44, 'awesome place', 'this is an awesome place', 68);

-- or for one
-- INSERT INTO listings (superhost) VALUES (true);

-- PATCH request
UPDATE listings
SET img = 'some url string',
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
