const { QueryTypes } = require('sequelize');
const News = require('../models/News');
const { Sequelize } = require('sequelize');

// const sequelize = require('../../util/mongoose.js');
var sequelize = new Sequelize('new_schema', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',

});
class SiteController {
    // [GET] /
    async index(req, res, next) {
        try {
            const news = await sequelize.query('SELECT * FROM tasks', {
                type: QueryTypes.SELECT,
            });
            res.render('home', { news: news });

        } catch (error) {
            next(error);
        }
    }



}

module.exports = new SiteController();
