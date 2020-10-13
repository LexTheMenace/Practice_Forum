var router = require('express').Router();

const topics = require('../../controllers/topicController');
const { checkAuthHeaderSetUserUnauthorized } = require('../../middleware');


router.get('/', async (req, res, next) => {
    try{
        const all = await topics.getAll()
        return res.json(all)
    } catch (err) {
         next(err)
    }
});

router.post('/',  checkAuthHeaderSetUserUnauthorized, async (req, res, next) => {
    console.log('post topic');
    try{
        const topic = await topics.insert(req.body)
        return res.json(topic)
    } catch (err) {
        next(err)
    }
});


module.exports = router;