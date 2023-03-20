
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')


const Schema = mongoose.Schema;

const News = new Schema({
    name: { type: String, required: true, },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, required: true, },
    level: { type: String, maxLength: 600 },
    slug: { type: String, slug: 'name', unique: true }
    // createdAt: { type: Date, default: Date.now },
    // updateddAt: { type: Date, default: Date.now },


}, {
    timestamps: true,
});
//Add plugin

mongoose.plugin(slug);
News.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('News', News)