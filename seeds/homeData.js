const { Home } = require('../models');

const homeData = [
    {
        title: "Puzzles",

    },
    {
        title: "Board Games",

    },
    {
        title: "Cook a meal",

    },
    {
        title: "Netflix & Chill",

    },
    {
        title: "Make a Cereal Treat",

    },
    {
        title: "Bake Cookies",
    },
    {
        title: "Video Games",

    },
    {
        title: "Stream an Online Class",

    },
    {
        title: "Fondue Night",

    },
    {
        title: "At Home Wine Tasting",

    },
    {
        title: "Movie Marathon",

    },
    {
        title: "Hire professionals for couples massage",

    },
]

const seedHome = () => Home.bulkCreate(homeData);

module.exports = seedHome;