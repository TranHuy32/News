
const { Model, DataTypes } = require('sequelize');
const { Sequelize } = require('sequelize');
class user extends Model { }

var sequelize = new Sequelize('nodejs_test', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',
});

user.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {
        type: DataTypes.STRING, allowNull: false, lowercase: true, unique: true
    },
    password: { type: DataTypes.STRING, allowNull: false }
}, { sequelize, modelName: 'user' });




module.exports = user;