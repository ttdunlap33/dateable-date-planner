const router = require('express').Router();
const { Food, Indoor, Outdoor, Home} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const foodData = await Food.findAll({
      include: [
        {
          model: User,
          attributes: ['title', 'cost'],
        },
      ],
    });

    // Serialize data so the template can read it
    const restaurant = foodData.map((Food) => Food.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('dashboard', { 
      restaurant, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const indoorData = await Indoor.finadAll({
      include: [
        {
          model: Indoor,
          attributes: ['activity'],
        },
      ],
    });

    const indoor = indoorData.get({ plain: true });

    res.render('dashboard', {
      ...indoor,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const outdoorData = await Outdoor.findAll ({
      include: [
        { 
          model: Outdoor,
          attributes: ['activity'],
        }
      ],
    });

    const outdoor = outdoorData.get({ plain: true });

    res.render('dashboard', {
      ...outdoor,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const homeData = await Home.findAll ({
      include: [
        { 
          model: Home,
          attributes: ['activity'],
        }
      ],
    });

    const home = homeData.get({ plain: true });

    res.render('dashboard', {
      ...home,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;
