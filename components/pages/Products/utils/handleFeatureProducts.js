import axios from "axios"

// realiza una conulta de los productos más destacados
export const handleFeatureProducts = async (setProducts, router) => {
  const api = process.env.API
  const slugFilter = {
    descuento: 0,
    pageActual: 1,
    stock: 0,
    relevancia: 1,
    params: []
  }

  let data = new FormData()
  data.append('json', JSON.stringify(slugFilter))

  axios.post(`${api}/productosFiltro`, data)
  .then(response => {
    setProducts(response.data.productos)
  })
  .catch(err => {
    console.log(err)
    router.push('/productos/todos')
  })
}
