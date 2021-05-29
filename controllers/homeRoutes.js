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

router.get('/home', async (req, res) => {
  try {
    // ========== HOME ==========
    // Find the logged in user based on the session ID
    const homeData = await Home.findAll();
    // console.log(homeData);

    // Serialize data so the tempalte can read it
    const homeActivities = homeData.map((home) => home.get({ plain: true }));
    var index = Math.floor(Math.random() * homeActivities.length);
    var singularHome = homeActivities[index];

    // ========== FOOD ==========

    // Find the logged in user based on the session ID
    const foodData = await Food.findAll();
    // console.log(homeData);

    // Serialize data so the tempalte can read it
    const foodActivities = foodData.map((food) => food.get({ plain: true }));
    var index = Math.floor(Math.random() * foodActivities.length);
    var singularFood = foodActivities[index];

    // ========== INDOOR ==========

    // Find the logged in user based on the session ID
    const indoorData = await Indoor.findAll();
    // console.log(indoorData);

    // Serialize data so the tempalte can read it
    const indoorActivities = indoorData.map((indoor) => indoor.get({ plain: true }));
    var index = Math.floor(Math.random() * indoorActivities.length);
    var singularIndoor = indoorActivities[index];

    // ========== OUTDOOR ==========

    // Find the logged in user based on the session ID
    const outdoorData = await Outdoor.findAll();
    // console.log(outdoorData);

    // Serialize data so the tempalte can read it
    const outdoorActivities = outdoorData.map((outdoor) => outdoor.get({ plain: true }));
    var index = Math.floor(Math.random() * outdoorActivities.length);
    var singularOutdoor = outdoorActivities[index];

    res.render('home', {
      home: singularHome,
      food: singularFood,
      indoor: singularIndoor,
      outdoor: singularOutdoor
    });
  } catch (err) {
    console.log(err);
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

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
