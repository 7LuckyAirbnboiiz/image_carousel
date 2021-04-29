const fs = require('fs');
const argv = require('yargs').argv;

const lines = argv.lines || 100;
const filename = argv.output || 'properties.csv';
const stream = fs.createWriteStream(filename);

const images = ['https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.20.15+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.20.25+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.24.41+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.25.02+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.25.40+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.25.51+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.26.00+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.26.31+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.27.42+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.27.53+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.28.00+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.28.05+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.28.16+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.30.27+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.30.36+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.36.20+PM.png', 'https://6cream.s3-us-west-1.amazonaws.com/Screen+Shot+2020-09-08+at+5.36.58+PM.png'];
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
  // const propertyId = i;
  // needs to be edited after adding images
  const img = images[i % 17];
  const superhost = superhosts[i % 2];
  const wasLiked = liked;
  const avgRating = avgRatings[i % 12];
  // const numberOfRatings = numberOfRating[i % 10];
  const numberOfRatings = i % 250;
  const numberOfBeds = numberOfBedsOptions[i % 8];
  const typeOfRoom = typeOfRooms[i % 6];
  const descrip = `${adjectives[i % 8]} ${properties[i % 5]} in ${cities[i % 14]} ${amenities[i % 15]}`;
  // const price = prices[i % 10];
  const price = (i % 250) + 50;

  if (i % (lines / 100) === 0) {
    console.log(`${100 - ((i * 100) / lines)}%`);
  }

  return `'${img}',${superhost},${wasLiked},${avgRating},${numberOfRatings},${numberOfBeds},'${typeOfRoom}','${descrip}',${price}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i--;
      let post = createProperty(i);
      if (i === 0) {
        writeStream.write(post, encoding, done);
      } else {
        // writeStream.write(post, encoding);
        canWrite = writeStream.write(post, encoding);
      }
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

stream.write('img,superhost,was_liked,avg_rating,number_of_rating,number_of_beds,type_of_room,descrip,price\n', 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
