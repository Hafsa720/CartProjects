export const getTotals = (cart) => {
  console.log(cart)
  let totalAmount = 0
  let totalCost = 0
  for (let { amount, price } of cart.values()) {
    totalCost += amount
    totalCost = amount * price
  }
  return { totalAmount, totalCost }
}
