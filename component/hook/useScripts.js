

export const loadImage = (e) => e.target.style.opacity = "1" 

/** Muestra cualquier elemento
 * @param element elemento a mostrar
 * @param display tipo de display css para mostrar el elemento
 */
export const toShow = (element, display) => {
  if (display) element.style.display = display
  else element.classList.toggle('toShow')
}

/** Oculta cualquier elemento
* @param element elemento que se ocultara 
*/
export const none = element => {
  if (element.classList.contains('toShow')) element.classList.toggle('toShow')
  else element.style.display = 'none'
}

export const useBodyScroll = (scrollX, scrollY) => {
  const body = document.querySelector("html")
  body.style.scrollBehavior = "smooth"
  setTimeout(() => {
    scroll(scrollX || 0,scrollY || 0)
    body.style.scrollBehavior = ""
  }, 50);
}
