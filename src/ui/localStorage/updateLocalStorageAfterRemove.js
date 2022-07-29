export const updateLocalStorageAfterRemove = (product) => {
  // const total = product.price;

  const newTotal = JSON.parse(localStorage.getItem("totalSum")) - product.price;
  localStorage.setItem("totalSum", JSON.stringify(newTotal));
};
