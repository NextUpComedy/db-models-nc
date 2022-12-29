import { Umzug, SequelizeStorage } from 'umzug';
import { sequelize } from './database';

const umzug = new Umzug({
  migrations: {
    glob: ['migrations/*.js', { cwd: __dirname }],
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize,
    modelName: 'migration_meta',
  }),
  logger: console,
});

export type Migration = typeof umzug._types.migration;
export default umzug;
