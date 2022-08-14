import { handleFeatureProducts } from "./utils/handleFeatureProducts"
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import CardProduct from "./card/CardProduct"
import Link from "next/link"

const FeaturedProducts = () => {
  const router = useRouter()
  const [products, setProducts] = useState(null)

  useEffect(() => {
    handleFeatureProducts(setProducts, router)
  }, [router])

  if (!products) return (
    <div className="alert alert-blue">
      <span>Cargando productos destacados... </span>
    </div>
  )

  return (<>
    <div className="alert alert-yellow">
      <span>De momento no tenemos productos según lo filtrado. </span>
      <Link href="/productos/todos" >
        <a> Ver todos los productos</a>
      </Link>
    </div>
    <h1 className="t2 title-gird-productos">Productos Destacados</h1>
    <div className="grid-products">
      {
        products.map((familyProduct, i) => (
          familyProduct.map((p) => {
            if (p.es_padre) return (
              <CardProduct
                code={p.codigo}
                key={p.id}
                idx={i}
                id={p.id}
                idDad={p.id}
                name={p.name}
                costo={p.costo}
                descuento={p.descuento}
                image={p.image[0]}
                familyProduct={familyProduct}
              />
            )
          })
        ))
      }
    </div>
  </>)
}

export default FeaturedProducts
