
import { validateForm } from './useValidetForm'
import axios from 'axios'
import nProgress from 'nprogress'

const api = process.env.API_NODEJS

export const useCreateDataDelivery = async (
  e, router, profileUser, token,
  formulary, code) => {

  e.preventDefault()
  const form = formulary || e.target
  const idUser = profileUser.id
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  if (!validateForm(formulary)) return
  if (!form.adult.checked) {
    alert("debe selecionar que es mayor de edad para poder continuar")
    return
  }
  nProgress.start()
  const dataDelivery = {
    codigo: code,
    nombre: form.nameDelivery.value,
    departamento: form.departamentDelivery.value,
    provincia: form.provinceDelivery.value,
    distrito: form.districtDelivery.value,
    direccion: form.addressDelivery.value,
    referencia: form.refDelivery.value,
    telefono: form.phoneDelivery.value
  }
  const dataInvoice = {
    codigo: code,
    correo: form.emailBulling.value,
    razon_social: form.nameCompany.value,
    departamento: form.departamentBilling.value,
    provincia: form.provinceBilling.value,
    distrito: form.districtBilling.value,
    direccion: form.addressBilling.value,
    telefono: form.phoneBilling.value,
    tipo_documento: form.typeDocument.value,
    tipo_contribuyente: form.typeContribuyente.value,
    identificacion: form.dni.value

  }

  axios.post(`${api}/invoiceDelivery`, dataDelivery, options)
  axios.post(`${api}/invoiceData`, dataInvoice, options)

  nProgress.done()
  router.push(`/compra/finalizado?code=${code}`)
}
