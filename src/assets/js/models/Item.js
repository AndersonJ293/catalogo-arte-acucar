class Item {
  static #id = 0;
  constructor(name, description, price, backgroundImage, color) {
    this.id = ++Item.#id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.backgroundImage = backgroundImage;
    this.color = color;
  }
}

module.exports = Item;
