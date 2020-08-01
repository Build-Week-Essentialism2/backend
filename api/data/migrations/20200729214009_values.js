
exports.up = function(knex) {
  return knex.schema.createTable('values', tbl => {
    tbl.increments()
    tbl.string('value').unique().notNullable()
    tbl.string('description').notNullable()
    tbl.string('img')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('values')
};
