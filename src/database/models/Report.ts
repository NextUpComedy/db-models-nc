import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IReport } from '../../interfaces';

const Report = sequelize.define<IReport>(
  'reports',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    watchTimeFrom: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: true,
    },
    watchTimeTo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    overallWatchedSeconds: {
      type: DataTypes.BIGINT,
    },
    totalRevenue: {
      type: DataTypes.DECIMAL,
    },
    nextUpToOwedSplitPercentage: {
      type: DataTypes.DECIMAL,
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

export default Report;
