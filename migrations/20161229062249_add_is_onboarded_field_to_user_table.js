
exports.up = function(knex, Promise) {
  
    return knex.schema.table("users", function(table) {

        table.boolean("is_onboarded").defaultTo(false)

    })

}

exports.down = function(knex, Promise) {
  
}
