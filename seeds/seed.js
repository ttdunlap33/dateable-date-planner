const sequelize = require('../config/connection');
const { User, Food, Home, Indoor, Outdoor } = require('../models');

const userData = require('./userData.json');
const foodData = require('./foodData.json');
const indoorData = require('./indoorData.json');
const outdoorData = require('./outdoorData.json');
const homeData = require('./homeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: req.params.id
    });
  }

  process.exit(0);
};

seedDatabase();
