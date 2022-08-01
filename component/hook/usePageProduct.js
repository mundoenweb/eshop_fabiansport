import nProgress from "nprogress"

//cambia el modelo
export const changueModel = (codeCurrent, code, idDad, router) => {

  if (code === codeCurrent) return
  router.push(`/articulo/${idDad}/${code}`)
}

//cambia la imagen de la galeria
let positionImg = 0
export const useChangeImgGallery = ( action, images, gallery) => {


  // if (resetGallery) {
  //   positionImg = 0
  //   setResetGallery(false)
  // }
  
  nProgress.start()

  switch (action) {
    case "next":
      if (positionImg < (images.length - 1)) {
        positionImg++
        gallery.firstElementChild.src = images[positionImg]
      } else {
        positionImg = 0
        gallery.firstElementChild.src = images[positionImg]
      }
      break;
    case "back":
      if (positionImg > 0) {
        positionImg--
        gallery.firstElementChild.src = images[positionImg]
      } else {
        positionImg = images.length - 1
        gallery.firstElementChild.src = images[positionImg]
      }
    default:
      break;
  }
}
