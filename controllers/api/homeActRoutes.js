const router = require('express').Router();
const { home } = require('../../models/Home');
const withAuth = require('../../utils/auth');

Home.get('/', withAuth, (req, res) => { 
  Home.findAll({
    include:[{
      model: home,
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
    const randomIndex = getRandomInt(0, homeData.length)
    res.json(homeData[randomIndex])}).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // find a single restaurant by its `id`
});


Home.post('/', withAuth, async (req, res) => {
  try {
    const newHome = await Home.create({
      ...req.body,
      home_id: req.session.home_id,
    });

    res.status(200).json(newHome);
  } catch (err) {
    res.status(400).json(err);
  }
});

Home.delete('/:id', withAuth, async (req, res) => {
  try {
    const homeData = await Home.destroy({
      where: {
        id: req.params.id,
        home_id: req.session.home_id,
      },
    });

    if (!homeData) {
      res.status(404).json({ message: 'No home activity found with this id!' });
      return;
    }

    res.status(200).json(homeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


module.exports = Home;