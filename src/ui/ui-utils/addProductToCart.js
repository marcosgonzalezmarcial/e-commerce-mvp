import { removeItems, showBag } from "../../..";
import { fetchProductById } from "../../api/fetchProductById";
import { addProductToLocalStorage } from "../localStorage/addProductToLocalStorage";
import { updateLocalStorageTotal } from "../localStorage/updateLocalStorageTotal";
import { updateBadgeLabel } from "./updateBadgeLabel";

export const addProductToCart = async (id) => {
  const product = await fetchProductById(id);
  // addProductToLocalStorage(product);
  // updateLocalStorageTotal(product);

  debugger;
  let text = "";

  let shoppingBagProduct = "";

  const totalItems = JSON.parse(localStorage.getItem("products")) || [];

  const itemAlreadyExists = totalItems.some(
    (item) => item.name === product.name
  );

  if (itemAlreadyExists) {
    addProductToLocalStorage(product);
    updateLocalStorageTotal(product);
    const filteredItems = totalItems.filter(
      (item) => item.name === product.name
    );

    const qty = document.querySelector(".item-description-top-right");
    if (!!qty) {
      qty.children[1].textContent = `Cant: ${filteredItems.length}`;
    }
    // text += `<p>Cant: ${filteredItems.length}</p>`;
  } else {
    addProductToLocalStorage(product);
    updateLocalStorageTotal(product);
    shoppingBagProduct = `
        <div class="shopping-bag-content-container">
        <div class="shopping-bag-content-container-img-container">
        <img
  src=${product.imgUrl}
  alt="product 1"
  />
  </div>
  <div
  class="shopping-bag-content-container-item-description-container"
  >
  <div class="item-description-top">
  <div class="item-description-top-right">
  <p>${product.name}</p>
  <p>Cant: 1</p>
  <p>Talla: M</p>
  <p>Negro</p>
            </div>
            <div class="item-description-top-left">
            <p>&euro;${product.price}</p>
            </div>
            </div>
            <div class="item-description-bottom">
            <p class="remove-item-btn">eliminar</p>
            </div>
            </div>
            </div>
            `;
    updateShoppingBag();
  }

  const shoppingBagContent = document.querySelector(".shopping-bag-content");

  // shoppingBagProduct = `
  // <div class="shopping-bag-content-container">
  // <div class="shopping-bag-content-container-img-container">
  // <img
  // src=${product.imgUrl}
  // alt="product 1"
  // />
  // </div>
  // <div
  // class="shopping-bag-content-container-item-description-container"
  // >
  // <div class="item-description-top">
  // <div class="item-description-top-right">
  // <p>${product.name}</p>
  // ${text}
  // <p>Talla: M</p>
  // <p>Negro</p>
  //           </div>
  //           <div class="item-description-top-left">
  //           <p>&euro;${product.price}</p>
  //           </div>
  //           </div>
  //           <div class="item-description-bottom">
  //           <p class="remove-item-btn">eliminar</p>
  //           </div>
  //           </div>
  //           </div>
  //           `;

  function updateShoppingBag() {
    const bagTitle = document.querySelector(".bag-title");
    const bagSubtotal = document.querySelector(".shopping-bag-subtotal");
    bagTitle.innerHTML = `Bolsa <span>(${
      JSON.parse(localStorage.getItem("products")).length
    })</span>`;

    const newTotal = JSON.parse(localStorage.getItem("totalSum"));

    bagSubtotal.textContent = `€${newTotal.toFixed(2)}`;
  }

  //update badge qty when product is added
  updateBadgeLabel();
  updateShoppingBag();
  shoppingBagContent.innerHTML += shoppingBagProduct;
  removeItems();
  showBag();
};
