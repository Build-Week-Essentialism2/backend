
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, user_id: 1, description: "read more often"},
        {id: 2, user_id: 1, description: 'exercise twice a week'},
        {id: 3, user_id: 1, description: 'meditate for 5 minutes a day'}
      ]);
    });
};
