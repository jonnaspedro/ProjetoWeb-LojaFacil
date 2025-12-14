const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "lojaFacil.sqlite",
    logging: false
});

module.exports = sequelize;