import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IUser } from '../../interfaces';

const User = sequelize.define<IUser>(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userStatusId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    googleId: {
      type: DataTypes.STRING,
    },
    totalRevenue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    paidRevenue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    rejectionReason: {
      type: DataTypes.STRING,
    },
    stripeAccount: {
      type: DataTypes.STRING,
    },
    createdBy: {
      type: DataTypes.INTEGER,
    },
    updatedBy: {
      type: DataTypes.INTEGER,
    },
  },
  {
    paranoid: true,
  },
);

export default User;
