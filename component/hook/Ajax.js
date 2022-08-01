import NProgress from 'nprogress'
/** 
 * @function ajax Se encarga de realizar una peticion o enviar informacion al backend
   para que la procese y nos de una respuesta tipo JSON

 * Si se va a realizar una peticion basta con:
   @function ajax(url)

 * Si se va a enviar información debe pasar:
   @function ajax(url,method,body)      
   la body debe ser un Objeto, Array ó FormData()

 * Si desea agregar o eliminar cabeceras, se debe pasar como un callback
   @function ajax(url,metodo,body,callback)
   ejemplo: const agregarCabecera = cabecera => {cabecera.append('teken','12345')}
*/
const ajax = async (url, method = 'GET', body = null, callback) => {
  let cL = console.log,
    data,
    response,
    mode = "cors"

  const headers = new Headers()
  if (callback) callback(headers)

  if (body && Object.entries(body).length) {
    // cL('body:'); cL(body)
    body = JSON.stringify(body)
    headers.append('Content-Type', 'application/json;charset=utf-8')
  }

  const myConfig = { 
    method, 
    mode,
    headers, 
    body 
  }
  try {
    response = await fetch(url, myConfig)
  } catch (err) {
    // cL(err)
    response = { status: "failed" }
  }

  try {
    data = await response.json()
    response.data = data
  } catch (err) {
    cL("no se puede convertir el objeto a json")
  }

  cL('Response:'); cL(response)
  return response
}

const valideteResponse = response => {
  switch (response.status) {
    case 200: // peticon exitosa
      return true
    case 201: // recurso creado
      return true
    case 401: // acceso no autorizado
      alert("Acceso no autorizado")
      NProgress.done()
      return false
    case "failed": // fallo la respuesta
      alert("Favor verifique su conexion a internet")
      NProgress.done()
      return false
    default:
      alert(`${response.data.mensaje}`)
      NProgress.done()
      return false
  }
}

export { ajax, valideteResponse }
