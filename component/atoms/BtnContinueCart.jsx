import { connect } from 'react-redux'
import Link from "next/link"
import { useProcessOrderAdmin } from '../hook/useProcessOrderAdmin'
import { useRouter } from 'next/router'
import PasarelaDePago from './PasarelaDePago'


const BtnContinueCart = ({ products, typeUser, isLogged, costTotal }) => {
  const router = useRouter()
  return (
    <>
      {
        products.length === 0
          ? <></>
          : typeUser != 1
            ? !isLogged
              ?
              <a onClick={() => router.push('/login/?path=compra/carrito')}
                className="button"
              > CONTINUAR
              </a>
              :
              <PasarelaDePago />
            :
            <a onClick={() => useProcessOrderAdmin(products, costTotal, router)} className="button">
              PROCESAR VENTA
            </a>
      }
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  typeUser: state.userReducer.type,
  products: state.carritoReducer.products,
  costTotal: state.carritoReducer.costTotal,
})


export default connect(mapStateToProps)(BtnContinueCart)
