import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';

const Response = sequelize.define('Response', {
  responseID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  phase: { type: DataTypes.ENUM('mentality', 'philosophy', 'psychology', 'fear', 'self-discovery'), allowNull: false },
  question: { type: DataTypes.STRING, allowNull: false },
  answer: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true, createdAt: 'createdAt', updatedAt: false });

Response.belongsTo(User, { foreignKey: 'userID' });

export default Response;