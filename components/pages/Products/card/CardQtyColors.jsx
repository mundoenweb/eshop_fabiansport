const CardQtyColors = ({ qty }) => {
  if (qty === 1) return null
  return (
    <a className="mw-flex-column cart-color">
      <span className="cart-length-color">
        {qty}
      </span>
      colores
    </a>
  )
}

export default CardQtyColors
