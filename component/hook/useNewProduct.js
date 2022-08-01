import { ajax, valideteResponse } from "./Ajax"
import { validateForm } from "./useValidetForm"
import NProgress from 'nprogress'
import store from "redux/store"
import {
  resetObjectNewProduct,
  updateCode,
  updateCost,
  updateName,
  updateDescount,
  updateFeatures,
  updateDescription,
  updateCodeDad
} from "redux/actionCreators"
import { stateProductNew } from "redux/stateInitial"


const api = process.env.API
let response = null

export const codeUpdate = evt => store.dispatch(updateCode(evt.target.value))
export const nameUpdate = evt => store.dispatch(updateName(evt.target.value))
export const costUpdate = evt => store.dispatch(updateCost(evt.target.value))
export const descountUpdate = evt => store.dispatch(updateDescount(evt.target.value))
export const featuresUpdate = evt => store.dispatch(updateFeatures(evt.target.value))
export const descriptionUpdate = evt => store.dispatch(updateDescription(evt.target.value))
export const codeDadUpdate = evt => {
  store.dispatch(updateCode(evt.target.value))
  store.dispatch(updateCodeDad(evt.target.value))
}

export const useNewProduct = async (evt, articulo, router) => {
  evt.preventDefault()
  const formulary = evt.target
  const form = new FormData()
  const btnSubmit = formulary[formulary.length - 1]
  NProgress.start()
  btnSubmit.disabled = true

  if (!validateForm(formulary)) {
    NProgress.done()
    btnSubmit.disabled = false
    return
  }

  if (!articulo.img.length) {
    NProgress.done()
    btnSubmit.disabled = false
    alert("El producto debe tener como minimo una imagen")
    return
  }

  for (const image of articulo.img) {
    if (typeof (image) === "string") continue
    form.append(`0[]`, image.file)
  }
  // descomentar las siguientes lines cuando finalicen las pruebas
  delete articulo.img

  form.append('json', JSON.stringify(articulo))
  response = await ajax(`${api}/crearProducto`, "POST", form)

  
  if (!valideteResponse(response)) return NProgress.done()

  alert("Registro exitoso")

  NProgress.done()
  router.push("/app/admin/productos")
  store.dispatch(resetObjectNewProduct(stateProductNew))
}

export const useUpdateProduct = async (evt, articulo, router) => {
  evt.preventDefault()
  const formulary = evt.target
  const form = new FormData()
  const btnSubmit = formulary[formulary.length - 1]
  NProgress.start()
  btnSubmit.disabled = true

  if (!validateForm(formulary)) {
    NProgress.done()
    btnSubmit.disabled = false
    return
  }

  if (!articulo.img.length) {
    NProgress.done()
    btnSubmit.disabled = false
    alert("El producto debe tener como minimo una imagen")
    return
  }

  for (const image of articulo.img) {
    if (typeof (image) === "string") continue
    form.append(`0[]`, image.file)
  }
  // descomentar las siguientes lines cuando finalicen las pruebas
  // delete articulo.img

  form.append('json', JSON.stringify(articulo))
  response = await ajax(`${api}/actualizarProducto`, "POST", form)

  
  if (!valideteResponse(response)) return NProgress.done()
  
  alert("Actualización exitosa")

  store.dispatch(resetObjectNewProduct(stateProductNew))
  router.push("/app/admin/productos")
}