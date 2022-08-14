import CardProduct from './card/CardProduct'
import FeaturedProducts from './FeaturedProducts'

const GridProductos = ({ productos }) => {
  if (!productos.length) {
    return (<FeaturedProducts />)
  }
  return (
    <div className="grid-products">
      {
        productos.map((familyProduct, i) => (
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
  )
}

export default GridProductos
