const { create } = require('../../auth/utils');
const { User } = require('../../models');
const bcrypt = require('bcryptjs')
var router = require('express').Router();

router.get('/guest', async (req, res, next) => {
    try {
        User
            .findById('603a99b6972308897888dc7f')
            .then(user => {
                (async () => {
                    const token = await create(user);
                    // HIDE TOKEN IN FUTURE/ BEFORE DEPLOYMENT
                    res.redirect(`${process.env.CLIENT_REDIRECT + token}`)
                })()
            })
            .catch(err => err);
    } catch (err) {
        res.redirect(`${process.env.CLIENT_REDIRECT}${process.env.CLIENT_ERR_REDIRECT}`);
        next(err);
    };
});

router.post('/register', (req, res, next) => {
    const { display_name, password, password2 } = req.body;
    let errors = [];

    //Check required fields
    if (!display_name || !password) {
        errors.push({ msg: 'Make Sure You\'ve Filled All Fields' })
    }
    
    // Password Match
    if (password !== password2) {
        errors.push({ msg: 'Passwords do not match' })
    }
    
    // Pass Length
    if (password.length < 4) {
        errors.push({ msg: 'Password must be at least 4 characters' })
    }
    
    if (errors.length > 0) {
        return res.status(400).json(errors)
    }
    
    User
        .find({ display_name })
        .then(user => {
            if (user[0] && user[0].display_name) return res.status(400).json({ msg: 'User Already Exists' })
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {

                    // Store hash in your password DB.
                    User
                    .create({ display_name, password: hash })
                    .then(user => {
                        (async () => {
                            const token = await create(user);
                            // HIDE TOKEN IN FUTURE/ BEFORE DEPLOYMENT
                            // APP HANGS HERE
                            res.status(200).send(token)
                            // res.redirect(`${process.env.CLIENT_REDIRECT + token}`)
                        })();
                    })
                    .catch(err => { console.log(err); res.status(422).json(err) });
                });
            });
        })
        .catch(err => { console.log(err); res.status(400).json(err) });
});


router.post('/login', (req, res, next) => {
    const { display_name, password} = req.body;
    let errors = [];

    //Check required fields
    if (!display_name || !password) {
        errors.push({ msg: 'Make Sure You\'ve Filled All Fields' })
    }

    if (errors.length > 0) {
        return res.status(400).json(errors)
    }
    
    User
        .find({ display_name })
        .then(user => {
            if (user[0] && bcrypt.compare(password, user[0].password)){
                (async () => {
                    const token = await create(user[0]);
                    res.status(200).send(token)
                })();
            } else {
                res.status(401)
                throw new Error('Invalid email or password')
              }
        })
        .catch(err => { console.log(err); res.status(400).json(err) });
});
module.exports = router;