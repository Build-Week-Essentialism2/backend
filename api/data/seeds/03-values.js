
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {id: "1",
        value: "Weight Loss",
        description: "Improve your health with weight loss.",
        img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {id: "2",
        value: "Organization",
        description: "An organized room is an organized mind",
        img: 'https://images.pexels.com/photos/670723/pexels-photo-670723.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {id: "3",
        value: "Reading",
        description: "For those who love to read or want to read more.",
        img: 'https://images.pexels.com/photos/34075/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {id: "4",
        value: "Writing",
        description: "Write down your thoughts.",
        img: 'https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {id: "5",
        value: "Less Social Media",
        description: "Unplug from the Matrix",
        img: 'https://images.pexels.com/photos/17663/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {id: "6",
        value: "Nutrition",
        description: "Improve your health with weight loss.",
        img: 'https://images.pexels.com/photos/8110/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
      ]);
    });
};
