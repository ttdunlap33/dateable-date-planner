const router = require('express').Router();
const { Food } = require('../../models/Food');

router.get('/:id', (req, res) => {
  Food.findAll({
    include:[{
      model: Food,
      through: food_id,
      as: "Restaurants"
    }],
    // for (i = 0; i < length; i++) {
    //   var index = Math.floor(Math.random() * options.length);
    //   var computerChoice = options[index];
    //   passsword = passsword + computerChoice;
    // }
    where: {
      id: req.params.id
    }
  }).then(foodData => {
    if (!foodData) {
      res.status(404).json({message:"Could not find a restaurant with that id."})
    }
    res.json(foodData)}).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  // find a single restaurant by its `id`
});

// Encounter.findAll({ order: Sequelize.literal('rand()'), limit: 1 }).then((encounters) => {
//   // single random encounter
// });

// Model.find({
//   order: [
//     Sequelize.fn( 'RAND' ),
//   ]
// });

router.post('/', async (req, res) => {
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

router.delete('/:id', async (req, res) => {
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
