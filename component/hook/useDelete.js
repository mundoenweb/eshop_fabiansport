import { ajax, valideteResponse } from "./Ajax"
import NProgress from 'nprogress'

const api = process.env.API
let response = null

export const useDeleteProduct = async (id, name, state, setState) => {
  const resp = confirm(`¿Seguro que desea eliminar el producto: ${name}?`)
  if (!resp) return
  NProgress.start()
  response = await ajax(`${api}/eliminarProducto/${id}`, "POST")
  if (!valideteResponse(response)) return NProgress.done()

  setState(state.filter(p => p.id !== id))
  alert("producto eliminado correctamente")
  NProgress.done()
}
