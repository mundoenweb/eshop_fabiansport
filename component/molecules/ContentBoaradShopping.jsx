const FirstContentBoarad = ({ codigo, products, amount }) => (
  <>
    <p>Compra:  {codigo} </p>
    <p className="name-product">
      Producto:
      {
        products.length === 1
          ? ` ${products[0].nombre}`
          : " Varios articulos"
      }
    </p>
    <p>
      Precio Total: /S. {amount}
    </p>
    <p>
      Articulos:
      {
        products.length === 1
          ? ` ${products[0].cantidad}`
          : ` ${products.map(p => p.cantidad).reduce((a, b) => a + b)}`
      }
    </p>
  </>
)

const TwoContentBoarad = ({ status = "", guia = "" }) => (
  <>
    {/* { status == "" && <p className="delivered"> Producto Entregado </p> } */}
    <p>Pago: {status} </p>
    {/* <p>Guía: {guia}</p> */}
  </>
)

export { FirstContentBoarad, TwoContentBoarad }
