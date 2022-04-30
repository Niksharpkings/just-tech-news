const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vote'
  }
);

module.exports = Vote;


 // static upvote(body, models) {
    //     return models.Vote.create({
    //         user_id: body.user_id,
    //         post_id: body.post_id,
    //     }).then(() => {
    //         return Post.findOne({
    //             where: {
    //                 id: body.post_id
    //             },
    //             attributes: [
    //                 'id',
    //                 'post_url',
    //                 'title',
    //                 'created_at',
    //                 [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    //             ],
    //         })
    //     })
    // }