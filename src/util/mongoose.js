const { Sequelize } = require('sequelize');


var sequelize = new Sequelize('new_schema', 'root', '030201', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

});
