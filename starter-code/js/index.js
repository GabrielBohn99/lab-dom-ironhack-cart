//Produto
const product = document.querySelectorAll(".product");
//Preco
// const price = document.querySelectorAll(".price span");
//Unidade
// const unit = document.querySelector('input[type="number"]').value;
//Subtotal
// let subtotal = document.querySelectorAll(".subtotal");
//Total
// let total = document.querySelector("#total-value span");
//Remove Button
let removeBtn = document.querySelectorAll(".btn-remove");
//Table
const table = document.querySelector("tbody");
//Create Button
const createBtn = document.querySelector("#create");
// unit.addEventListener("change", function(){
// }, false);
// ITERATION 1
// ITERATION 2
function updateSubtotal() {
  let price = document.querySelectorAll(".price span");
  let subtotal = document.querySelectorAll(".subtotal");
  let acc = 0;
  [...price].map(($price, idx) => {
    let unit = document.querySelectorAll('input[type="number"]');
    unit = [...unit][idx].value;
    let parcial = Number($price.innerHTML) * unit;
    [...subtotal][idx].innerHTML = parcial;
    acc += parcial;
  });
  return acc;
}
function calculateAll() {
  // ITERATION 3
  //Total
  let total = document.querySelector("#total-value span");
  let totalSum = updateSubtotal();
  total.innerHTML = totalSum;
}
//EVENTS
//calculate all
window.addEventListener("load", () => {
  const $calculateTrigger = document.getElementById("calculate");
  $calculateTrigger.addEventListener("click", calculateAll);
});
//Remove button
[...removeBtn].map(item =>
  item.addEventListener(
    "click",
    function(e) {
      productRemoveListener(e);
    },
    false
  )
);
//Create product
createBtn.addEventListener("click", function(){
  createProduct();
}, false)
// ITERATION 4
function productRemoveListener(event) {
  // ...
  let currentProd = event.target.parentNode.parentNode;
  table.removeChild(currentProd);
  calculateAll();
}
// ITERATION 5
function createProduct() {
  // ...
  
  let productName = document.querySelector(".create-product input[type='text']");
  let productPrice = document.querySelector(".create-product input[type='number']");
  
  table.innerHTML += `<tr class="product">
  <td class="name">
  <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
  <button class="btn btn-remove">Remove</button>
  </td>
  </tr>`
  removeBtn = document.querySelectorAll(".btn-remove");
  [...removeBtn].map(item =>
    item.addEventListener(
      "click",
      function(e) {
        productRemoveListener(e);
      },
      false
    )
  );
  productName.value = "";
  productPrice.value = 0;
}