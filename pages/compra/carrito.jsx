import BtnContinueCart from "../../component/atoms/BtnContinueCart"
import CartSummary from "../../component/molecules/CartSummary"
import Help from "../../component/molecules/Help"
import PaymentTypeImage from "../../component/molecules/PaymentTypeImage"
import Link from "next/link"
import { connect } from "react-redux"
import { deleteProductFromCart } from '../../redux/actionCreators'


const Cart = ({ cart, deleteFromCart }) => {

  return (
    <>
      <div className="mw-grid separador"></div>
      <section className="mw-grid carrito">
        <div className="list-carrito">
          <div className="mw-flex-row header-carrito">
            <h1 className="t2">TU CARRITO</h1>
            {
              cart.products.length > 0 &&
              <Link href="/productos/todos">
                <a> Seguir comprando</a>
              </Link>
            }
          </div>
          {
            cart.products.length > 0 &&
            <div className="alert alert-yellow">
              Ten en cuenta que los productos añadidos al carrito no se reservan. Te recomendamos finalizar tu compra ahora, para asegurarte que tendrás los productos que ya has seleccionado.
            </div>
          }
          <ul className="ul-list-carrito">
            {cart.products.length === 0
              ?
              <>
                <div className="alert alert-yellow">
                  <span>De momento no hay productos en el carrito. - </span>
                  <Link href="/productos/todos">
                    <a>Compra tu primer producto</a>
                  </Link>
                </div>
              </>
              :
              cart.products.map(p => (
                <li key={p.idDelete} className="mw-grid box-product">
                  <div className="imgProduct">
                    <img src={p.image} />
                  </div>

                  <div>
                    <h2 className="t2 title"> {p.name} </h2>
                    <ol>
                      <li>Sexo: {p.sex} </li>
                      <li>Color: {p.color.name} </li>
                      <li>size: {p.size.name} </li>
                    </ol>
                  </div>

                  <div className="price-and-cat mw-flex">
                    <select name="cat" className="selectCat">
                      <option value="1" > 1 </option>
                    </select>
                    <span>CostoS/.{p.costo * p.quantity} </span>
                  </div>

                  <a onClick={() => deleteFromCart(p.idDelete)}>×</a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="mw-flex-colum box-aside-summary">
          <CartSummary>
            <BtnContinueCart />
          </CartSummary>
          <Help />
          <PaymentTypeImage />
        </div>

      </section>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.carritoReducer
})

const mapDispatchToProps = dispatch => ({
  deleteFromCart(id) {
    dispatch(deleteProductFromCart({ id }))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
