const FirstContentBoarad = ({ codigo = "", name = "", size = ""}) => (
  <>
    <p> Codigo: { codigo } </p>
    <p> Producto: { name } </p>
    <p> Talla: { size } </p>
  </>
)

const TwoContentBoarad = ({precio = 0, quantity = 0}) => (
  <>
    <p> Cantidad: {quantity} </p>
    <p> Precio: /S. {precio} </p>
    <p> Total: /S. {precio * quantity} </p>
  </>
)

export { FirstContentBoarad, TwoContentBoarad   }
