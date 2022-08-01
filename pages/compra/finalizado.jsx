import Private from "component/atoms/Private"
import Link from "next/link"
import { useRouter } from "next/router"
import { connect } from "react-redux"

const Finish = ({isLogged}) => {
  const router = useRouter()

  if (!isLogged) return <Private />

  return (
    <>
      <div className="mw-flex-column box-finish-sales">
        <img src={`${process.env.STATIC_PUBLIC}images/comprobar.svg`} alt="exitoso" />
        <p>
          Compra realizada exitosamente, pronto nos pondremos en contacto con usted.
        <br /> <b>Compra {router.query.code}</b>
        </p>
        <Link href={`/app/user/compras`} >
          <a className="button button-ghost btn-finish-sales">ver mis comras</a>
        </Link>
        <Link href={`/productos/todos`} >
          <a className="button btn-finish-sales">Seguir Comprando</a>
        </Link>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
})

export default connect(mapStateToProps)(Finish)
