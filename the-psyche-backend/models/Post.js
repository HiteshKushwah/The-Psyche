import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';

const Post = sequelize.define('Post', {
  postID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userID: { type: DataTypes.INTEGER, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.STRING(280), allowNull: false }, // Max 280 characters
  timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  likes: { type: DataTypes.JSON, defaultValue: [] }, // Array of userIDs who liked the post
}, { timestamps: false });

Post.belongsTo(User, { foreignKey: 'userID' });

export default Post;