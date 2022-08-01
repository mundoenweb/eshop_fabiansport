import nProgress from "nprogress"
import store from "redux/store"
import axios from "axios"
import { resetCart } from "redux/actionCreators"
import { stateCart } from "redux/stateInitial"


export const usePayment = async (user, cart, mercadopago, token, router) => {
  const items = []
  const api = process.env.API_NODEJS
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  nProgress.start()

  switch (mercadopago.status) {
    case "approved":
      mercadopago.status = "aprovado"
      break;
    case "pending":
      mercadopago.status = "revisión"
      break;
    default:
      mercadopago.status = "rechazado"
      break;
  }
  const pay = {
    id_cliente: user.id,
    metodo_pago: 'mercadopago',
    status: mercadopago.status,
    payment_id: mercadopago.payment,
    monto_pagado: cart.costTotal,
    merchant_order_id: mercadopago.merchantOrder,
    mayoria_edad: true,
  }
  for (const item of cart.products) {
    items.push({
      codigo: item.code,
      id_producto: item.id,
      id_talla: item.size.id,
      talla: item.size.name,
      cantidad: item.quantity,
      costo: item.costo,
      nombre: item.name,
      color: item.color.name,
      img: item.image,
      linea: item.linea,
      sexo: item.sex,
      categoria: item.categoria,
      marca: item.marca
    })
  }



  axios.post(`${api}/invoices`, pay, options)
    .then(res => {
      const data = res.data.data[0]
      const code = data.codigo
      const mewItems = items.map(i => {
        i.codigo = code
        return i
      })
      axios.post(`${api}/shoppingCart`, mewItems, options)
        .then(() => {
          store.dispatch(resetCart())
          router.push(`/compra/compra_realizada?code=${code}`)
        })
        .catch(err => {
          console.log(err)
        })

    })
    .catch(err => {
      console.log(err)
    })
    .then(() => nProgress.done())
}


