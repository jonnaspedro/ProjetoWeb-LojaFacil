const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Fornecedor = sequelize.define("Fornecedor", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Fornecedor;