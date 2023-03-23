
const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
class job extends Model { }

var sequelize = new Sequelize('nodejs_test', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',
});

job.init({
    job_id: { type: DataTypes.STRING, primaryKey: true, autoIncrement: true },
    job_title: { type: DataTypes.STRING, allowNull: false },
}, { sequelize, modelName: 'job' });




module.exports = job;