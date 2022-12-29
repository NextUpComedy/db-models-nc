import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IUserStatus } from '../../interfaces';

const UserStatus = sequelize.define<IUserStatus>(
  'user_statuses',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    paranoid: true,
  },
);

export default UserStatus;
