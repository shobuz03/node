const Sequelize = require('sequelize');
const db = {}

const sequelize = new Sequelize('nodejs_tasks', 'root', 'shobuz03', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

//Checking connection status
sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully'))
    .catch(err => console.log(err.message))
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;