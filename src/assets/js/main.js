const Catalog = require("./models/Catalog");
const IndividualItem = require("./models/IndividualItem");
const Kit = require("./models/Kit");

Catalog.addItem(
  new IndividualItem(
    "nome teste",
    "imagem teste",
    "2",
    "descricao teste",
    "12,25",
    "background teste",
    "color teste"
  )
);

Catalog.addItem(
  new Kit(
    "nome teste",
    ["imagem teste", "imagem teste", "imagem teste"],
    "descricao teste",
    "12,25",
    "background teste",
    "color teste"
  )
);

Catalog.renderItems();
