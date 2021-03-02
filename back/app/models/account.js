const Sequelize = require('sequelize');
const sequelize = require('../database');

class Account extends Sequelize.Model {};

Account.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    phone_number: Sequelize.NUMBER,
    role: Sequelize.STRING
}, {
    sequelize,
    tableName: "account"
});

module.exports = Account;