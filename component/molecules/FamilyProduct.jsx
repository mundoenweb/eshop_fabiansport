import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const FamilyProduct = ({ familyProduct, idDad, codeDad }) => {
  const [animate, setAnimate] = useState('animete')
  const delteAnimateLoad = () => {
    setAnimate('')
  } 
  return (
    <div className="familyProduct">
      {
        familyProduct.map((product, i) => {
          if (i <= 3) {
            return (
              <Link key={i} href={`/articulo/${idDad}/${product.codigo}`}>
                <a className={animate}>
                  <Image
                    width={40}
                    height={40}
                    onLoadingComplete={delteAnimateLoad}
                    objectFit='contain'
                    src={product.image[0]}
                    alt={product.name}
                  />
                </a>
              </Link>
            )
          }
        })
      }
      {
        familyProduct.length > 1 &&
        <Link href={`/articulo/${idDad}/${codeDad}`}>
          <a className="mw-flex-column cart-color">
            <span className="cart-length-color"> {familyProduct.length} </span>  colores
          </a>
        </Link>
      }
    </div>
  )
}

export default FamilyProduct
