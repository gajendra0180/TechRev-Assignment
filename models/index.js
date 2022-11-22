const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const env = process.env || 'development'
const Customer = require('./Customer');
const Address = require('./Address');

const sequelize = new Sequelize(
    env.DB_DATABASE,
    env.DB_USERNAME,
    '123456aA#',
    {
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: env.DB_CONNECTION,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        logging: env.ENVIRONMENT == 'dev' ? false : false,
    }
)

const db = {
    Customer: Customer.init(sequelize, Sequelize),
    Address: Address.init(sequelize, Sequelize),
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
