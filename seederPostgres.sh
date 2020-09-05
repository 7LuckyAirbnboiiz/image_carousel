#!/bin/bash

###################################################
# Bash script to create database and seed
###################################################

# Variable Definitions
# Path to directory bash script is living
# DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"


# Database Variable Definitions
DATABASE="listing"
# USER="superuser"
USER="yuidavidson"

TABLE="properties"

TABLE2="property_listings"

# Output Filename for Faker File
OUTPUT="properties.csv"
FILEPATH="$DIR/$OUTPUT"

OUTPUT2="propertyListings.csv"
FILEPATH2="$DIR/$OUTPUT2"
# if parameter 1 is not passed as argument default records to be generated to 1000000
# change second number to desired amount of data generation
LINES=${1:-10000000}

### Import Our Database ###
# Dont specify a database since CREATE DATABASE is in schema.sql
SCHEMA="$DIR/schema.sql"
psql -U $USER < $SCHEMA
# psql < $SCHEMA

### Run Our Generator Script ###
node propertiesSeederPostgres.js --output=$FILEPATH --lines=$LINES
node propertyListingsSeederPostgres.js --output=$FILEPATH2 --lines=$LINES

### Import Our posts.csv file to seed Database ###
psql -U $USER -d $DATABASE -c "COPY $TABLE (img, superhost, was_liked, avg_rating, number_of_ratings, number_of_beds, type_of_room, descrip, price) FROM '$FILEPATH' CSV HEADER";
psql -U $USER -d $DATABASE -c "COPY $TABLE2 FROM '$FILEPATH2' CSV HEADER";
# psql -d $DATABASE -c "COPY $DATABASE FROM '$FILEPATH' CSV HEADER";

# use => bash seederPostgres.sh

#!/bin/bash
# psql postgres -U root -d sampledb -c "COPY reservation_info(reservation_id, property_id, check_in, check_out, total_price, total_guests)
# FROM '$(pwd)/reservationInfo.csv'
# DELIMITER ','
# CSV HEADER"

