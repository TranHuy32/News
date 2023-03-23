const News = require('../models/News');
// const sequelize = require('../../util/mongoose.js');
const { QueryTypes } = require('sequelize');
const { Sequelize } = require('sequelize');


var sequelize = new Sequelize('new_schema', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',

})

class SiteController {
    //[GET] /newsws/:slug
    async show(req, res) {
        const news = await News.findOne({ where: { slug: req.params.slug } });
        // console.log(news);
        res.render('newses/show', { news: news.dataValues });
    }
    //[GET] /newses/create
    create(req, res, next) {

        res.render('newses/create')

    }
    //[POST] /newses/store

    async store(req, res, next) {
        console.log(req.body)
        try {
            const formData = req.body;
            formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
            await News.create(formData);
            res.redirect('/');
        } catch (error) {
            console.log(error);
            next(error);
        }

    }
}


module.exports = new SiteController();
