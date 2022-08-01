export const useQuantityProductsCart = products => {
  let quantity = 0
  for (const p of products) {
    quantity += p.quantity
  }
  return quantity
}
