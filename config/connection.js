// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
  // Used with Heroku's jawsDB addon, which must be enabled on the site
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // LocalHost connection
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
      // Prevents excessive console logs
      logging: false,
    }
  );
}

module.exports = sequelize;
