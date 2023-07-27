const { Sequelize } = require('sequelize');

// Replace 'your-database-name', 'your-username', 'your-password', and 'your-host' with your MySQL database credentials
const sequelize = new Sequelize('studentdb', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
