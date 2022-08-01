import nProgress from "nprogress"
import { resetCart } from "../../redux/actionCreators"
import { stateCart } from "../../redux/stateInitial"
import store from "../../redux/store"
import { ajax, valideteResponse } from "./Ajax"

export const useProcessOrderAdmin = async (products, costTotal, router) => {


  const order = {
    products,
    pay: {
      typePayment: 'contado',
      titular: 'clientes tienda',
      date: new Date().toLocaleDateString(),
      refPayment: "contado",
      mountUSD: 0,
      mount: costTotal,
      idUser: 1,
      email: "administrador",
      name: "administrador",
      isAdult: true
    },
  }

  for (const product of order.products) {
    let urlArr = product.image.split("/")
    product.image = urlArr[urlArr.length - 1]
  }

  nProgress.start()
  const formData = new FormData()
  formData.append('json', JSON.stringify(order))
  const response = await ajax(`${process.env.API}/crearFactura`, "POST", formData)
  if (!valideteResponse(response)) return


  const dateUpdateStatus = new FormData()
  const slug = { id: response.data.idVenta, delivery: "Tienda", guia: "N/A" }

  dateUpdateStatus.append('json', JSON.stringify(slug))
  await ajax(`${process.env.API}/asignarInfoEntrega`, "POST", dateUpdateStatus)

  nProgress.done()
  store.dispatch(resetCart(stateCart))
  alert("Venta realizada exitosamente")
  router.push('/app/admin/ventas')
}
