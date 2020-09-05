const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writeUsers = fs.createWriteStream('users.csv');
writeUsers.write('id,username,avatar\n', 'utf8');

const writer = csvWriter();

const images = ['temporary string'];
const superhost = [true, false];
// always should start off as false
const wasLiked = false;
const avgRating = [2.9, 3.4, 3.7, 3.0, 4.1, 4.4, 3.0, 4.8, 4.0, 3.7, 4.5, 5.0];
const numberOfRatings = [25, 43, 66, 18, 50, 6, 122, 88, 36, 75];
const numberOfBeds = [1, 2, 4, 3, 4, 3, 5, 6];
const typeOfRoom = ['Entire apartment', 'Entire House', 'Condo', 'Hotel room', 'Private room'];
const adjectives = ['Stunning', 'Beautiful', 'Charming', 'Quaint', 'Delightful', 'Private', 'Secluded', 'Lovely'];
const properties = ['home', 'apartment', 'condo', 'unit', 'houseboat'];
const cities = ['San Francisco', 'Alameda', 'Pacifica', 'San Louis Obispo', 'Santa Cruz', 'Monterey', 'Los Angeles', 'Long Beach', 'Compton', 'Huntington Beach', 'Newport Beach', 'Laguna Beach', 'San Clemente', 'San Diego'];
const amenities = ['within walking distance to downtown', 'with views of the ocean', 'centrally located on mainstreet', 'with great access to restaurants and bars outside your front door', 'with a bus stop one block away', 'setback in the hills', 'with views of downtown', 'with access to hiking trails 30 minutes away', 'thats pet friendly', 'a block away from the park', 'a block from the beach', 'near bike path for an easy commute', 'in the heart of the city', 'with a large parking space', 'with a sizeable storage unit in the basement'];
const price = [68, 109, 223, 88, 94, 164, 142, 73, 192, 115];

// seeding function

const seedData = (entries) => {
  return new Promise((resolve, reject) => {
    // might not need data
    // fs.writeFile('data.txt', dataString, (err, data) => {
    //   if (err) {
    //     reject(err);
    //   } else {
    //     resolve(data);
    //   }
    // });
    writer.on("error", reject);
    writer.on("finish", resolve);
    writer.pipe(fs.createWriteStream('data.csv'));
    for (var i = 1; i < entries; i += 1) {
      writer.write({
        propertyId: `${i}`,
        // add image
        superhost: `${superhost[i % 2]}`,
        wasLiked: `${wasLiked}`,
        avgRating: `${avgRating[i % 12]}`,
       numberOfRatings: `${numberOfRatings[i % 10]}`,
       numberOfBeds: `${numberOfBeds[i % 8]}`,
       typeOfRoom: `${typeOfRoom[i % 6]}`,
       descrip: `${adjectives[i % 8]} ${properties[i % 5]} in ${cities[i % 14]} ${amenities[i % 15]}`,
       price: `${price[i % 10]}`,
      });
      if (i % (entries / 100) === 0) {
        console.log(`${(i * 100) / entries}%`);
      }
    }
    writer.end();
  });
};

seedData(10000000)
  .then(() => { console.log('sucess'); })
  .catch(() => { console.log('fail'); });

// seedData(writeUsers, 'utf-8', () => {
//   writeUsers.end();
// });

// using node --max-old-space-size=8192 seeder.js get's me to 5mil but then I get 'invalid string length'

// original

// const seedData = (entries) => {
//   let dataString = '';
//   for (let i = 1; i < entries; i += 1) {
//     dataString += `Entry: ${i}\n`;
//     // need to add an image
//     dataString += `superhost: ${superhost[i % 2]}\n`;
//     dataString += `wasLiked: ${wasLiked}\n`;
//     dataString += `avgRating: ${avgRating[i % 12]}\n`;
//     dataString += `numberOfRatings: ${numberOfRatings[i % 10]}\n`;
//     dataString += `Number of beds: ${numberOfBeds[i % 8]}\n`;
//     dataString += `typeOfRoom: ${typeOfRoom[i % 6]}\n`;
//     dataString += `descrip: ${adjectives[i % 8]} ${properties[i % 5]} in ${cities[i % 14]} ${amenities[i % 15]}\n`;
//     dataString += `price: ${price[i % 10]}\n`;
//     // shows how many entries were seeded (in percent)
//     if (i % (entries / 100) === 0) {
//       console.log(`${(i * 100) / entries}%`);
//     }
//   }
//   return new Promise((resolve, reject) => {
//     // might not need data
//     fs.writeFile('data.txt', dataString, (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };