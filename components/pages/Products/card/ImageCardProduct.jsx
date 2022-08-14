import useAnimate from "hooks/useAnimate"

const { default: Image } = require("next/image")
const { default: Link } = require("next/link")

const ImageCardProduct = ({ id, code, image, name, index }) => {
  const [animate, deleteAnimate] = useAnimate()
  return (
    <Link href={`/articulo/${id}/${code}`}>
      <a>
        <div className={`cart-img ${animate}`}>
          <Image
            src={image}
            alt={name}
            layout='fill'
            objectFit='contain'
            priority={(index < 4) ? true : false}
            onLoadingComplete={deleteAnimate}
          />
        </div>
      </a>
    </Link>
  )
}

export default ImageCardProduct
