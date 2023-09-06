import { IndividualItem } from "./models/IndividualItem.js";
import { Catalog } from "./models/Catalog.js";
import { Kit } from "./models/Kit.js";

Catalog.addItem(
  new IndividualItem(
    "Bombom",
    "assets/images/doce1.svg",
    2,
    "doce muito bom",
    "R$ 12,50",
    "option 4"
  )
);
Catalog.addItem(
  new IndividualItem(
    "Bombom",
    "assets/images/doce1.svg",
    2,
    "doce muito bom",
    "R$ 12,50",
    "option 2"
  )
);

Catalog.addItem(
  new IndividualItem(
    "Bombom",
    "assets/images/doce1.svg",
    2,
    "doce muito bom",
    "R$ 12,50",
    "option 3"
  )
);
