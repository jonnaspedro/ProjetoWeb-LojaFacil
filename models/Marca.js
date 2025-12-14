const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Marca = sequelize.define("Marca", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Marca;