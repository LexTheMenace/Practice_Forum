const { verify } = require('../auth/utils');

async function checkAuthHeaderSetUser(req, res, next) {
    const auth = req.get('authorization');
    if (auth) {
        const token = auth.split(' ')[1];
        try {
            const user = await verify(token);
            req.user = user;
            console.log(user);
        } catch (err) {
            console.log(err);
        }
    }
    next();
}

async function checkAuthHeaderSetUserUnauthorized(req, res, next) {
    
    const auth = req.get('authorization');
    
    if (auth) {
        const token = auth.split(' ')[1];
        try {
            const user = await verify(token);
            req.user = user.user;
            next();
            return    
        } catch (err) {
    res.status(401)
    next(new Error('Un-Authorized'));
        }
    }
    res.status(401);
    next(new Error('Un-Authorized'));
}

function isAdmin( req, res, next ) {
    if (req.user && req.user.role_id === 3) {
        next();
        return 
    }
    res.status(401)
    next(new Error('Un-Authorized'));
}

function notFound(req, res, next) {
    const error = new Error('Not Found' + ' - ' + req.originalUrl);
    res.status(404);
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500);

    res.json({
        message: error.message,
        error: process.env.NODE_ENV === 'production' ? {} : error.stack,
    })
}

module.exports = {
    notFound,
    errorHandler,
    checkAuthHeaderSetUser,
    checkAuthHeaderSetUserUnauthorized,
    isAdmin
}