const DataTypes = require("sequelize").DataTypes;
const _author = require("./author");
const _book = require("./book");

function initModels(sequelize) {
  const author = _author(sequelize, DataTypes);
  const book = _book(sequelize, DataTypes);

  book.belongsTo(author, { as: "author", foreignKey: "author_id"});
  author.hasMany(book, { as: "books", foreignKey: "author_id"});

  return {
    author,
    book,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
