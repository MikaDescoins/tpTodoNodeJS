const Sequelize = require('sequelize');
const Operator = Sequelize.Op;

const db = new Sequelize('db', 'user', 'pwd', {
    host:'localhost',
    dialect: 'sqlite',
    storage:'todo.sqlite',
    operatorAliases :Operator
});

module.exports = db;