import { IndividualItem } from "./IndividualItem.js";
export class Catalog {
  static #items = [];
  static #individualItemContainer = document.querySelector("#individualItems");
  constructor() {}

  static renderItems() {
    this.#individualItemContainer.innerHTML = "";
    this.#items.forEach((item) => {
      const product = document.createElement("individual-item");
      product.setAttribute("name", item.name);
      product.setAttribute("description", item.description);
      product.setAttribute("price", item.price);
      product.setAttribute("imageUrl", item.image);
      product.setAttribute("minAmount", item.minAmount);
      product.setAttribute("backgroundImage", item.backgroundImage);
      product.setAttribute("buttonColor", item.buttonColor);
      product.setAttribute("iconColor", item.iconColor);
      this.#individualItemContainer.appendChild(product);
    });
  }

  static addItem(item) {
    this.#items.push(item);
    Catalog.renderItems();
  }

  static deleteItem(id) {
    const itemIndex = this.#items.findIndex((item) => item.id === id);
    if (itemIndex !== -1) this.#items.splice(itemIndex, 1);
  }

  static editItem(id) {}
}
