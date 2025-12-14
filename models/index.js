const Cliente = require("./Cliente");
const Produto = require("./Produto");
const Categoria = require("./Categoria");
const Venda = require("./Venda");

Categoria.hasMany(Produto, { foreignKey: "categoriaId", as: 'produtos'});
Produto.belongsTo(Categoria, { foreignKey: "categoriaId", as: 'Categoria'});

Cliente.hasMany(Venda, { foreignKey: "clienteId" });

Venda.belongsTo(Cliente, { foreignKey: "clienteId" });