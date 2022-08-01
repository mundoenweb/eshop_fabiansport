import { ajax, valideteResponse } from "./Ajax"
import NProgress from 'nprogress'
import { toNoneModal } from "./useModal"
import { validateForm } from "./useValidetForm"

const api = process.env.API
let response = null

// modifica el status de la venta
export const updateStatusVenta = async (e, state, setState, modal) => {
  e.preventDefault()
  if (!validateForm(e.target)) return
  NProgress.start()

  const formData = new FormData();
  const id = parseInt(e.target.idVenta.value, 10),
    delivery = e.target.status.value,
    guia = e.target.guia.value,
    slug = { id, delivery, guia }

  formData.append('json', JSON.stringify(slug))

  response = await ajax(`${api}/asignarInfoEntrega`, "POST", formData)
  if (!valideteResponse(response)) return

  setState(
    state.map(p => {
      if (p.id === id) return { ...p, delivery, guia, status: true }
      return p
    })
  )
  toNoneModal(modal)
  alert("estatus actualizado correctamente")
  NProgress.done()
}

// actualiza el descuento del producto
export const updateDescount = async (e, products, setProducts, modalDescount) => {
  e.preventDefault()
  if (!validateForm(e.target)) return
  NProgress.start()

  const id = parseInt(e.target.idProduct.value, 10)
  const descount = parseInt(e.target.descount.value, 10)
  const data = {
    producto: { id, descuento: descount }
  }
  const formData = new FormData();
  formData.append('json', JSON.stringify(data))

  response = await ajax(`${api}/actualizarDescuento`, "POST", formData)

  if (!valideteResponse(response)) return toNoneModal(modalDescount)


  toNoneModal(modalDescount)
  alert("descuento aplicado exitosamente")
  setProducts(
    products.map(p => {
      if (p.id === id) {
        return {
          ...p,
          descuento: descount
        }
      }
      return p
    })
  )
  NProgress.done()
}

