const router = require('express').Router();
const { Food, Indoor, Outdoor, Home, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/food', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const foodData = await Food.findAll();
    
    // Serialize data so the template can read it
    const restaurant = foodData.map((food) => food.get({ plain: true }));
    var index = Math.floor(Math.random() * restaurant.length);
    var singularRes = restaurant[index];
    console.log(singularRes);
    // Pass serialized data and session flag into template
    res.render('home', {
      food: singularRes
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/indoor', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const indoorData = await indoor.findAll();
    
    // Serialize data so the template can read it
    const indoorActivities = indoorData.map((indoor) => indoor.get({ plain: true }));
    var index = Math.floor(Math.random() * indoorActivities.length);
    var singularIn = indoorActivities[index];
    // Pass serialized data and session flag into template
    res.render('home', {
      indoor: singularIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/outdoor', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const outdoorData = await Outdoor.findAll();
    
    // Serialize data so the template can read it
    const outdoorActivities = outdoorData.map((outdoor) => outdoor.get({ plain: true }));
    var index = Math.floor(Math.random() * outdoorActivities.length);
    var singularOut = outdoorActivities[index];
    console.log(singularRes);
    // Pass serialized data and session flag into template
    res.render('home', {
      outdoor: singularOut
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/home', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const homeData = await Home.findAll();
    console.log(homeData);

    // Serialize data so the tempalte can read it
    const homeActivities = homeData.map((home) => home.get({ plain: true }));
    var index = Math.floor(Math.random() * homeActivities.length);
    var singularHome = home[index];

    res.render('/home', {
      home: singularHome
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
