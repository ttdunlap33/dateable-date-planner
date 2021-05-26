const router = require('express').Router();
const { Outdoor } = require('../../models/outdoor');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, (req, res) => { 
  Outdoor.findAll(
  ).then(outdoorData => {
    if (!outdoorData) {
      res.status(404).json({message:"Could not find a restaurant with that id."})
    }
    const randomIndex = getRandomInt(0, outdoorData.length)
    res.json(outdoorData[randomIndex])}).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // find a single restaurant by its `id`
});


router.post('/', withAuth, async (req, res) => {
  try {
    const newOutdoor = await Outdoor.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newOutdoor);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const outdoorData = await Outdoor.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!outdoorData) {
      res.status(404).json({ message: 'No restaurant found with this id!' });
      return;
    }

    res.status(200).json(outdooData);
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
