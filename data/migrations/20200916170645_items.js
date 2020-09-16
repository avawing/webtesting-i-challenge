
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('items', tbl=>{
      //id
      tbl.increment()

      tbl.string('name')
      tbl.integer('durability')
      tbl.integer('enhancement')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('items')
};
