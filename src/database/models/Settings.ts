import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { ISettings } from '../../interfaces';

const Settings = sequelize.define<ISettings>(
  'settings',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    value: {
      type: DataTypes.JSON,
      defaultValue: '{}',
    },
  },
  {
    paranoid: true,
  },
);

export default Settings;
