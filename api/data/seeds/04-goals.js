
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('goals').del()
    .then(function () {
      // Inserts seed entries
      return knex('goals').insert([
        {id: 1, user_id: 1, title: 'seeded goal', description: 'i came from the db seed'},
      ]);
    });
};
