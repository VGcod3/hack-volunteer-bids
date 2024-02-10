const { faker } = require('@faker-js/faker');
const fs = require('fs');

const lots = Array.from({ length: 20 }, () => ({
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  startPrice: Number(faker.commerce.price()),
  highestPrice: Number(faker.commerce.price()),
  placedBy: faker.person.fullName(),
  images: Array.from({ length: 5 }, () => faker.image.fashion(800, 800, true)),
  currency: 'USD',

  auctionStart: faker.date.recent(),
  auctionEnd: faker.date.soon(),
}));

const writeData = async () => {
  fs.writeFileSync(
    './lotsData.ts',
    `type LotType = {
  name: string;
  description: string;
  startPrice: number;
  highestPrice: number;
  placedBy: string;
  currency: string;
  images: string[];

  auctionStart: string;
  auctionEnd: string;
};
export const lotsdata: LotType[] =
`,
  );
  fs.appendFileSync('./lotsData.ts', JSON.stringify(lots), (err) => {
    if (err) {
      console.error('Error writing to lotsData.ts:', err);
    } else {
      console.log('Data written to lotsData.ts');
    }
  });
};

writeData();
