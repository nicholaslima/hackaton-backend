
exports.up = function(knex) {
    return knex.schema.createTable('avaliacoes',(table) => {
        table.uuid('id').primary();
        table.string('data').notNullable();
        table.string('descricao').notNullable();
        table.string('id_gravidade').notNullable();
        table.string('id_paciente').notNullable();
        table.string('evolucao').notNullable();
        table.foreign('id_gravidade').references('id').inTable('gravidade');
        table.foreign('id_paciente').references('id').inTable('paciente');
    })
};

exports.down = function(knex) {
    return knex.dropTable('avaliacoes');
};  
