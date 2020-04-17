"use strict"
const calculateTotalPrice = function (allProdcuts, productName) {
  let totalPrice
  for (const product of allProdcuts) {
    totalPrice = (product.name === productName) ? (product.price * product.quantity) : totalPrice
  }
  return totalPrice
}