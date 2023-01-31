const router = require('express').Router();
//importing api routes
const thoughtRoutes = require('./thoughtRoughts');
const userRoutes = require('./userRoutes');
//middleware
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;