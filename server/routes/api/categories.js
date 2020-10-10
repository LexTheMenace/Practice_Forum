var router = require('express').Router();

const categories = require('../../controllers/categoryController');
const { checkAuthHeaderSetUserUnauthorized, isAdmin } = require('../../middleware');


router.get('/', async (req, res, next) => {
    try{
        const all = await categories.getAll()
        return res.json(all)
    } catch (err) {
        next(err)
    }
});

router.post('/',  checkAuthHeaderSetUserUnauthorized, isAdmin, async (req, res, next) => {
    try{
        const category = await categories.insert(req.body)
        return res.json(category)
    } catch (err) {
        next(err)
    }
});


module.exports = router;