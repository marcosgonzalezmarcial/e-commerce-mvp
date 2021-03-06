export const Products = () => {
  let Products = document.createElement("section");
  Products.classList.add("section");
  Products.classList.add("product");

  Products.innerHTML = `
    <div class="container-fluid">
    <h2 class="h2 section-title">Productos de la semana</h2>
    <ul class="filter-list">
      <li>
        <button class="filter-btn active">Más vendidos</button>
      </li>
      <li>
        <button class="filter-btn">Hot collection</button>
      </li>
      <li>
        <button class="filter-btn">Tendencias</button>
      </li>
      <li>
        <button class="filter-btn">Lo último</button>
      </li>
    </ul>
    <ul class="product-list">
      
    </ul>
    <button class="btn btn-outline">Ver todos los productos</button>
  </div>
        `;

  return Products;
};
