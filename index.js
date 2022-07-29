import { App } from "./src/App";
import { paintBag } from "./src/components/shoppingBag/utils/paintBag";
import { updateLocalStorageAfterRemove } from "./src/ui/localStorage/updateLocalStorageAfterRemove";
import { paintProducts } from "./src/ui/ui-utils/paintProducts";
import { updateBadgeLabel } from "./src/ui/ui-utils/updateBadgeLabel";

document.querySelector("body").appendChild(App());

/* DOM Elements variables */
const actionsButtons = [
  ...document.querySelectorAll("button.header-action-btn"),
];
const categoryButtons = [...document.querySelectorAll(".filter-btn")];
const shoppingBagEl = document.querySelector(".shopping-bag-container");

/*****************************************
 ******** shopping-bag toggle ************/

actionsButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // removing active class from all the buttons except the clicked one
    actionsButtons.forEach(
      (btn) => this !== btn && btn.classList.remove("active")
    );
    this.classList.toggle("active");
  });

  btn.children[1].innerText === "Carrito"
    ? btn.addEventListener("click", toggleBag)
    : btn.addEventListener("click", hideBag);
});

export function toggleBag() {
  document.querySelector(".arrow").classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle("stop-scroll");
}

export function showBag() {
  if (shoppingBagEl.classList.contains("show-bag")) return;
  document.querySelector(".arrow").classList.toggle("arrow-up");
  shoppingBagEl.classList.toggle("show-bag");
  // avoid page scrolling on the back when the bag is open
  document.body.classList.toggle("stop-scroll");
}

export function hideBag() {
  document.querySelector(".arrow").classList.remove("arrow-up");
  shoppingBagEl.classList.remove("show-bag");

  // avoid page scrolling on the back when the bag is open
  document.body.classList.remove("stop-scroll");
}
/**** end of shopping-bag toggle ****/

/**** fetching products by category in Products section ****/
categoryButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    // removing active class from all the buttons except the clicked one
    categoryButtons.forEach(
      (btn) => this !== btn && btn.classList.remove("active")
    );
    this.classList.toggle("active");
    paintProducts(btn.firstChild.data);
  });
});

/**** end fetching products by category in Products section ****/

/************************/

//update badge qty when product is added
updateBadgeLabel();

// remove otem from bag l
export function removeItems() {
  const removeItemFromBagBtns = [
    ...document.querySelectorAll(".remove-item-btn"),
  ];

  removeItemFromBagBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productName =
        btn.parentElement.previousElementSibling.children[0].children[0]
          .innerText;

      const productsFromLocalStorage = JSON.parse(
        localStorage.getItem("products")
      );

      const filteredProduct = productsFromLocalStorage.filter(
        (item) => item.name === productName
      );

      removeItemFromBag(filteredProduct[0]);
    });
  });
}

export function removeItemFromBag(product) {
  const productsFromLocalStorage =
    JSON.parse(localStorage.getItem("products")) || [];

  // console.log(productsFromLocalStorage);
  const apdatedProductsArrFromLocalStorage = productsFromLocalStorage.filter(
    (item) => item.name !== product.name
  );

  localStorage.setItem(
    "products",
    JSON.stringify(apdatedProductsArrFromLocalStorage)
  );
  updateLocalStorageAfterRemove(product);
  paintBag(apdatedProductsArrFromLocalStorage);
  removeItems();
  // updateBadgeLabel();
  closeBag();
}
removeItems();
// close bag logic
export function closeBag() {
  const shoppingBagCloseBtn = document.querySelector(".bag-close-btn");
  shoppingBagCloseBtn.addEventListener("click", hideBag);
}
closeBag();
