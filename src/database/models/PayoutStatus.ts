import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IPayoutStatus } from '../../interfaces';

const PayoutStatus = sequelize.define<IPayoutStatus>(
  'payout_statuses',
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

export default PayoutStatus;
