const Item = require("./Item");

class IndividualItem extends Item {
  constructor(
    name,
    imageUrl,
    minAmount,
    description,
    price,
    backgroundImage,
    color
  ) {
    super(name, description, price, backgroundImage, color);
    this.image = imageUrl;
    this.minAmount = minAmount;
  }
}

module.exports = IndividualItem;
