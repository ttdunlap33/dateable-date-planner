const { Food } = require('../models');

const foodData = [
  {
    title: 'Watercourse',
    cost: '$$',
  },
  {
    title: 'Tropical Smoothie',
    cost: '$$',
  },
  {
    title: "Woody's Woodfired Pizza",
    cost: '$$',
  },
  {
    title: 'West on 29th',
    cost: '$$$$',
  },
  {
    title: 'Himchuli',
    cost: '$$$',
  },
  {
    title: "City O' City",
    cost: '$$',
  },
  {
    title: "Lucile's Creole Cafe",
    cost: '$$',
  },
  {
    title: 'Sassafras',
    cost: '$$',
  },
  {
    title: 'Blue Pan',
    cost: '$$',
  },
  {
    title: 'Work & Class',
    cost: '$$',
  },
  {
    title: 'Sushi Sasa',
    cost: '$$$',
  },
  {
    title: 'Los Chingones',
    cost: '$$',
  },
  {
    title: 'Sol',
    cost: '$$',
  },
  {
    title: 'Little Ollies',
    cost: '$$',
  },
  {
    title: 'Happa',
    cost: '$$',
  },
];

const seedFood = () => Food.bulkCreate(foodData);

module.exports = seedFood;
