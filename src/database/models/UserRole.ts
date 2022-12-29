import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IUserRole } from '../../interfaces';

const UserRole = sequelize.define<IUserRole>(
  'user_roles',
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

export default UserRole;
