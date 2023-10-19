const { DataTypes } = require('sequelize')
const connection = require("../../database/database")

const Games = connection.define('games', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Games.sync({ force: false }).then(() => {})

module.exports = Games;