const bcrypt = require('bcryptjs')

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName: 'test', lastName: 'test', username: 'test', password: 'test'}
        
        // {id: 1, firstName: 'christine', lastName: 'bussinger', username: 'cake', password: await bcrypt.hash('cake', 10)},
        // {id: 2, firstName: 'Blake', lastName: 'Davis', username: 'blakedavis', password: 'essential'},
        // {id: 4, firstName: 'Alex', lastName: 'Mallory', username: 'alex', password: 'essential'},
        // {id: 5, firstName: 'Valerie', lastName: 'Vazquez', username: 'val', password: 'essential'},
      ]);
    });
};
