exports.up = knex => knex.schema.createTable("peoples_not_confirmed", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("address").notNullable();
    table.text("school").notNullable();
    table.text("schoolCouncil").notNullable();
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("peoples_not_confirmed");