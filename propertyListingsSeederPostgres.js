const fs = require('fs');
const argv = require('yargs').argv;

// can definetly refactor all of these csv writes

const lines = argv.lines || 10000001;
const filename1 = argv.output || 'propertyListings1.csv';
const filename2 = argv.output || 'propertyListings2.csv';
const filename3 = argv.output || 'propertyListings3.csv';
const filename4 = argv.output || 'propertyListings4.csv';
const filename5 = argv.output || 'propertyListings5.csv';
const filename6 = argv.output || 'propertyListings6.csv';
const filename7 = argv.output || 'propertyListings7.csv';
const filename8 = argv.output || 'propertyListings8.csv';
const filename9 = argv.output || 'propertyListings9.csv';
const filename10 = argv.output || 'propertyListings10.csv';
const stream1 = fs.createWriteStream(filename1);
const stream2 = fs.createWriteStream(filename2);
const stream3 = fs.createWriteStream(filename3);
const stream4 = fs.createWriteStream(filename4);
const stream5 = fs.createWriteStream(filename5);
const stream6 = fs.createWriteStream(filename6);
const stream7 = fs.createWriteStream(filename7);
const stream8 = fs.createWriteStream(filename8);
const stream9 = fs.createWriteStream(filename9);
const stream10 = fs.createWriteStream(filename10);

const createPropertyListing = (i) => {
  // can make the listings be a broader range of other propertyIds
  const propertyId = i;
  const listings = [];
  const listingId1 = i - 12;
  const listingId2 = i - 11;
  const listingId3 = i - 10;
  const listingId4 = i - 9;
  const listingId5 = i - 8;
  const listingId6 = i - 7;
  const listingId7 = i - 6;
  const listingId8 = i - 5;
  const listingId9 = i - 4;
  const listingId10 = i - 3;
  const listingId11 = i - 2;
  const listingId12 = i - 1;
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

  if (i > 13) {
    listings.push(listingId1);
  } else {
    listings.push(1);
  }
  if (i > 13) {
    listings.push(listingId2);
  } else {
    listings.push(2);
  }
  if (i > 13) {
    listings.push(listingId3);
  } else {
    listings.push(3);
  }
  if (i > 13) {
    listings.push(listingId4);
  } else {
    listings.push(4);
  }
  if (i > 13) {
    listings.push(listingId5);
  } else {
    listings.push(5);
  }
  if (i > 13) {
    listings.push(listingId6);
  } else {
    listings.push(6);
  }
  if (i > 13) {
    listings.push(listingId7);
  } else {
    listings.push(7);
  }
  if (i > 13) {
    listings.push(listingId8);
  } else {
    listings.push(8);
  }
  if (i > 13) {
    listings.push(listingId9);
  } else {
    listings.push(9);
  }
  if (i > 13) {
    listings.push(listingId10);
  } else {
    listings.push(10);
  }
  if (i > 13) {
    listings.push(listingId11);
  } else {
    listings.push(11);
  }
  if (i > 13) {
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

const startWriting1 = (writeStream, encoding, done) => {
  let i = 10000001;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 9000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 9000000 && canWrite);
    if (i > 9000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting2 = (writeStream, encoding, done) => {
  let i = 9000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 8000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 8000000 && canWrite);
    if (i > 8000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting3 = (writeStream, encoding, done) => {
  let i = 8000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 7000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 7000000 && canWrite);
    if (i > 7000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting4 = (writeStream, encoding, done) => {
  let i = 7000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 6000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 6000000 && canWrite);
    if (i > 6000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting5 = (writeStream, encoding, done) => {
  let i = 6000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 5000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 5000000 && canWrite);
    if (i > 5000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting6 = (writeStream, encoding, done) => {
  let i = 5000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 4000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 4000000 && canWrite);
    if (i > 4000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting7 = (writeStream, encoding, done) => {
  let i = 4000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 3000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 3000000 && canWrite);
    if (i > 3000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting8 = (writeStream, encoding, done) => {
  let i = 3000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 2000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 2000000 && canWrite);
    if (i > 2000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting9 = (writeStream, encoding, done) => {
  let i = 2000000;
  function writing() {
    let canWrite = true;
    do {
      i -= 1;
      const propertyListing = createPropertyListing(i);
      if (i === 1000000) {
        writeStream.write(propertyListing, encoding, done);
      } else {
        // writeStream.write(propertyListing, encoding);
        canWrite = writeStream.write(propertyListing, encoding);
      }
    } while (i > 1000000 && canWrite);
    if (i > 1000000 && !canWrite) {
      writeStream.once('drain', writing);
    }
  }
  writing();
};

const startWriting10 = (writeStream, encoding, done) => {
  let i = 1000000;
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

stream1.write('property_id, listing_id\n');
startWriting1(stream1, 'utf-8', () => {
  stream1.end();
});

stream2.write('property_id, listing_id\n');
startWriting2(stream2, 'utf-8', () => {
  stream2.end();
});

stream3.write('property_id, listing_id\n');
startWriting3(stream3, 'utf-8', () => {
  stream3.end();
});

stream4.write('property_id, listing_id\n');
startWriting4(stream4, 'utf-8', () => {
  stream4.end();
});

stream5.write('property_id, listing_id\n');
startWriting5(stream5, 'utf-8', () => {
  stream5.end();
});

stream6.write('property_id, listing_id\n');
startWriting6(stream6, 'utf-8', () => {
  stream6.end();
});

stream7.write('property_id, listing_id\n');
startWriting7(stream7, 'utf-8', () => {
  stream7.end();
});

stream8.write('property_id, listing_id\n');
startWriting8(stream8, 'utf-8', () => {
  stream8.end();
});

stream9.write('property_id, listing_id\n');
startWriting9(stream9, 'utf-8', () => {
  stream9.end();
});

stream10.write('property_id, listing_id\n');
startWriting10(stream10, 'utf-8', () => {
  stream10.end();
});
