// import the Sequelize constructor from the library
const Sequelize = require('sequelize');
// import the production environment variables
require('dotenv').config();

//Create a connect to our database, pass in your MYSQL username, password, host, port, and database name
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

module.exports = sequelize;