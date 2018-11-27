const fs = require('fs');
const stringify = require('csv-stringify');
const faker = require('faker');

const desArr = [];

for (var i = 3000001; i <= 3500000; i++) {
  let amenitiesArr = ["Pool", "Spa", "Laundry", "Parking", "Heating", "Wifi"]
  let checkIn = ["keypad", "lockbox", "smartlock"]
  let optionsArr = ["Entire house", "Entire apartment", "Entire Townhouse"]
  let percent = [90,91,92,93,94,95,96,97,98];
  desArr.push({
     'id': i,
    'Owner': faker.name.findName(),
    'amenities': amenitiesArr[Math.floor(Math.random() * amenitiesArr.length)],
    'baths': Math.floor(Math.random() * 7) + 1,
    'bedrooms': Math.floor(Math.random() * 5) + 1,
    'beds': Math.floor(Math.random() * 10) + 1,
    'description': faker.lorem.paragraph(),
    'full': optionsArr[Math.floor(Math.random() * optionsArr.length)],
    'guests': Math.floor(Math.random() * 2) + 1,
    'houseName': faker.lorem.sentence(),
    'imageUrl': faker.image.avatar(),
    'lock': checkIn[Math.floor(Math.random() * checkIn.length)],
    'rate': percent[Math.floor(Math.random() * checkIn.length)]
  })
};

stringify(desArr, (err, result) => {
  fs.appendFile('database-cassandra/description.csv', result, err => {
    if (err) {
      console.log(err);
    }
    console.log('Created CSV ')
  });
});