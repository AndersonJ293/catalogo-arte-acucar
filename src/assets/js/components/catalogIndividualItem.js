import { Catalog } from "../models/Catalog.js";
import { Form, handleModal } from "../main.js";
const modalTitle = document.querySelector("#modalTitle");
const modalSubmit = document.querySelector("#modalSubmit");
import { backgroundOptions } from "../../data/backgroundOptions.js";

class CatalogIndividualItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(this.build());
    this.appendChild(this.style());
  }

  build() {
    const id = this.getAttribute("itemId");
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    const price = this.getAttribute("price");
    const imageUrl = this.getAttribute("imageUrl");
    const minAmount = this.getAttribute("minAmount");
    const backgroundImage = this.getAttribute("backgroundImage");
    const buttonColor = this.getAttribute("buttonColor");
    const iconColor = this.getAttribute("iconColor");

    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "item");
    componentRoot.style.backgroundImage = `url(${backgroundOptions[backgroundImage].background})`;

    const adminButtons = document.createElement("div");
    adminButtons.setAttribute("class", "adminButtons");

    const editButton = document.createElement("button");
    editButton.setAttribute("class", "adminButton");

    editButton.onclick = (e) => {
      e.preventDefault();
      modalTitle.innerText = "Editar Item";
      modalSubmit.innerText = "Editar";

      Form.init();
      Form.id = id;
      Form.type.value = "individual";
      Form.type.disabled = true;
      Form.name.value = name;
      Form.description.value = description;
      Form.price.value = price;
      Form.imageUrl.value = imageUrl;
      Form.minAmount.value = minAmount;
      Form.background.value = backgroundImage;
      handleModal();
    };

    const editButtonIcon = document.createElement("img");
    editButtonIcon.setAttribute("class", "buttonIcon");
    editButton.appendChild(editButtonIcon);
    editButtonIcon.src = "assets/images/icons/edit.svg";
    adminButtons.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "adminButton");

    deleteButton.onclick = (e) => {
      e.preventDefault();
      Catalog.deleteItem(id);
    };

    const deleteButtonIcon = document.createElement("img");
    deleteButtonIcon.setAttribute("class", "buttonIcon");
    deleteButtonIcon.src = "assets/images/icons/delete.svg";
    deleteButton.appendChild(deleteButtonIcon);
    adminButtons.appendChild(deleteButton);
    componentRoot.appendChild(adminButtons);

    const info = document.createElement("div");
    info.setAttribute("class", "info");

    const itemTitle = document.createElement("p");
    itemTitle.setAttribute("class", "itemTitle");
    itemTitle.innerText = name;
    info.appendChild(itemTitle);

    const itemDescription = document.createElement("p");
    itemDescription.setAttribute("class", "description");
    itemDescription.innerText = description;
    info.appendChild(itemDescription);

    const moreInfoContainer = document.createElement("div");
    moreInfoContainer.setAttribute("class", "moreInfo");

    const priceContainer = document.createElement("div");
    priceContainer.setAttribute("class", "priceContainer");

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "price");
    itemPrice.innerText = price;
    priceContainer.appendChild(itemPrice);

    const cartButton = document.createElement("button");
    cartButton.setAttribute("class", "cartButton");
    cartButton.style.backgroundColor = buttonColor;

    const cartIcon = document.createElement("img");
    cartIcon.setAttribute("class", "buttonIcon");
    cartIcon.src = "assets/images/icons/shopping-cart.svg";
    cartButton.appendChild(cartIcon);
    priceContainer.appendChild(cartButton);
    moreInfoContainer.appendChild(priceContainer);

    const amount = document.createElement("p");
    amount.setAttribute("class", "minAmount");
    amount.innerHTML = `Quantidade Minima: <b>${minAmount}<b>`;
    moreInfoContainer.appendChild(amount);
    info.appendChild(moreInfoContainer);

    const imageContainer = document.createElement("div");
    imageContainer.setAttribute("class", "imageContainer");

    const image = document.createElement("img");
    image.setAttribute("class", "image");
    image.setAttribute("src", imageUrl);
    image.setAttribute("alt", "Foto de um doce personalizado");
    imageContainer.appendChild(image);

    componentRoot.appendChild(info);
    componentRoot.appendChild(imageContainer);

    return componentRoot;
  }

  style() {
    const style = document.createElement("style");
    style.textContent = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      overflow-x: hidden;
    }
 
    .item {
      z-index: 0;
      position: relative;
      display: flex;
      width: 450px;
      height: 250px;
      padding: 30px 20px;
      background-color: #fff2ff;
      box-shadow: 1px 1px 4px 1px rgba(236, 116, 180, 0.25);
      border-radius: 10px;
      margin-bottom: 25px;
      margin-right: 25px;
    }

    .adminButtons {
      position: absolute;
      top: 30px;
      right: 20px;
      opacity: 0;
      transition: 0.3s ease-in;
    }

    .item:hover > .adminButtons {
      opacity: 0.7;
    }

    .adminButton {
      width: 28px;
      height: 28px;
      margin-right: 10px;
      border: 1px solid #541514;
      cursor: pointer;
      border-radius: 4px;
      background-color: rgba(0,0,0,0.0);
      box-shadow: 2px 2px 4px 1px rgba(236, 116, 180, 0.5);
      transition: 0.3s ease-in;
    }

    .adminButton:hover {
      filter: brightness(200%);
      backdrop-filter: blur(10px);
    }

    .info {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .itemTitle {
      font-size: 25px;
      font-weight: 600;
    }

    .description {
      width: 80%;
      font-size: 18px;
    }

    .priceContainer {
      font-size: 25px;
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
    }

    .cartButton {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      transition: 0.3s ease-in;
    }

    .buttonIcon {
      width: 22px;
      height: 22px;
    }

    .cartButton:hover {
      filter: brightness(85%);
    }

    .imageContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      overflow-y: hidden;
    }

    .image {
      width: 90%;
    }
`;

    return style;
  }
}

customElements.define("individual-item", CatalogIndividualItem);
