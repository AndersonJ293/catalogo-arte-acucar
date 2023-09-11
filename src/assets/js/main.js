import { IndividualItem } from "./models/IndividualItem.js";
import { Catalog } from "./models/Catalog.js";
import { Kit } from "./models/Kit.js";

const modal = document.querySelector("#modal");
const modalTitle = document.querySelector("#modalTitle");
const menuButton = document.querySelector("#menuButton");
const closeModal = document.querySelector("#closeModal");
const modalSubmit = document.querySelector("#modalSubmit");
const modalForm = document.querySelector("#form");

export class Form {
  static type;
  static id;
  static name;
  static imageUrl;
  static description;
  static price;
  static minAmount;
  static background;

  static init() {
    this.type = document.querySelector('select[name="type"]');
    this.name = document.querySelector('input[name="name"]');
    this.imageUrl = document.querySelector('input[name="imageUrl"]');
    this.description = document.querySelector('input[name="description"]');
    this.price = document.querySelector('input[name="price"]');
    this.minAmount = document.querySelector('input[name="minAmount"]');
    this.background = document.querySelector('select[name="background"]');
  }
}

let modalOpen = false;
export const handleModal = () => {
  modalOpen = !modalOpen;

  modalOpen
    ? modal.setAttribute("class", "modal")
    : modal.setAttribute("class", "modalClosed");
};

menuButton.addEventListener("click", () => {
  modalTitle.innerText = "Adicionar Item";
  modalSubmit.innerText = "Salvar";
  handleModal();
  Form.type.disabled = false;
});

closeModal.addEventListener("click", () => {
  handleModal();
  modalForm.reset();
});

modalSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (modalSubmit.innerHTML === "Salvar") {
    Form.init();
    if (Form.type.value === "individual") {
      Catalog.addItem(
        new IndividualItem(
          Form.name.value,
          Form.imageUrl.value,
          Form.minAmount.value,
          Form.description.value,
          Form.price.value,
          Form.background.value
        )
      );
    }
    modalForm.reset();
  }
  if (modalSubmit.innerHTML === "Editar") {
    if (Form.type.value === "individual") {
      Catalog.editItem(
        Form.id,
        new IndividualItem(
          Form.name.value,
          Form.imageUrl.value,
          Form.minAmount.value,
          Form.description.value,
          Form.price.value,
          Form.background.value
        )
      );
    }
    modalForm.reset();
  }
  handleModal();
});

Catalog.addItem(
  new IndividualItem(
    "Pão de mel 3D",
    "assets/images/doce3.svg",
    4,
    "Massa de pão de mel recheado com doce de leite e decoração 3d.",
    "R$ 15,00",
    "option 2"
  )
);
Catalog.addItem(
  new IndividualItem(
    "Pirulito de chocolate",
    "assets/images/doce2.svg",
    6,
    "Pirulitos de chocolate com decoração 2d.",
    "R$ 12,00",
    "option 3"
  )
);

Catalog.addItem(
  new IndividualItem(
    "Bolo no palito",
    "assets/images/doce1.svg",
    4,
    "Bolo com recheio de brigadeiro e decoração 2d",
    "R$ 15,00",
    "option 1"
  )
);
