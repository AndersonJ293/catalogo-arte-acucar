import { Item } from "./Item.js";
export class IndividualItem extends Item {
  constructor(name, imageUrl, minAmount, description, price, backgroundImage) {
    super(name, description, price, backgroundImage);
    this.image = imageUrl;
    this.minAmount = minAmount;
  }
}
