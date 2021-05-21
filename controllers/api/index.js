const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const indoorRoutes = require('./indoorRoutes');
const outdoorRoutes = require('./indoorRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/indoor', indoorRoutes);
router.use('/outdoor', outdoorRoutes);
router.use('/home', homeRoutes);

module.exports = router;
