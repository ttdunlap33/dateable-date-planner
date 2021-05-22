const router = require('express').Router();
const { Indoor } = require('../../models/Indoor');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => { 
  Indoor.findAll(

  ).then(indoorData => {
    if (!indoorData) {
      res.status(404).json({message:"Could not find an indoor activity with that id."})
    }
    const randomIndex = getRandomInt(0, indoorData.length)
    res.json(indoorData[randomIndex])}).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // find a single restaurant by its `id`
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newIndoor = await Indoor.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newIndoor);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const indoorData = await Indoor.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!indoorData) {
      res.status(404).json({ message: 'No indoor activity found with this id!' });
      return;
    }

    res.status(200).json(indoorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


module.exports = router;