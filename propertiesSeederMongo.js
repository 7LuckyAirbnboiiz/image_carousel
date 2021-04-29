const fs = require('fs');
const argv = require('yargs').argv;

const lines = argv.lines || 10000000;
const filename = argv.output || 'propertyMongo.csv';
const stream = fs.createWriteStream(filename);

const images = ['https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.26.49+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.29.09+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.29.22+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.29.34+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.30.09+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.30.23+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.30.56+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.31.02+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.31.13+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.31.20+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.31.34+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.32.40+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.32.45+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.32.58+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.33.05+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.33.35+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-31+at+8.33.42+PM.png'];
const superhosts = [true, false];
// always should start off as false
const liked = false;
const avgRatings = [2.9, 3.4, 3.7, 3.0, 4.1, 4.4, 3.0, 4.8, 4.0, 3.7, 4.5, 5.0];
const numberOfRating = [25, 43, 66, 18, 50, 6, 122, 88, 36, 75];
const numberOfBedsOptions = [1, 2, 4, 3, 4, 3, 5, 6];
const typeOfRooms = ['Entire apartment', 'Entire House', 'Condo', 'Hotel room', 'Private room'];
const adjectives = ['Stunning', 'Beautiful', 'Charming', 'Quaint', 'Delightful', 'Private', 'Secluded', 'Lovely'];
const properties = ['home', 'apartment', 'condo', 'unit', 'houseboat'];
const cities = ['San Francisco', 'Alameda', 'Pacifica', 'San Louis Obispo', 'Santa Cruz', 'Monterey', 'Los Angeles', 'Long Beach', 'Compton', 'Huntington Beach', 'Newport Beach', 'Laguna Beach', 'San Clemente', 'San Diego'];
const amenities = ['within walking distance to downtown', 'with views of the ocean', 'centrally located on mainstreet', 'with great access to restaurants and bars outside your front door', 'with a bus stop one block away', 'setback in the hills', 'with views of downtown', 'with access to hiking trails 30 minutes away', 'thats pet friendly', 'a block away from the park', 'a block from the beach', 'near bike path for an easy commute', 'in the heart of the city', 'with a large parking space', 'with a sizeable storage unit in the basement'];
const prices = [68, 109, 223, 88, 94, 164, 142, 73, 192, 115];

const createProperty = (i) => {
  const propertyId = i;
  // needs to be edited after adding images
  const image = images[i % 17];
  const superhost = superhosts[i % 2];
  const wasLiked = liked;
  const avgRating = avgRatings[i % 12];
  // const numberOfRatings = numberOfRating[i % 10];
  const numberOfRatings = i % 250;
  const numberOfBeds = numberOfBedsOptions[i % 8];
  const typeOfRoom = typeOfRooms[i % 6];
  const description = `${adjectives[i % 8]} ${properties[i % 5]} in ${cities[i % 14]} ${amenities[i % 15]}`;
  // const price = prices[i % 10];
  const price = (i % 250) + 50;
  const listingArray = [];
  listingArray.push((i + 50) % 100);
  listingArray.push((i + 51) % 99);
  listingArray.push((i + 52) % 98);
  listingArray.push((i + 53) % 97);
  listingArray.push((i + 54) % 96);
  listingArray.push((i + 55) % 95);
  listingArray.push((i + 56) % 94);
  listingArray.push((i + 57) % 93);
  listingArray.push((i + 58) % 92);
  listingArray.push((i + 59) % 91);
  listingArray.push((i + 60) % 90);
  listingArray.push((i + 61) % 89);
  // const listings = listingArray.join(',');
  // const listings = JSON.stringify(listingArray);
  const listings = listingArray;
  // const listings = "[\"503\",\"784\",\"1060\"]";

  // const listings = {
  //   listing1: 45,
  //   listing2: 33,
  // };
  // console.log(listings);
  if (i % (lines / 100) === 0) {
    console.log(`${100 - ((i * 100) / lines)}%`);
  }
  // for when I add listings back in
  return `${propertyId},'${image}',${superhost},${wasLiked},${avgRating},${numberOfRatings},${numberOfBeds},'${typeOfRoom}','${description}',${price},${listings}\n`;
  // return `${propertyId},'${image}',${superhost},${wasLiked},${avgRating},${numberOfRatings},${numberOfBeds},'${typeOfRoom}','${description}',${price}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const property = createProperty(i);
      if (i === 0) {
        writeStream.write(property, encoding, done);
      } else {
        // writeStream.write(property, encoding);
        canWrite = writeStream.write(property, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};
// stream.write('propertyId,image,superhost,wasLked,avgRating,numberOfRating,numberOfBeds,typeOfRoom,description,price,listings\n', 'utf-8');
stream.write('propertyId,image,superhost,wasLiked,avgRating,numberOfRating,numberOfBeds,typeOfRoom,description,price,listings.0,listings.1,listings.2,listings.3,listings.4,listings.5,listings.6,listings.7,listings.8,listings.9,listings.10,listings.11,listings.12\n', 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
