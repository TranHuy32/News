
const Course = require('../models/News');
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    // [GET] /
    // async index(req, res, next) {
    //     let condition = {}
    //     if (req.query.keyword) {
    //         condition.name = { $regex: '.*' + req.query.keyword + '.*', $options: 'i' }

    //     }
    //     const newses = await News.find(condition)
    //         .then(newses => {
    //             res.render('home', {
    //                 courses: mutipleMongooseToObject(newses)
    //             })
    //         })
    // }
    index(req, res) {
        res.render('home');
    }
}
module.exports = new SiteController();
