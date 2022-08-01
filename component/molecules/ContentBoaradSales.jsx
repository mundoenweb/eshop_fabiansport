const FirstContentBoarad = ({ codigo, products }) => (
  <>
    <p>Venta:  #{codigo} </p>
    <p className="name-product">
      Producto:
      {
        products.length === 1
          ? ` ${products[0].name}`
          : " Varios articulos"
      }
    </p>
    <p>
      Precio Total: /S.
      {
        products.length === 1
          ? products[0].costo * products[0].quantity
          : products.map(p => (p.costo * p.quantity)).reduce((a, b) => a + b)
      }
    </p>
    <p>
      Articulos:
      {
        products.length === 1
          ? ` ${products[0].quantity}`
          : ` ${products.map(p => p.quantity).reduce((a, b) => a + b)}`
      }
    </p>
  </>
)

const TwoContentBoarad = ({ delivery = "", status = "", guia = "" }) => (
  <>
    { delivery == false
      ? <p className="to-delivery">Estatus:  Por Entregar</p>
      : <p className="delivered">Estatus:  Entregado</p>
    }
    <p>Encomienda: {delivery} </p>
    <p>Guía: {guia}</p>
  </>
)

export { FirstContentBoarad, TwoContentBoarad }
