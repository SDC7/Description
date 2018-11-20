const db  = require('./index.js');
const Description = require('./description.js');
const faker = require('faker');

for (var i = 1; i <= 100; i++) {
  let amenitiesArr = ["Pool", "Spa", "Laundry", "Parking", "Heating", "Wifi"]
  let checkIn = ["keypad", "lockbox", "smartlock"]
  let optionsArr = ["Entire house", "Entire apartment", "Entire Townhouse"]
  let percent = [90,91,92,93,94,95,96,97,98];
  let sampleData = {};
    sampleData.id = i;
    sampleData.imageUrl = faker.image.avatar();
    sampleData.Owner = faker.name.findName();
    sampleData.houseName = faker.lorem.sentence();
    sampleData.description = faker.lorem.paragraph();
    sampleData.bedrooms = Math.floor(Math.random() * 5) + 1;
    sampleData.beds = Math.floor(Math.random() * 10) + 1;
    sampleData.guests = Math.floor(Math.random() * 2) + 1;
    sampleData.baths = Math.floor(Math.random() * 7) + 1;
    sampleData.amenities = amenitiesArr[Math.floor(Math.random() * amenitiesArr.length)]
    sampleData.full = optionsArr[Math.floor(Math.random() * optionsArr.length)];
    sampleData.lock = checkIn[Math.floor(Math.random() * checkIn.length)];
    sampleData.rate = percent[Math.floor(Math.random() * checkIn.length)];
    //sampleData.city = faker.address.city();


    // Description.create(sampleData, (err, result) => {
    //   if (err) {
    //     console.log('Error seeding database')
    //   }
    // })
  };

const insertDescription = function() {
  Description.create(description).then(() => db.close());
};

insertDescription();

