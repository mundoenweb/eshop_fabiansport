import { useQuantityProductsCart } from "component/hook/useQuantityProductsCart"
import Link from "next/link"
import { connect } from "react-redux"


const CartNav = ({ cart }) => {
  return (
    <div className="cart-nav mw-flex">
      <Link href="/compra/carrito">
        <a>
          <img className="cart-nav-img"
            src={`${process.env.STATIC_PUBLIC}images/nav/carrito_vacio.svg`}
            alt="carrito"
          />
        </a>
      </Link>
      { cart.products.length > 0 && useQuantityProductsCart(cart.products)}
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.carritoReducer
})

export default connect(mapStateToProps)(CartNav)
