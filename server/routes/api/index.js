var router = require('express').Router();
const categories = require('./categories');
const topics = require('./topics');

router.use('/categories', categories);
router.use('/topics', topics);
router.use('/users', require('./users'));


module.exports = router;