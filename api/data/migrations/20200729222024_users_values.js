
exports.up = function(knex) {
  return knex.schema.createTable('users_values', tbl => {
    tbl.integer('user_id').references('id').inTable('users').notNullable()
    tbl.integer('value_id').references('id').inTable('values').notNullable()
    tbl.primary(['user_id', 'value_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users_values')
};
