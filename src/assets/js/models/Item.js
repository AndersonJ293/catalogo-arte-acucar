import { backgroundOptions } from "../../data/backgroundOptions.js";
export class Item {
  constructor(name, description, price, backgroundImage) {
    this.id = this.randomId();
    this.name = name;
    this.description = description;
    this.price = price;
    this.backgroundImage = backgroundImage;
    this.buttonColor = backgroundOptions[backgroundImage].buttonColor;
    this.iconColor = backgroundOptions[backgroundImage].iconColor;
  }
}

Item.prototype.randomId = function () {
  const maxId = 1000000000;
  return ((Math.random() * maxId) | 0).toString(36);
};
