import { Sequelize } from 'sequelize';
import config from '../config';

const connectionString = config.DATABASE_URL;

const sequelize = new Sequelize(connectionString, {
  define: { underscored: true },
  logging: false,
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? {
      require: true,
      rejectUnauthorized: false,
    } : false,
  },
});

export default sequelize;
