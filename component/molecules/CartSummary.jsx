import { connect } from "react-redux"
import { useQuantityProductsCart } from "../hook/useQuantityProductsCart"

const CartSummary = ({ cart, children }) => {
  return (
    <div className="main-box-summary-cart">
      <h3 className="t2">RESUMEN DEL PEDIDO</h3>
      <div className="mw-grid box-summary-cart">
        <p>Productos</p>
        <p className="summary-cart">
          {
            useQuantityProductsCart(cart.products)
          }
        </p>
        <p className="p-total">Total</p>
        <p className="summary-cart p-total"> S/. {cart.costTotal}</p>
      </div>
      {
        children && children
      }
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.carritoReducer,
})

export default connect(mapStateToProps)(CartSummary)
