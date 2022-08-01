const FirstContentBoarad = ({ code, name, quantity }) => (
  <>
    <p>Codigo:  #{code} </p>
    <p className="name-product">Producto: {name} </p>
    {
      quantity === 0
      ? <p className="empty-Stock">Existencia: <b> {quantity} </b></p>
      : <p>Existencia: <b>{quantity} </b> </p>
    }
  </>
)

const TwoContentBoarad = ({ price, discount = 0 }) => (
  <>
    <p>Precio: {price} </p>
    <p>Descuento: {discount}</p>
  </>
)

export { FirstContentBoarad, TwoContentBoarad }
