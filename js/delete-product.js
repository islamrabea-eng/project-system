import { handleProducts } from "./handle-products.js";

function deleteProducts(products, productId) {
  let filterProducts = products.filter((ele) => ele.id !== productId) || [];
  handleProducts(filterProducts);
  localStorage.setItem("products", JSON.stringify(filterProducts));
}

export { deleteProducts };
