import Link from 'next/link'

const FamilyProduct = ({ familyProduct, idDad, codeDad }) => {
  return (
    <div className="familyProduct">
      {
        familyProduct.map((product, i) => {
          if (i <= 3) {
            return (
              <Link key={i} href={`/articulo/${idDad}/${product.codigo}`}>
                <a>
                  <img loading="lazy" src={product.image[0]} alt={product.name} />
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
