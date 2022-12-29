import { users } from '..';
import { Migration } from '../migration';

const up: Migration = async ({ context: queryInterface }) => {
  await Promise.all([
    queryInterface.removeConstraint('users', 'users_created_by_fkey'),
    queryInterface.removeConstraint('users', 'users_updated_by_fkey'),
    queryInterface.removeConstraint('users', 'users_user_role_id_fkey'),
    queryInterface.removeConstraint('users', 'users_user_status_id_fkey'),
  ]);

  await queryInterface.bulkInsert('users', users);

  await Promise.all([
    queryInterface.addConstraint('users', {
      fields: ['created_by'],
      type: 'foreign key',
      name: 'users_created_by_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('users', {
      fields: ['updated_by'],
      type: 'foreign key',
      name: 'users_updated_by_fkey',
      references: {
        table: 'users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('users', {
      fields: ['user_role_id'],
      type: 'foreign key',
      name: 'users_user_role_id_fkey',
      references: {
        table: 'user_roles',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
    queryInterface.addConstraint('users', {
      fields: ['user_status_id'],
      type: 'foreign key',
      name: 'users_user_status_id_fkey',
      references: {
        table: 'user_statuses',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),
  ]);
};

const down: Migration = async ({ context: queryInterface }) => {
  await queryInterface.bulkDelete('users', { name: users.map((user) => user.name) });
};

export { up, down };
