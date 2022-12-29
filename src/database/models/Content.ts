import { DataTypes } from 'sequelize';
import sequelize from '../connections';
import { IContent } from '../../interfaces';

const Content = sequelize.define<IContent>(
  'contents',
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    runtime: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.DATE,
    },
    permalink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    advance: {
      type: DataTypes.DECIMAL,
    },
    launchDate: {
      type: DataTypes.DATE,
    },
    nextUpAccRevenue: {
      type: DataTypes.DECIMAL,
    },
    owedAccRevenue: {
      type: DataTypes.DECIMAL,
    },
    feePaid: {
      type: DataTypes.DECIMAL,
    },
    filmingCosts: {
      type: DataTypes.DECIMAL,
    },
    recoveredCosts: {
      type: DataTypes.DECIMAL,
    },
    primaryCategory: {
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

export default Content;
