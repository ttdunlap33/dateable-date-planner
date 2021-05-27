const seedHome = require('./homeData');
const seedIndoor = require('./indoorData');
const seedFood = require('./foodData');
const seedOutdoor = require('./outdoorData');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedHome();
  console.log('\n----- USERS SEEDED -----\n');

  await seedIndoor();
  console.log('\n----- INDOOR SEEDED -----\n');

  await seedFood();
  console.log('\n----- FOOD SEEDED -----\n');

  await seedOutdoor();
  console.log('\n----- OUTDOOR SEEDED -----\n');

  process.exit(0);
};

seedAll();