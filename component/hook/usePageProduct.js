import nProgress from "nprogress"

//cambia el modelo
export const changueModel = (codeCurrent, code, idDad, router) => {

  if (code === codeCurrent) return
  router.push(`/articulo/${idDad}/${code}`)
}

//cambia la imagen de la galeria
export const handleChangeImgGallery = (
  action, images, setImage,
  position, setPosition
) => {

  nProgress.start()

  switch (action) {
    case "next":
      if (position < (images.length - 1)) {
        setPosition(position + 1)
        setImage(images[position + 1])
      } else {
        setPosition(0)
        setImage(images[0])
      }
      break;
    case "back":
      if (position > 0) {
        setPosition(position - 1)
        setImage(images[position - 1])
      } else {
        setPosition(images.length - 1)
        setImage(images[images.length - 1])
      }
    default:
      break;
  }
}
