import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { ITransactions } from '../../interfaces';

const Transactions = sequelize.define<ITransactions>(
  'transactions',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    contentId: {
      type: DataTypes.STRING,
    },
    prevNextUpAccRevenue: {
      type: DataTypes.DECIMAL,
    },
    nextUpAccRevenue: {
      type: DataTypes.DECIMAL,
    },
    prevOwedAccRevenue: {
      type: DataTypes.DECIMAL,
    },
    owedAccRevenue: {
      type: DataTypes.DECIMAL,
    },
    prevRecoveredCosts: {
      type: DataTypes.DECIMAL,
    },
    recoveredCosts: {
      type: DataTypes.DECIMAL,
    },
    contentReportId: {
      type: DataTypes.INTEGER,
    },
    revenue: {
      type: DataTypes.DECIMAL,
    },
    nextUpToOwedSplitPercentage: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    paranoid: true,
  },
);

export default Transactions;
