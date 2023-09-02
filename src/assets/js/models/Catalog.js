const IndividualItem = require("./IndividualItem");
const Kit = require("./Kit");

class Catalog {
  static items = [];
  constructor() {}

  static renderItems() {
    Catalog.items.forEach((item) => console.log(item));
  }

  static addItem(item) {
    Catalog.items.push(item);
  }

  static deleteItem(id) {
    const itemIndex = Catalog.items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) Catalog.items.splice(1, itemIndex);
  }

  static editItem() {}
}

module.exports = Catalog;
