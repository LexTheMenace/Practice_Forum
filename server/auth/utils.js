const jwt = require('jsonwebtoken')
// SIgn payload and create web token
module.exports = { 
    create: (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign({ user }, process.env.TOKEN_SECRET, { 
            expiresIn: '1d'
         }, (err, token) => {
            if(err) return reject(err);
            resolve(token);
    });
});
},
};

