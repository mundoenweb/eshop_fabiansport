// toma un numero y devuelce un arrar de numerico segun cantidad del unmero inicial
export const useQuantityStock = (stock, quantity = 0) => {
  const qty = []
  for (let i = 1; i <= stock; i++) {
    if (i !== quantity) qty.push(i)
  }
  return qty
}
