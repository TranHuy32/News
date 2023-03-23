// var Sequelize = require('sequelize');
// var db = require('../config/database');
var job = require('../models/job');

const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
class employee extends Model { }

var sequelize = new Sequelize('nodejs_test', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',
});


// var employee = db.define('employee', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true
//     },
//     name: {
//         type: Sequelize.STRING
//     },
//     email: {
//         type: Sequelize.STRING
//     },
//     job_id: {
//         type: Sequelize.STRING
//     }
// });


employee.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    job_id: { type: DataTypes.STRING, allowNull: false },

}, { sequelize, modelName: 'employee' });

// Create Relation beetween table
job.hasMany(employee, {
    foreignKey: 'job_id'
});

employee.belongsTo(job, {
    foreignKey: 'job_id'
});

module.exports = employee;

