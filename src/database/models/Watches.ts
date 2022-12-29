import { DataTypes } from 'sequelize';
import { IWatches } from '../../interfaces';
import sequelize from '../connections';

const Watches = sequelize.define<IWatches>(
  'watches',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    streamId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    contentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contentReportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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

export default Watches;
