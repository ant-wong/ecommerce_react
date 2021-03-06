const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host: 'localhost',
    database: 'E-commerce',
    user: 'postgres',
    password: ''
  }
})

const bookshelf = require('bookshelf')(knex)

const User = bookshelf.Model.extend({
  tableName: 'users',
  cartItems: function() {
    return this.hasMany(cartItem)
  }
})

module.exports = User