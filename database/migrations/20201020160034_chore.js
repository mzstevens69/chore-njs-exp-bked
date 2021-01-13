
exports.up = function(knex) {
    return (
        knex.schema
            //chore table
            .createTable("images", tbl => {
                tbl.increments();
                tbl.string("image", 14000);
            })

            .createTable("chore", tbl => {
            tbl.increments();

            tbl.string("name", 128)
            .notNullable();

            tbl.string("description", 500)
            .notNullable();

            tbl.string("comments", 255);

            tbl.boolean("completed")
            .defaultTo(false);

            tbl.date("due_date");

            tbl.integer("chore_score")
            .notNullable();

            tbl.integer("bonus_pts");

            tbl.integer("clean_strk");

            tbl
                .integer("child_id")
                .unsigned()
                .references("id")
                .inTable("child")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");

            tbl     
                .integer("img_id")
                .unsigned()
                .references("id")
                .inTable("images")
        })
    )  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("chore")
        .dropTableIfExists("images")
        .dropTableIfExists("child")
        .dropTableIfExists("parent")
  
};
