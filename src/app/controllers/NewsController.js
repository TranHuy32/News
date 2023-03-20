const News = require('../models/News');
const { mongooseToObject } = require('../../util/mongoose')


class SiteController {

    //[GET] /newsws/:slug
    async show(req, res) {
        const course = await Course.findOne({ slug: req.params.slug })
        res.render('newses/show', { course: mongooseToObject(course) })
    }
    //[GET] /newses/create
    create(req, res, next) {

        res.render('newses/create')

    }
    //[POST] /newses/store
    async store(req, res, next) {
        console.log(req.body)
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        const news = new News(formData)
        await news.save()
            .then(() => res.redirect('/me/stored/newses'))
            .catch(next)
    }
}


module.exports = new SiteController();
