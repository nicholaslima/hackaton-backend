
exports.up = function(knex) {
    return knex.schema.createTable('fichaPaciente',(table) => {
            table.uuid('id').primary();
            table.string('data_diagnostico').notNullable();
            table.string('inicioTratamento').notNullable();
            table.string('id_gravidade').notNullable();
            table.string('id_tipo').notNullable();
            table.string('id_paciente').notNullable();
            table.foreign('id_paciente').references('id').inTable('pacientes');
    });
};

exports.down = function(knex) {
  return knex.schmea.dropTable('fichaPaciente');
};
