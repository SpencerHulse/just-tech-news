const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create our User model
class User extends Model {}

// Define table columns and configuration
User.init(
  {
    // Table column definitions go here
    // Define ID column
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // Define username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Define email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // Only is allowNull is false can we run validators
      validate: {
        isEmail: true,
      },
    },
    // Define password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // At least 4 characters in length
        len: [4],
      },
    },
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE:
    // (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // Pass in the imported sequelize connection (direct connection to db)
    sequelize,
    // Don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // Don't pluralize name of database fields
    freezeTableName: true,
    // Use underscored instead of camel-casing
    underscored: true,
    // Make it so our model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
