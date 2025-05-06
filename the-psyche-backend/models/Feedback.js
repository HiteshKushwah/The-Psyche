import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';

const Feedback = sequelize.define('Feedback', {
  feedbackID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  text: { type: DataTypes.TEXT, allowNull: false },
}, { timestamps: true, createdAt: 'createdAt', updatedAt: false });

Feedback.belongsTo(User, { foreignKey: 'userID' });

export default Feedback;