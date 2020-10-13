var router = require('express').Router();
const topicReply = require('../../controllers/topicReplyController')
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
router.get('/:id', async (req, res, next) => {
  
    try{
        const all = await topics.getCat(req.params.id)
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
router.get('/replies/:id', async (req, res, next) => {
  
    try{
        const all = await topicReply.getReplies(req.params.id)
     
        return res.json(all)
    } catch (err) {
         next(err)
    }
});
router.post('/replies',  checkAuthHeaderSetUserUnauthorized, async (req, res, next) => {
    try{
        const reply = await topicReply.insert(req.body)
        return res.json(reply)
    } catch (err) {
        next(err)
    }
});

module.exports = router;