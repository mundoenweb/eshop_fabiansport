import Private from "component/atoms/Private"
import { usePayment } from "component/hook/usePayment"
import Link from "next/link"
import { useRouter } from "next/router"
import { connect } from "react-redux"

const Finish = ({ 
  isLogged,
  user,
  token,
  cart
 }) => {
  const router = useRouter()

  if (!isLogged) return <Private />

  const responseMP = {
    payment: router.query.payment_id,
    status: router.query.status,
    merchantOrder: router.query.merchant_order_id
  }

  const processOrder = (event) => {
    event.preventDefault()
    usePayment(user, cart, responseMP, token, router)
  }

  return (
    <>
      <div className="mw-flex-column box-finish-sales">
        <img src={`${process.env.STATIC_PUBLIC}images/comprobar.svg`} alt="exitoso" />
        <p>
          {
            responseMP.status === 'approved'
              ? 'Pago Realizado exitosamente'
              : 'Pago Pendiente por aprovación'
          }
          <br /> <b>Pago {router.query.payment_id}</b>
        </p>
        <Link href={`/`} >
          <a className="button btn-finish-sales" onClick={(processOrder)}>
            PROCESAR PEDIDO
          </a>
        </Link>
        <br />
        <span className="alert alert-yellow">favor no cieere la ventana <br /> y haga clic en proesar pedido</span>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  user: state.userReducer.dataUser,
  token: state.userReducer.token,
  cart: state.carritoReducer
})

export default connect(mapStateToProps)(Finish)
