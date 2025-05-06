// models/PsycheAI.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import User from './User.js';

const PsycheAI = sequelize.define('PsycheAI', {
  psycheAIID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  query: { type: DataTypes.STRING, allowNull: false },
  response: { type: DataTypes.TEXT, allowNull: false },
}, { timestamps: true, createdAt: 'createdAt', updatedAt: false });

PsycheAI.belongsTo(User, { foreignKey: 'userID' });

export default PsycheAI;