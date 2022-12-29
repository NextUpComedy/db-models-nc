import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IPayout } from '../../interfaces';

const Payout = sequelize.define<IPayout>(
  'payouts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payoutStatusId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    rejectionReason: {
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

export default Payout;
