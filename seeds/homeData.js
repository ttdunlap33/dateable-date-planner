const { Home } = require('../models');

const homeData = [
    {
        title: "Puzzles",
        id: home_id,
    },
    {
        title: "Board Games",
        id: home_id,
    },
    {
        title: "Cook a meal",
        id: home_id,
    },
    {
        title: "Netflix & Chill",
        id: home_id,
    },
    {
        title: "Make a Cereal Treat",
        id: home_id,
    },
    {
        title: "Bake Cookies",
        id: home_id,
    },
    {
        title: "Video Games",
        id: home_id,
    },
    {
        title: "Stream an Online Class",
        id: home_id,
    },
    {
        title: "Fondue Night",
        id: home_id,
    },
    {
        title: "At Home Wine Tasting",
        id: home_id,
    },
    {
        title: "Movie Marathon",
        id: home_id,
    },
    {
        title: "Hire professionals for couples massage",
        id: home_id,
    },
]

const seedHome = () => Home.bulkCreate(homeData);

module.exports = seedHome;