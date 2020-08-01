
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
    tbl.string('description').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects')
};
