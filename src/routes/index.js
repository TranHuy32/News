const newsRouter = require('./newses');
// const meRouter = require('./me');
// const coursesRouter = require('./courses');
const siteRouter = require('./site');


function route(app) {
    // app.use('/news', newsRouter);
    // app.use('/me', meRouter);
    app.use('/newses', newsRouter);
    app.use('/', siteRouter);

}

module.exports = route;
