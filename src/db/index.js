const knex = require('knex')({
  client: 'sqlite3', // or 'better-sqlite3'
  connection: {
    filename: ':memory:',
  },
  useNullAsDefault: true,
});

knex.migrate
  .latest()
  .then(() => {
    return knex.seed.run();
  })
  .then(() => {
    // migrations are finished
    knex('admin')
      .first()
      .then((row) => {
        console.debug(row);
      });
  });

module.exports = knex;
