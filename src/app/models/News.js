const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
class News extends Model { }

var sequelize = new Sequelize('new_schema', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',
});


News.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    videoId: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },

}, { sequelize, modelName: 'tasks' });

module.exports = News;
