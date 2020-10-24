
exports.up = function(knex) {
    return knex.schema.createTable('tipoCancer',(table) => {
        table.uuid('id').primary();
        table.string('descricao').notNullable();
    });
};

exports.down = function(knex) {
        return knex.schema.dropTable('tipoCancer');
};
