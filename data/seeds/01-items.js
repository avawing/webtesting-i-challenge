
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {id: 1, name: 'Sword of Omens', durability: 45, enhancement: 5},
        {id: 2, name: 'Staff of Thwacking', durability: 12 , enhancement: 10 },
        {id: 3, name: 'Gem of Maximum Expense', durability: 69, enhancement: 15}
      ]);
    });
};
