import CardProduct from './CardProduct'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDestacados } from './hook/useQuery'
import Link from 'next/link'


const GridProductos = ({ productos }) => {
  const router = useRouter()

  const [productosDestacados, setProductosDestacados] = useState([])

  useEffect(() => {
    if (!productos.length) useDestacados(setProductosDestacados)
  }, [productos.length])
  return (
    <>

      {
        productos.length === 0
          ?
          <>
            <div className="alert alert-yellow">
              <span>De momento no tenemos productos según lo filtrado. </span>
              <Link href="/productos/todos" >
                <a> Ver todos los productos</a>
              </Link>
            </div>
            <h1 className="t2 title-gird-productos">Productos Destacados</h1>
            {
              productosDestacados.length == 0
                ?
                <div className="alert alert-blue">
                  <span>Cargando productos destacados... </span>
                </div>
                :
                <div className="grid-products">
                  {
                    productosDestacados.map(familyProduct => (
                      familyProduct.map((p, i) => {
                        if (p.es_padre) return (
                          <CardProduct
                            code={p.codigo}
                            key={i}
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
            }
          </>
          :
          <div className="grid-products">
            {
              productos.map(familyProduct => (
                familyProduct.map((p, i) => {
                  if (p.es_padre) return (
                    <CardProduct
                      code={p.codigo}
                      key={i}
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
      }
    </>
  )
}

export default GridProductos
