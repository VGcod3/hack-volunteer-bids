const { faker } = require('@faker-js/faker');
const fs = require('fs');

const categories = [
  'Art',
  'Jewelry',
  'Collectibles',
  'Home',
  'Fashion',
  'Motors',
  'Electronics',
  'Toys',
  'Travel',
  'Other',
];

const lots = Array.from({ length: 20 }, (item, index) => ({
  id: index,

  name: faker.commerce.productName(),
  category: categories[Math.floor(Math.random() * categories.length)],
  description: faker.commerce.productDescription(),

  startPrice: 50,
  highestPrice: 50 * index + 50,

  placedBy: faker.person.fullName(),
  images: Array.from({ length: 5 }, () => faker.image.urlPicsumPhotos(800, 800)),

  auctionStart: faker.date.recent(),
  auctionEnd: faker.date.soon(),
}));

const writeData = async () => {
  fs.writeFileSync('./lotsData.ts', 'export const lotsdata: LotType[] =');

  fs.appendFileSync('./lotsData.ts', JSON.stringify(lots), (err) => {
    if (err) {
      console.error('Error writing to lotsData.ts:', err);
    } else {
      console.log('Data written to lotsData.ts');
    }
  });
};

writeData();
