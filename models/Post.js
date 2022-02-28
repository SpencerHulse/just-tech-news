const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create the Post model
class Post extends Model {
  // Static implies it is based on the Post method, not an instance of it
  static upvote(body, models) {
    // This could be directly in the route, but it would be req.body.*
    return models.Vote.create({
      user_id: body.user_id,
      post_id: body.post_id,
    }).then(() => {
      // Then find the post just voted on
      return Post.findOne({
        where: { id: body.post_id },
        attributes: [
          "id",
          "post_url",
          "title",
          "created_at",
          // Raw MySQL aggregate function query to get a count of how many votes a post has
          [
            sequelize.literal(
              `(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)`
            ),
            // Returns it under the name "vote_count"
            "vote_count",
          ],
        ],
      });
    });
  }
}

// Create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
