const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const indoorActRoutes = require('./indoorActRoutes');
const outdoorActRoutes = require('./outdoorActRoutes');
const homeActRoutes = require('./homeActRoutes');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/indoor', indoorActRoutes);
router.use('/outdoor', outdoorActRoutes);
router.use('/homeact', homeActRoutes);

module.exports = router;
