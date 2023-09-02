const Item = require("./Item");

class Kit extends Item {
  constructor(name, imagesUrl, description, price, backgroundImage, color) {
    super(name, description, price, backgroundImage, color);
    this.imagesUrl = imagesUrl;
  }
}

module.exports = Kit;
