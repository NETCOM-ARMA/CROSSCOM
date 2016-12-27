
exports.up = function(knex, Promise) {

    return knex.schema.createTable("users", function(table) {

        table.increments("id")

        table.string("steam_id").notNullable().index()

    })

}

exports.down = function(knex, Promise) {
  
    throw new Erro("Unimplemented")

}
