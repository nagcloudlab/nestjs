


function logger(req, res, next) {
    const start = Date.now();
    const { method, url } = req;
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${method} ${url} - ${duration}ms`);
    });
    next(); ``
}

export default logger;