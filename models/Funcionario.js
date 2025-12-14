const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Funcionario = sequelize.define("Funcionario", {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Funcionario;