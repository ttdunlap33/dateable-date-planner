const router = require('express').Router();
const { Food, Indoor, Outdoor, Home, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const foodData = await Food.findAll();
    console.log(foodData);

    // Serialize data so the template can read it
    const restaurant = foodData.map((food) => food.get({ plain: true }));
    var index = Math.floor(Math.random() * restaurant.length);
    var singularRes = restaurant[index];
    console.log(singularRes);
    // Pass serialized data and session flag into template
    res.render('/', {
      singularRes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/indoor', withAuth, async (req, res) => {
  try {
    const indoorData = await Indoor.findAll();
    console.log(indoorData);

    const indoor = indoorData.get({ plain: true });

    res.render('dashboard', {
      ...indoor,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/outdoor', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const outdoorData = await Outdoor.findAll({
      include: [
        {
          model: Outdoor,
          attributes: ['activity'],
        },
      ],
    });

    const outdoor = outdoorData.get({ plain: true });

    res.render('dashboard', {
      ...outdoor,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/home', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const homeData = await Home.findAll({
      include: [
        {
          model: Home,
          attributes: ['activity'],
        },
      ],
    });

    const home = homeData.get({ plain: true });

    res.render('dashboard', {
      ...home,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  }

  res.render('login');
});

module.exports = router;
