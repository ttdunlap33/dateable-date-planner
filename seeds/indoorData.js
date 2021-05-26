const { Indoor } = require('../models');

const indoorData = [
    {
        activity: "Bowling",

    },
    {
        activity: "Go Karts",
    },
    {
        activity: "Arcade",
    },
    {
        activity: "Movie Theatre",
    },
    {
        activity: "Escape Room",
    },
    {
        activity: "Indoor Rock Climbing",
    },
    {
        activity: "Yoga",
    },
    {
        activity: "Nature and Science Museum",
    },
    {
        activity: "Axe Throwing",
    },
    {
        activity: "Brewery Hopping",
    },
    {
        activity: "Aquarium",
    },
    {
        activity: "Indoor Skydiving",
    },
]
const seedIndoor = () => Indoor.bulkCreate(indoorData);

module.exports = seedIndoor;