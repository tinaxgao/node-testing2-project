exports.up = function (knex) {
    return knex.schema
      .createTable('stocks', stocks => {
        stocks.increments('stock_id')
        stocks.string('ticker', 5).notNullable().unique()
        stocks.string("upper")
        stocks.string("lower")
        stocks.timestamp('created_at').defaultTo(knex.fn.now())
      })
  }
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('stocks')
  }
  