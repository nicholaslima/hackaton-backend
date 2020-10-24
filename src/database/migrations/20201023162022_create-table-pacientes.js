
exports.up = function(knex) {
  return knex.schema.createTable('pacientes',(table) => {
        table.uuid('id').primary();
        table.string('nome').notNullable();
        table.string('idade').notNullable();
        table.string('data_nascimento').notNullable();
        table.string('nome_pai').notNullable();
        table.string('nome_mae').notNullable();
  });
};

exports.down = function(knex) {
 return knex.dropTable('pacientes')
};
