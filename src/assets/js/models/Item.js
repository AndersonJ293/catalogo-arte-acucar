import { backgroundOptions } from "../../data/backgroundOptions.js";
export class Item {
  static #id = 0;
  constructor(name, description, price, backgroundImage) {
    this.id = ++Item.#id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.backgroundImage = backgroundOptions[backgroundImage].background;
    this.buttonColor = backgroundOptions[backgroundImage].buttonColor;
    this.iconColor = backgroundOptions[backgroundImage].iconColor;
  }
}
