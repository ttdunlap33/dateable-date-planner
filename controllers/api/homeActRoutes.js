const router = require('express').Router();
const { Home } = require('../../models/home');

router.post('/', async (req, res) => {
  try {
    const newHomeAct = await Home.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newHome);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const homeData = await Home.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!homeData) {
      res
        .status(404)
        .json({ message: 'No at home activity found with this id!' });
      return;
    }

    res.status(200).json(homeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
