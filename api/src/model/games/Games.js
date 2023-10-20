const { DataTypes } = require('sequelize')
const connection = require("../../database/database")

const Games = connection.define('games', {
  TITLE: {
    type: DataTypes.STRING,
    allowNull: false
  },
  YEAR: {
    type: DataTypes.STRING,
    allowNull: false
  },
  PRICE: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

Games.sync({ force: false }).then(() => {})

module.exports = Games;