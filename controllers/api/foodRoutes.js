const router = require('express').Router();
const { Food } = require('../../models/Food');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => { 
  Food.findAll(
  ).then(foodData => {
    if (!foodData) {
      res.status(404).json({message:"Could not find any restaurants."})
    }
    res.json(foodData)}).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.post('/', withAuth, async (req, res) => {
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


router.delete('/:id', withAuth, async (req, res) => {

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

module.exports = router;

