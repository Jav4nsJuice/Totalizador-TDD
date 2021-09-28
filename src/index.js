import calcularTotal from "./App";

const quantity = document.querySelector("#quantity-number");
const price = document.querySelector("#price-number");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(quantity.value);
  const precio = Number.parseInt(price.value);

  div.innerHTML = "<p>" + calcularTotal(cantidad, precio) + "</p>";
});
