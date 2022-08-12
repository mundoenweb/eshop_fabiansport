import { ajax, valideteResponse } from "./Ajax"
import axios from "axios"
import NProgress from 'nprogress'
import { none } from "./useScripts"
import store from "redux/store"

const api = process.env.API
const apiNode = process.env.API_NODEJS
let response = null

// realiza una consulta según los parametros del filtro personalizado
export const useQueryProductsBoard = async (slugFilter, pages, setPages, setState) => {
  NProgress.start()
  if (!slugFilter.params.length && !slugFilter.descuento && !slugFilter.stock) {
    let response = await ajax(`${api}/productosAdmin?page=${pages.pageCurrent}`)
    // response = await ajax(`${api}/api/productos?page=${pages.pageCurrent}`)
    if (!valideteResponse(response)) return
    setState(response.data.productos)
    setPages({
      pages: response.data.totalPage,
      pageCurrent: response.data.pageActual
    })
    NProgress.done()
    return
  }

  const json = new FormData()
  json.append('json', JSON.stringify(slugFilter))

  let response = await ajax(`${api}/productosAdminFiltro`, "POST", json)

  if (!valideteResponse(response)) return
  setState(response.data.productos)
  setPages({
    pages: response.data.totalPage,
    pageCurrent: response.data.pageActual
  })
  NProgress.done()
}

// actualiza el estado de los parametros de consulta
export const useSearchBoard = (e, setSlugFilter, modal) => {
  e.preventDefault()
  NProgress.start();
  let slug = { descuento: 0, pageActual: 1, stock: 0, relevancia: 0, params: [] }
  for (const element of e.target) {
    if (element.value) {
      switch (element.name) {
        case 'descuento':
          if (element.checked) slug.descuento = 1
          break;
        case 'stock':
          if (element.checked) slug.stock = 1
          break;
        default:
          const p = {}
          p.campo = element.name
          p.valor = parseInt(element.value, 10)
          slug.params.push(p)
          break;
      }
    }
  }

  if (!slug.params.length && !slug.descuento && !slug.stock) {
    NProgress.done()
    return alert("Debe seleccionar una opcion para poder buscar")
  }
  setSlugFilter(slug)
  none(modal.current)
  NProgress.done()
}

// Realiza una consulta por nombre o codigo
export const useSearchCodeName = async (e, setState, setPages, refFormFilter) => {
  e.preventDefault()
  let input = e.target.searchBoard, response
  if (!input.value) {
    alert("debe escribir un codigo o nombre para filtrar")
    return
  }

  // NProgress.start()
  const formData = new FormData()
  formData.append('json', JSON.stringify({ value: input.value }))
  response = await ajax(`${api}/buscador`, "POST", formData)

  if (!valideteResponse(response)) return
  if (response.data.mensaje) return alert(`${response.data.mensaje}`)

  setState(response.data.productos)
  setPages({ pages: 1, pageCurrent: 1 })
  input.value = ""
  refFormFilter.reset()
  NProgress.done()
}

// consulta las compras
export const useConsultShopping = async (idUser, token, setShopping) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }
  NProgress.start()
  axios(`${apiNode}/invoices/user/${idUser}`, options)
    .then(res => {
      let invoices = res.data.data

      if (invoices.length) {
        for (const invoice of invoices) {
          axios(`${apiNode}/shoppingCart/${invoice.codigo}`, options)
            .then(items => {
              invoice.products = items.data.data
            })
          
            setTimeout(() => {
              setShopping(res.data.data)
              console.log(invoices)
            }, 2000)
          return
        }
      }
      setShopping([])
    })
    .catch(err => console.log(err))
    .then(() => NProgress.done())
}

// consulta las ventas
export const useConsultSales = async (page, setSales, setPages) => {
  NProgress.start()
  const resp = await ajax(`${process.env.API}/facturasAdmin?page=${page}`)
  if (!valideteResponse(resp)) return NProgress.done()

  setSales(resp.data.facturas)
  setPages({ pages: resp.data.totalPage, pageCurrent: resp.data.pageActual })
  scroll(0, 0)
  NProgress.done()
}

export const useRemoveFilterPubli = (setSlugFilter, refFormFilter) => {
  refFormFilter.reset()
  setSlugFilter({ descuento: 0, pageActual: 1, stock: 0, relevancia: 0, params: [] })
}


// realiza una conulta de los productos más destacados
export const destacados = async (setProductosDestacados) => {
  const slugFilter = { descuento: 0, pageActual: 1, stock: 0, relevancia: 1, params: [] }
  let data = new FormData()
  data.append('json', JSON.stringify(slugFilter))
  response = await ajax(`${api}/productosFiltro`, "POST", data)
  setProductosDestacados(response.data.productos)
}
