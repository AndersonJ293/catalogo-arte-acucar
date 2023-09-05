class CatalogIndividualItem extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.appendChild(this.build());
    this.appendChild(this.style());
  }

  build() {
    const name = this.getAttribute("name");
    const description = this.getAttribute("description");
    const price = this.getAttribute("price");
    const imageUrl = this.getAttribute("image");
    // const minAmount = this.getAttribute("minAmount");
    // const backgroundImage = this.getAttribute("backgroundImage");
    const color = this.getAttribute("color");
    const buttonColor = this.getAttribute("buttonColor");

    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "item");

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

    const priceContainer = document.createElement("div");
    priceContainer.setAttribute("class", "priceContainer");

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "price");
    itemPrice.innerText = price;
    priceContainer.appendChild(itemPrice);

    const cartButton = document.createElement("button");
    cartButton.setAttribute("class", "cartButton");
    cartButton.style.backgroundColor = buttonColor;

    const cartIcon = document.createElement("i");
    cartIcon.innerHTML = `
    <svg height="20px" width="20px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
       viewBox="0 0 512 512"  xml:space="preserve">
    <style type="text/css">
      .st0{fill:${color};}
    </style>
    <g>
      <path class="st0" d="M198.745,439.889c-5.698-3.854-12.636-6.128-20.013-6.119c-4.921,0-9.659,1-13.943,2.82
        c-6.434,2.721-11.875,7.244-15.737,12.958c-3.862,5.698-6.128,12.636-6.112,20.012c-0.008,4.912,0.993,9.651,2.812,13.934
        c2.728,6.443,7.244,11.884,12.95,15.737c5.706,3.871,12.652,6.128,20.029,6.128c4.912,0,9.643-1.001,13.926-2.82
        c6.442-2.721,11.883-7.253,15.746-12.958c3.854-5.698,6.12-12.645,6.12-20.022c0-4.911-1.009-9.642-2.82-13.934
        C208.975,449.184,204.451,443.743,198.745,439.889z M192.03,475.176c-1.092,2.58-2.936,4.805-5.243,6.359
        c-2.316,1.555-5.028,2.456-8.055,2.464c-2.026-0.008-3.903-0.405-5.615-1.142c-2.572-1.074-4.805-2.927-6.36-5.226
        c-1.555-2.324-2.456-5.044-2.464-8.072c0.009-2.018,0.413-3.887,1.133-5.615c1.083-2.572,2.936-4.796,5.242-6.358
        c2.316-1.555,5.037-2.448,8.064-2.457c2.018,0,3.887,0.406,5.607,1.133c2.58,1.083,4.796,2.927,6.351,5.243
        c1.563,2.315,2.464,5.028,2.464,8.054C193.154,471.587,192.75,473.456,192.03,475.176z"/>
      <path class="st0" d="M216.525,283.808c7.278-2.117,11.462-9.75,9.328-17.036l-35.576-121.796
        c-2.117-7.286-9.742-11.462-17.028-9.337c-7.285,2.126-11.453,9.75-9.336,17.028l35.576,121.812
        C201.622,281.757,209.247,285.941,216.525,283.808z"/>
      <path class="st0" d="M256.98,265.416c2.134,7.286,9.759,11.462,17.035,9.336c7.278-2.125,11.463-9.749,9.329-17.035
        l-32.996-112.972c-2.117-7.285-9.742-11.462-17.027-9.344c-7.286,2.133-11.462,9.758-9.337,17.035L256.98,265.416z"/>
      <path class="st0" d="M314.554,256.625c2.125,7.286,9.758,11.462,17.035,9.337c7.278-2.126,11.462-9.759,9.328-17.036
        l-30.49-104.412c-2.126-7.286-9.75-11.462-17.028-9.328c-7.285,2.117-11.462,9.75-9.336,17.027L314.554,256.625z"/>
      <path class="st0" d="M371.945,247.248c2.134,7.286,9.758,11.462,17.035,9.336c7.278-2.133,11.462-9.749,9.337-17.035
        l-27.828-95.275c-2.117-7.285-9.75-11.453-17.036-9.336c-7.277,2.134-11.453,9.758-9.328,17.035L371.945,247.248z"/>
      <path class="st0" d="M168.726,392.844c-3.871,0-7.492-0.778-10.817-2.176c-4.97-2.1-9.246-5.64-12.239-10.089
        c-2.878-4.276-4.582-9.312-4.714-14.836c0.148-6.592,2.249-12.313,5.937-16.887c1.91-2.357,4.267-4.424,7.128-6.136
        c2.828-1.687,6.161-3.027,10.073-3.87l244.335-39.769c15.961-2.605,28.663-14.81,31.888-30.664l29.887-146.928v-0.016
        c0.347-1.704,0.513-3.44,0.513-5.16c0-5.938-2.035-11.743-5.855-16.424c-4.93-6.02-12.306-9.518-20.088-9.518h-338.32
        L94.928,50.769v0.008c-5.293-17.705-19.814-31.118-37.875-34.988L15.688,6.931C8.691,5.426,1.795,9.892,0.289,16.896
        c-1.496,7.004,2.96,13.901,9.974,15.398l41.348,8.865c8.798,1.885,15.878,8.418,18.458,17.052l75.584,259.634
        c-1.703,0.794-3.349,1.654-4.937,2.605c-8.146,4.855-14.679,11.669-19.061,19.624c-4.194,7.558-6.418,16.126-6.632,24.966h-0.033
        v1.348h0.033c0.165,6.906,1.637,13.529,4.192,19.575c4.094,9.667,10.891,17.846,19.458,23.634
        c8.56,5.796,18.971,9.196,30.052,9.187h137.272c-0.042-1.281-0.194-2.53-0.194-3.82c0-7.567,0.781-14.952,2.174-22.121H168.726z
         M113.998,116.314h330.778h0.009l-29.887,146.935c-1.076,5.293-5.31,9.362-10.635,10.222L170.81,311.478L113.998,116.314z"/>
      <path class="st0" d="M421.604,324.569c-49.924,0-90.396,40.472-90.396,90.396s40.472,90.396,90.396,90.396
        c49.932,0,90.396-40.472,90.396-90.396S471.536,324.569,421.604,324.569z M473.264,430.032h-36.593v36.585h-30.127v-36.585h-36.594
        v-30.134h36.594v-36.594h30.127v36.594h36.593V430.032z"/>
    </g>
    </svg>`;
    cartButton.appendChild(cartIcon);
    priceContainer.appendChild(cartButton);
    info.appendChild(priceContainer);

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
      display: flex;
      width: 450px;
      height: 250px;
      padding: 30px 20px;
      background-color: #fff2ff;
      box-shadow: 1px 1px 4px 1px rgba(236, 116, 180, 0.25);
      border-radius: 10px;
      margin-bottom: 25px;
      margin-right: 25px;
      background-image: url(./assets/images/fundo-docinho2.svg);
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
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      transition: 0.3s ease-in;
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
