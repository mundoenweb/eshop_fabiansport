import { useQuantityStock } from "./useQuantityStock"

export const useCleanObjectArticle = (articulo) => {

  articulo.modelos = articulo.modelos.map(modelo => {
    return {
      ...modelo,
      size: modelo.size.filter(size => {
        if (size.quantity > 0) {
          size.quantity = useQuantityStock(size.quantity)
          return size
        }
      }),
    }
  }) 

  articulo.modelos = articulo.modelos.filter(modelo => modelo.size.length > 0) 

  return articulo
}
