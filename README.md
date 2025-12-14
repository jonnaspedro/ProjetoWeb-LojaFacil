# LojaFácil Web

LojaFácil Web é uma aplicação desenvolvida para auxiliar pequenas e médias lojas de roupas no gerenciamento de estoque, produtos, clientes e vendas.
O sistema permite cadastrar produtos, controlar o estoque automaticamente, registrar vendas e organizar todas as informações da loja de forma simples e eficiente.

Este projeto foi desenvolvido por **Jonnas Pedro** e **Laysa Marina**, alunos do **2º Ano B**.

## Funcionalidades

O sistema possui **7 CRUDs completos**, acessíveis pelo menu principal:

* CRUD de Clientes
* CRUD de Produtos
* CRUD de Categorias
* CRUD de Fornecedores
* CRUD de Vendas
* CRUD de Funcionários
* CRUD de Marcas

Além disso, oferece:

* Controle automático de estoque
* Registro de vendas
* Organização das informações por telas simples e objetivas

## Associações Entre Modelos

As entidades do sistema possuem relacionamentos definidos para garantir integridade e facilitar consultas:

- **Produto ↔ Categoria**: Um produto pertence a uma categoria, e uma categoria pode ter vários produtos.
- **Produto ↔ Fornecedor**: Um produto pode ter um fornecedor, e um fornecedor pode fornecer vários produtos.

Essas associações permitem que o sistema realize operações como listar produtos por categoria ou verificar quais produtos são fornecidos por cada fornecedor.

## Estrutura do Projeto

```
/modelos
/publico/css
/vistas
database.js
lojaFacil.sqlite
servidor.js
package.json
```

## Tecnologias Utilizadas

* HTML, CSS e JavaScript
* Node.js
* Express.js
* SQLite

## Como Executar

1. Instale as dependências:

   ```
   npm install
   ```

2. Inicie o servidor:

   ```
   node servidor.js
   ```

3. Abra no navegador:

   ```
   http://localhost:3000
   ```

## Autores

* Jonnas Pedro — 2º Ano B
* Laysa Marina — 2º Ano B
