const { Outdoor } = require('../models');

const outdoorData = [
    {
        activity: "Fishing",
    },
    {
        activity: "Hiking",
    },
    {
        activity: "Rock Climbing",
    },
    {
        activity: "Rafting",
    },
    {
        activity: "Denver Botanic Gardens",
    },
    {
        activity: "Denver Zoo",
    },
    {
        activity: "Mini Golf",
    },
    {
        activity: "TUbing",
    },
    {
        activity: "Outdoor Sporting Event",
    },
    {
        activity: "Explore Red Rocks",
    },
    {
        activity: "Paddleboarding",
    },
    {
        activity: "Drive-in Theater",
    },
    {
        activity: "Local Concert",
    },
]

const seedOutdoor = () => Outdoor.bulkCreate(outdoorData);

module.exports = seedOutdoor;