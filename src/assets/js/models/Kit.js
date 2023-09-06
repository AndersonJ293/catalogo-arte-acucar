import { Item } from "./Item.js";
export class Kit extends Item {
  constructor(
    name,
    imagesUrl,
    description,
    price,
    backgroundImage,
    buttonColor,
    iconColor
  ) {
    super(name, description, price, backgroundImage, buttonColor, iconColor);
    this.imagesUrl = imagesUrl;
  }
}
