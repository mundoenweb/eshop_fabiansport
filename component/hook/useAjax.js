let responseData = null

/** 
 * @function ajax Se encarga de realizar una peticion o enviar data al backend
   para que la procese y nos de una respuesta tipo JSON

 * Si se va a realizar una peticion basta con:
   @function ajax(url)

 * Si se va a enviar información debe pasar:
   @function ajax(url,method,data)      
   la data debe ser un Array de Objets o un FormData()

 * Si desea agregar o eliminar cabeceras, se debe pasar como un callback
   @function ajax(url,metodo,data,callback)
   ejemplo: const agregarCabecera = cabecera => {cabecera.append('teken','12345')}

 * @param url direccón a donde se realizara la petición.
 * @param metodo metodo de envio como POST, GET, CREATE, DELETE, UPDATE, entre otros.
 * @param data información enviada al servidor.
 * @param callbackTwo función para agregar cabeceras a myHeaders.
 * 
 * Una vez su proyecto este listo le recomendamos borrar los consog.Log()
*/
export const useAjax = async (url, method = 'GET', body = null) => {
  let cL = console.log
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  if (body) body = JSON.stringify(body)

  const myConfig = { method, body, headers }
  const response = await fetch(url, myConfig)

  switch (response.status) {
    case 200:
      responseData = await response.json()
      cL('response backend:'); cL(responseData)
      return responseData
    case 201:
      responseData = await response.json()
      cL('response backend:'); cL(responseData)
      return responseData
    default:
      cL('response backend:'); cL(response)
      return {
        status: response.status,
        type: "no autorizado"
      }
  }
}
