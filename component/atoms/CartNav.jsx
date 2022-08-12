import { handleQuantityProductsCart } from "component/hook/handleQuantityProductsCart"
import Image from "next/image"
import Link from "next/link"
import { connect } from "react-redux"


const CartNav = ({ cart }) => {
  return (
    <div className="cart-nav mw-flex">
      <Link href="/compra/carrito">
        <a className="cart-nav-img">
          <Image
            width={30}
            height={30}
            src={`${process.env.STATIC_PUBLIC}images/nav/carrito_vacio.svg`}
            alt="carrito"
          />
        </a>
      </Link>
      {cart.products.length > 0 && handleQuantityProductsCart(cart.products)}
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.carritoReducer
})

export default connect(mapStateToProps)(CartNav)
