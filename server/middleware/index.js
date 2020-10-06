function notFound(req, res, next) {
    const error = new Error('Not Found', req.originalURL);
    res.status(404);
    next(error);
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500);

    res.json({
        message: error.message,
        error: process.node.ENN === 'production' ? {} : error.stack, 
    })
}

module.exports = {
    notFound,
    errorHandler
}