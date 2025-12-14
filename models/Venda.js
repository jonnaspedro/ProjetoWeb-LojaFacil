const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Venda = sequelize.define("Venda", {
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Venda;