const db = require('../../data/db-config')

module.exports = {
  insert,
//   update,
//   remove,
  getAll,
  getById,
}

function getAll() {
  return db('stocks')
}

function getById(id) {
  return db('stocks')
    .where('stock_id', id)
    .first()
}

async function insert(stock) {
  // with postgres you can do:
  // return db('stocks').insert(stock, ['id', 'ticker'])
  return db('stocks')
    .insert(stock)
    .then(([id]) => {
      return getById(id)
    })
}

// async function update(id, changes) {
//   return null
// }

// function remove(id) {
//   return null
// }
