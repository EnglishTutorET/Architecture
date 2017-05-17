
exports.up = function(knex, Promise) {
  	return Promise.all([

  		knex.schema.createTable('blog_dev', function(table) {
            table.increments().primary();
            table.string('name');
            table.string('surname');
            table.timestamps();
        })

  	])
};

exports.down = function(knex, Promise) {
	
};
