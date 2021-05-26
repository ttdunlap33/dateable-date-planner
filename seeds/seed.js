const seedPosts = require('./blog-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedHome();
  console.log('\n----- USERS SEEDED -----\n');

  await seedIndoor();
  console.log('\n----- POSTS SEEDED -----\n');

  await seedFood();
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();