import { useBodyScroll } from "./useScripts"

/* Este archivo depende de las fuciones
   correcto(), error(), alertForm(), formatNum(), formatMoneda
   que son funciones externas 
*/
const expMail = /\w+@\w+\.+[a-z]/,
  expTexto = /^[a-zA-Zñ ]+$/,
  expNum = /^[1-9-.,0]+$/

// Limpia el exceso de espacios en blanco de un input
function cleanSpace(value) {
  let string = ""
  value = value.split(' ')
  for (const text of value) {
    if (text == '') continue
    string += ` ${text}`
  }
  return string.trim()
}

/* Validacion del Formulario */
export function validateForm(f) {
  for (let i = 0; i <= f.length -1; i++) {
    const element = f[i], value = f[i].value

    if (element.classList.contains('ignore')) continue
    if (element.className === 'button') continue
    if (element.type === "checkbox") continue
    if (element.type === "submit") continue

    if (element.type != 'select-one' && element.type != 'file' ) element.value = cleanSpace(value).toLowerCase()
    if (!value && element.classList.contains('required') && element.type != "file") {
      alertForm(element)
      return false
    } else if (element.classList.contains('text') && !expTexto.test(element.value)) {
      alertForm(element, 1)
      return false
    } else if (element.classList.contains('number') || element.classList.contains('moneda')) {
      if (!expNum.test(value)) {
        alertForm(element, 2)
        return false
      }
    } else if (element.selectedIndex === 0 && element.classList.contains('required') && !value) {
      alertForm(element)
      return false
    } else if (element.classList.contains('email') && !expMail.test(value)) {
      alertForm(element, 3)
      return false
    } else if (element.type === "file" && element.classList.contains('required')) {
      if (!element.files.length) {
        alertForm(element, 4)
        return false
      }
    } else if (element.classList.contains('password') && element.value.length < 8) {
      alertForm(element, 5)
      return false
    }
    correcto(element)
  }
  return true
}


// El campo paso la validación
const correcto = campoForm => {
  const nextElement = campoForm.nextElementSibling
  if (campoForm.clientTop != 0) campoForm.style.border = ""
  campoForm.style.backgroundColor = ""
  if (nextElement.tagName === "SPAN") nextElement.innerText = ""
}

// El campo no paso la validación
const error = campoForm => {
  if (campoForm.clientTop != 0) campoForm.style.border = `${campoForm.clientTop}px solid red`
  campoForm.style.backgroundColor = "rgba(255, 111, 0, 0.2)"
  campoForm.focus()
}

// Alertas si algún campo del form no paso la validación
const alertForm = (campoForm, typeAlert = 0) => {
  let nameCampo = campoForm.title || ""
  const positionCampo = campoForm.getBoundingClientRect()
  let msgs = [
    /*vacio [0]*/
    `Favor complete el campo ${nameCampo}`,
    /*text [1]*/
    `Favor introduzca solo texto en el campo ${nameCampo}`,
    /*number [2]*/
    `El campo ${nameCampo} solo debe contener números`,
    /*email [3]*/
    `Favor introduzca un correo valido
  ejemplo: micorreo@gmail.com`,
    /*email [4]*/
    `Favor seleccione un archivo`,
    /*email [5]*/
    `La clave debe ser mayor a 8 digitos`
  ]
  campoForm.nextElementSibling.innerText = msgs[typeAlert]
  if (scrollY) useBodyScroll(0, ((positionCampo.top + scrollY) - 100))
  error(campoForm)
}
