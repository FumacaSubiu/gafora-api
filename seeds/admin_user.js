/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('admin').del();
  await knex('admin').insert([
    {
      id: 1,
      name: 'admin',
      login: 'admin',
      password: 'admin',
      email: 'admin@admin.com',
    },
  ]);
};
