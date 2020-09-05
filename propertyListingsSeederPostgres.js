const fs = require('fs');
const argv = require('yargs').argv;

const lines = argv.lines || 100;
const filename = argv.output || 'propertyListings.csv';
const stream = fs.createWriteStream(filename);

const createPropertyListing = (i) => {
  // can make the listings be a broader range of other propertyIds
  const propertyId = i;
  const listings = [];
  const listingId1 = ((i) % 100) + 1;
  const listingId2 = ((i) % 99) + 1;
  const listingId3 = ((i) % 98) + 1;
  const listingId4 = ((i) % 97) + 1;
  const listingId5 = ((i) % 96) + 1;
  const listingId6 = ((i) % 95) + 1;
  const listingId7 = ((i) % 94) + 1;
  const listingId8 = ((i) % 93) + 1;
  const listingId9 = ((i) % 92) + 1;
  const listingId10 = ((i) % 91) + 1;
  const listingId11 = ((i) % 90) + 1;
  const listingId12 = ((i) % 89) + 1;
  // const listingId1 = ((i + 1) % (i)) + 1;
  // const listingId2 = ((i + 2) % (i + 1)) + 1;
  // const listingId3 = ((i + 3) % (i + 2)) + 1;
  // const listingId4 = ((i + 4) % (i + 3)) + 1;
  // const listingId5 = ((i + 5) % (i + 4)) + 1;
  // const listingId6 = ((i + 6) % (i + 5)) + 1;
  // const listingId7 = ((i + 7) % (i + 6)) + 1;
  // const listingId8 = ((i + 8) % (i + 7)) + 1;
  // const listingId9 = ((i + 9) % (i + 8)) + 1;
  // const listingId10 = ((i + 10) % (i + 9)) + 1;
  // const listingId11 = ((i + 11) % (i + 10)) + 1;
  // const listingId12 = ((i + 12) % (i + 11)) + 1;
  // console.log('i', i);
  // console.log('id:', listingId1);

  if (listingId1 < i || listingId1 > 1) {
    listings.push(listingId1);
  } else {
    listings.push(1);
  }
  if (listingId2 < i || listingId2 > 0) {
    listings.push(listingId2);
  } else {
    listings.push(2);
  }
  if (listingId3 < i || listingId3 > 0) {
    listings.push(listingId3);
  } else {
    listings.push(3);
  }
  if (listingId4 < i || listingId4 > 0) {
    listings.push(listingId4);
  } else {
    listings.push(4);
  }
  if (listingId5 < i || listingId5 > 0) {
    listings.push(listingId5);
  } else {
    listings.push(5);
  }
  if (listingId6 < i || listingId6 > 0) {
    listings.push(listingId6);
  } else {
    listings.push(6);
  }
  if (listingId7 < i || listingId7 > 0) {
    listings.push(listingId7);
  } else {
    listings.push(7);
  }
  if (listingId8 < i || listingId8 > 0) {
    listings.push(listingId8);
  } else {
    listings.push(8);
  }
  if (listingId9 < i || listingId9 > 0) {
    listings.push(listingId9);
  } else {
    listings.push(9);
  }
  if (listingId10 < i || listingId10 > 0) {
    listings.push(listingId10);
  } else {
    listings.push(10);
  }
  if (listingId11 < i || listingId11 > 0) {
    listings.push(listingId11);
  } else {
    listings.push(11);
  }
  if (listingId12 < i || listingId12 > 0) {
    listings.push(listingId12);
  } else {
    listings.push(12);
  }

  if (i % (lines / 100) === 0) {
    console.log(`${100 - ((i * 100) / lines)}%`);
  }
  // console.log(listings);

  // return `${propertyId},${listingId1}\n${propertyId},${listingId2}\n${propertyId},${listingId3}\n${propertyId},${listingId4}\n${propertyId},${listingId5}\n${propertyId},${listingId6}\n${propertyId},${listingId7}\n${propertyId},${listingId8}\n${propertyId},${listingId9}\n${propertyId},${listingId10}\n${propertyId},${listingId11}\n${propertyId},${listingId12}\n`;
  return `${propertyId},${listings[0]}\n${propertyId},${listings[1]}\n${propertyId},${listings[2]}\n${propertyId},${listings[3]}\n${propertyId},${listings[4]}\n${propertyId},${listings[5]}\n${propertyId},${listings[6]}\n${propertyId},${listings[7]}\n${propertyId},${listings[8]}\n${propertyId},${listings[9]}\n${propertyId},${listings[10]}\n${propertyId},${listings[11]}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 1) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 1 && canWrite);
    if (i > 1 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

stream.write('property_id, property_listing\n');
startWriting(stream, 'utf-8', () => {
  stream.end();
});
