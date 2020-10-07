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
            console.log(error);
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
            req.user = user;
            return next();
        } catch (err) {
            console.log(err)
        }
    }
    res.status(401);
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
    checkAuthHeaderSetUserUnauthorized
}