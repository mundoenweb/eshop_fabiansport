import { addToLike, startSesion, updateDeliveryData, updateInvoiceDetailData } from '../../redux/actionCreators'
import NProgress from 'nprogress'
import { validateForm } from './useValidetForm'
import store from 'redux/store'
import axios from 'axios'

const api = process.env.API_NODEJS
let response = null


//inicia sesion por medio de correo electronico
export const useStartSesionEmail = (e, err, router) => {
  e.preventDefault()
  NProgress.start()

  const form = e.target
  const formData = new FormData(form)
  let href = router.query.path

  // validando formulario
  if (!err.current.classList.contains("none")) {
    err.current.innerText = ""
    err.current.classList.toggle("none")
  }
  if (form.email.value !== "rommer") {
    if (!validateForm(form)) return NProgress.done()
  }

  // realizando peticion de logged
  axios.post(`${api}/logged`, formData)
    .then(res => {
      const data = res.data.data

      compareLikesServer(data.user.id, data.token)
      getDataDelivey(data.user.id, data.token)
      getInvoiceDetailData(data.user.id, data.token)

      store.dispatch(startSesion(data))

      if (data.user.role === 1) {
        router.push(href || "/app/admin/productos")
        return
      }
      router.push(href || "/productos/todos")
    })
    .catch((error) => {
      const msgErro = error.response.data.message
      err.current.innerText = msgErro
      if (err.current.classList.contains("none")) err.current.classList.toggle("none")
    })
    .then(() => NProgress.done())

}

//registra un nuevo cliente mediante correo electronico en la db y actualiza el estado global
export const useRegisClient = async (e, error, router) => {
  e.preventDefault()
  const form = e.target
  const formData = new FormData()
  let href = router.query.path

  if (!validateForm(form)) return


  if (form.password.value !== form.passwordTwo.value) {
    error.current.innerText = "Las contraseñas no son iguales"
    if (error.current.classList.contains("none")) error.current.classList.toggle("none")
    return
  }

  formData.append('email', form.email.value)
  formData.append('password', form.password.value)

  NProgress.start()

  axios.post(`${api}/users`, formData)
    .then(response => {

      const data = response.data.data

      compareLikesServer(data.user.id, data.token)
      store.dispatch(startSesion(data))
      
      router.push(href || "/productos/todos")
    })
    .catch(err => {
      const error = err.response.data
      console.log(error)
      if (error.errno === 1062)
        alert(`el correo ${form.email.value} ya existe`)
    }
    )
    .then(() => { NProgress.done() })
}

const compareLikesServer = (idUser, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }
  axios.get(`${api}/likes/${idUser}`, options)
  .then(response => {
    const likesDB = response.data.data
    const likesStore = store.getState().likeReducer.products

    if (likesDB.length) {
      let likes

      if (likesStore.length) {
        likes = likesStore.filter(like => {
          const same = likesDB.find(likeDB => likeDB.id_producto == like.id_producto)
          if (!same) return like
        })
      } else likes = likesStore

      for (const like of likes) {
        if (!like.id_usuario) like.id_usuario = idUser
        axios.post(`${api}/likes`, like, options)
          .then(resl => console.log(resl))
          .catch(err => console.log(err))
      }

      for (const like of likesDB) store.dispatch(addToLike(like))
    } else {
      for (const like of likesStore) {
        if (!like.id_usuario) like.id_usuario = idUser
        axios.post(`${api}/likes`, like, options)
          .then(resl => console.log(resl))
          .catch(err => console.log(err))
      }
    }
  })
  .catch(err => console.log(err))
}
const getDataDelivey = (idUser, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }
  axios.get(`${api}/defaultDelivery/${idUser}`, options)
  .then(response => {
    const data = response.data.data[0]
    store.dispatch(updateDeliveryData(data))
  })
  .catch(err => console.log(err))
}
const getInvoiceDetailData = (idUser, token) => {
  const options = {
    headers: { Authorization: `Bearer ${token}` }
  }
  axios.get(`${api}/defaultInvoiceData/${idUser}`, options)
  .then(response => {
    const data = response.data.data[0]
    store.dispatch(updateInvoiceDetailData(data))
  })
  .catch(err => console.log(err))
}
