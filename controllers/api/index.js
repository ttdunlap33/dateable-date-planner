const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const indoorRoutes = require('./indoorActRoutes');
const outdoorRoutes = require('./outdoorActRoutes');
const homeRoutes = require('./homeActRoutes');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/indoor', indoorActRoutes);
router.use('/outdoor', outdoorActRoutes);
router.use('/home', homeActRoutes);

module.exports = router;
