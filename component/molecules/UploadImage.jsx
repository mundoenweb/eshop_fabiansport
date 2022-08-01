import { ajax, valideteResponse } from "component/hook/Ajax"
import nProgress from "nprogress"
import { connect } from "react-redux"
import { deleteImageProduct, uploadImageProduct } from "redux/actionCreators"
import store from "redux/store"

const UploadImage = ({ images, productoID }) => {

  const renderImage = (file, arrImages, productoID) => {
    return new Promise((resolve, reject) => {
      const fileRender = new FileReader()
      fileRender.readAsDataURL(file)

      fileRender.addEventListener('load', () => {
        const image = { file: file, preview: fileRender.result }
        arrImages.push(image)
        resolve()

      })
    })
  }

  const addUploadImage = async (input) => {
    const files = input.files
    const imgsCurrent = images.length
    let arrImages = [], imgMax = 6

    if (files.length > (imgMax - imgsCurrent)) {
      input.type = "text"; input.type = "file"
      return alert(`Solo puede seleccionar ${imgMax - imgsCurrent} imagenes`)
    }

    nProgress.start()
    if (files[0]) await renderImage(files[0], arrImages)
    if (files[1]) await renderImage(files[1], arrImages)
    if (files[2]) await renderImage(files[2], arrImages)
    if (files[3]) await renderImage(files[3], arrImages)
    if (files[4]) await renderImage(files[4], arrImages)
    if (files[5]) await renderImage(files[5], arrImages)

    store.dispatch(uploadImageProduct(arrImages))
    input.type = "text"; input.type = "file"
    nProgress.done()
  }
  const removeUploadImage = async (indexImage, img) => {
    nProgress.start()

    if (images[indexImage].file) {
      store.dispatch(deleteImageProduct(indexImage))
      // img.filter((s, i) => i !== indexImage)
      return nProgress.done()
    }

    if (!confirm("¿seguro que desea borrar esta imagen permanentemente?")) return

    let arrText = img.split('/')
    img = arrText[arrText.length - 1]
    const formDate = new FormData();
    formDate.append('json', JSON.stringify({
      imagen: { nombre: img, id: productoID, directorio: "productos" }
    }))

    const response = await ajax(`${process.env.API}/eliminarImagen`, 'POST', formDate)
    if (!valideteResponse(response)) return

    store.dispatch(deleteImageProduct(indexImage))
    nProgress.done()
  }

  return (
    <div className="box-main-uploader">
      {
        images.length === 6
          ? <label>Imagenes Completas</label>
          :
          <label className="button-upload-products "
            htmlFor="btn_upload_image"
          >
            Subir Imagenes del producto
            <input id="btn_upload_image"
              onChange={e => addUploadImage(e.target)}
              accept=".webp, .jpg, .png|image/*"
              type="file"
              name="btn_upload_image"
              className="upload ignore"
              multiple
            />
          </label>

      }
      <div className="box-uploader-products">

        {
          images.map((img, indexImage) => (
            <div key={indexImage} className="box-input-image">

              <img className="image-product-upload"
                src={img.preview ? img.preview : img}
                alt="image"
              />

              <a className="delet-input-upload"
                onClick={() => removeUploadImage(indexImage, img)}
              >

                <img src={`${process.env.STATIC_PUBLIC}images/delet.svg`}
                  alt="delete"
                  className="img-delete"
                />
              </a>

            </div>
          ))
        }



      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  images: state.newProduct.img,
  productoID: state.newProduct.id
})

export default connect(mapStateToProps)(UploadImage)
