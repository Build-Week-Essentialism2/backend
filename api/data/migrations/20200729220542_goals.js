
exports.up = function(knex) {
  return knex.schema.createTable('goals', tbl => {
    tbl.increments()
    tbl.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    tbl.string('title').notNullable()
    tbl.string('description')
    tbl.string('date')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('goals')
};
