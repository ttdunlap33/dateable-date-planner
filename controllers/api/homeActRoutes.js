const router = require('express').Router();
const { Home } = require('../../models/home');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Home.findAll({

  }
  ).then(homeData => {
    if (!homeData) {
      res.status(404).json({ message:"Could not find any home activities." })
    }
    res.json(homeData)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newHome = await Home.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newHome);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const homeData = await Home.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
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


module.exports = router;