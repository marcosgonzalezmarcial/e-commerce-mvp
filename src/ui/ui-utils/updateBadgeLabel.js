export function updateBadgeLabel() {
  const productsFromLocalStorage =
    JSON.parse(localStorage.getItem("products")) || [];
  const bagBadge = document.querySelector(".btn-badge.green");

  bagBadge.innerHTML = productsFromLocalStorage.length;
}
