const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

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
    hooks: {
      // Set up beforeCreate lifecycle hook functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      // Set up beforeUpdate lifecycle hook functionality
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },
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
