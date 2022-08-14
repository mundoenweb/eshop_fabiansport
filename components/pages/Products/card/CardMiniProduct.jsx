import useAnimate from "hooks/useAnimate"
import Image from "next/image"
import Link from "next/link"

const CardMiniProduct = ({ idDad, code, image }) => {
  const [animate, deleteAnimate] = useAnimate()
  return (
    <Link href={`/articulo/${idDad}/${code}`}>
      <a className={animate}>
        <Image
          width={40}
          height={40}
          onLoadingComplete={deleteAnimate}
          objectFit='contain'
          src={image}
          alt={code}
        />
      </a>
    </Link>
  )
}

export default CardMiniProduct
