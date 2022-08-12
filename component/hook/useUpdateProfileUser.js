import store from '../../redux/store'
import axios from 'axios'
import { validateForm } from './useValidetForm'
import { handleBodyScroll } from '@/utils/handleBodyScroll'
import nProgress from 'nprogress'
import {
  updateProfileUser,
  updateDeliveryData,
  updateInvoiceDetailData
} from "../../redux/actionCreators"

const api = process.env.API_NODEJS

// actualiza los datos del usuario en la base de datos y en el estado global
// profileUser es la data actual del estado global
export const useUpdateProfileUser = async (
  e, router, profileUser, token,
  dataDeliver, dataInvoice, formulary
) => {
  e.preventDefault()
  const form = formulary || e.target

  if (!validateForm(form)) return nProgress.done()
  nProgress.start()

  const idUser = profileUser.id
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const profile = {
    email: profileUser.email,
    name: form.nameDelivery.value,
    is_adult: form.adult.checked
  }

  const dataDelivery = {
    id_usuario: profileUser.id,
    nombre: form.nameDelivery.value,
    departamento: form.departamentDelivery.value,
    provincia: form.provinceDelivery.value,
    distrito: form.districtDelivery.value,
    direccion: form.addressDelivery.value,
    referencia: form.refDelivery.value,
    telefono: form.phoneDelivery.value
  }

  const invoiceDetailData = {
    id_usuario: profileUser.id,
    correo: profileUser.email,
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

  await axios.put(`${api}/users/${idUser}`, profile, options)
    .then(res => {
      const data = res.data.data[0]
      store.dispatch(updateProfileUser(data))
    })
    .catch(err => console.log(err))

  // evalua si crea o actualizar
  // true actualiza 
  if (dataDeliver.id && dataInvoice.id) {
    console.log("actualizando datos")
    delete dataDelivery.id_usuario
    delete invoiceDetailData.id_usuario

    await axios.put(`${api}/defaultDelivery/${dataDeliver.id}`, dataDelivery, options)
      .then(res => {
        const data = res.data.data[0]
        console.log(data)
        store.dispatch(updateDeliveryData(data))
      })
      .catch(err => console.log(err))

    await axios.put(`${api}/defaultInvoiceData/${dataInvoice.id}`, invoiceDetailData, options)
      .then(res => {
        const data = res.data.data[0]
        console.log(data)
        store.dispatch(updateInvoiceDetailData(data))
      })
      .catch(err => console.log(err))

  } else {
    console.log("creando datos")
    await axios.post(`${api}/defaultDelivery`, dataDelivery, options)
      .then(res => {
        const data = res.data.data[0]
        store.dispatch(updateDeliveryData(data))
      })
      .catch(err => console.log(err))

    await axios.post(`${api}/defaultInvoiceData`, invoiceDetailData, options)
      .then(res => {
        const data = res.data.data[0]
        store.dispatch(updateInvoiceDetailData(data))
      })
      .catch(err => console.log(err))
  }



  handleBodyScroll()
  nProgress.done()
  // alert('datos actualizados correctamentea')
  // store.dispatch(updateProfileUser(profile))

}

// reutiliza o no, la dirección de entrega como dirección de facturación.
// Ademas de ocular o mostrar los campos conrespondientes
export const useAddressOnInvoice = e => {
  if (e.target.checked) {
    departamentBilling.value = departamentDelivery.value
    provinceBilling.value = provinceDelivery.value
    districtBilling.value = districtDelivery.value
    addressBilling.value = addressDelivery.value
    phoneBilling.value = phoneDelivery.value

    departamentBilling.readOnly  = true
    provinceBilling.readOnly  = true
    districtBilling.readOnly  = true
    addressBilling.readOnly  = true
    phoneBilling.readOnly  = true

  } else {

    departamentBilling.value = ""
    provinceBilling.value = ""
    districtBilling.value = ""
    addressBilling.value = ""
    phoneBilling.value = ""

    departamentBilling.readOnly = false
    provinceBilling.readOnly = false
    districtBilling.readOnly = false
    addressBilling.readOnly = false
    phoneBilling.readOnly = false
  }

}
