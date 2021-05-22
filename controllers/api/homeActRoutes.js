const router = require('express').Router();
const { home } = require('../../models/Home');
const withAuth = require('../../utils/auth');

Home.get('/', withAuth, (req, res) => { 
  Home.findAll({
    include:[{
      model: Home,
      through: home_id,
      as: "Home Activities"
    }],
    where: {
      id: req.params.id
    }

  }).then(homeData => {
    if (!homeData) {
      res.status(404).json({message:"Could not find a home activity with that id."})
    }
    const randomIndex = getRandomInt(0, foodData.length)
    res.json(foodData[randomIndex])}).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // find a single restaurant by its `id`
});


Food.post('/', withAuth, async (req, res) => {
  try {
    const newFood = await Food.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFood);
  } catch (err) {
    res.status(400).json(err);
  }
});

Food.delete('/:id', withAuth, async (req, res) => {
  try {
    const foodData = await Food.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!foodData) {
      res.status(404).json({ message: 'No restaurant found with this id!' });
      return;
    }

    res.status(200).json(foodData);
  } catch (err) {
    res.status(500).json(err);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


module.exports = Food;