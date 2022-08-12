import { ajax, valideteResponse } from "./Ajax"
import { validateForm } from "./useValidetForm"

export const useRecoverEmail = async e => {
  e.preventDefault()
  const form = e.target
  if (!validateForm(form)) return

  const email = { email: form.email.value }
  const formData = new FormData()
  formData.append('json', JSON.stringify(email))

  const response = await ajax(`${process.env.API}/recuperarClave`, "POST", formData)
  if (!valideteResponse(response)) return

  form.reset()
  alert(`Favor revise su correo y siga las instrucciones`)
}

export const handleRecoverEmail_2 = async (e, router) => {
  e.preventDefault()
  const form = e.target

  if (!validateForm(form)) return

  if (form.password.value !== form.passwordTwo.value) {
    alert("las contraseñas deben ser iguales")
    return
  }

  const data = {
    clave: form.password.value,
    token: router.query.token,
    email: router.query.email
  }

  const formData = new FormData()
  formData.append('json', JSON.stringify(data))

  const response = await ajax(`${process.env.API}/actualizarClave`, "POST", formData)
  if (!valideteResponse(response)) return

  // return
  alert("clave actualizada correctamente")
  router.push("/login")
}
