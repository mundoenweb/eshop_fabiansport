import Link from "next/link"
import Private from "component/atoms/Private"
import { connect } from "react-redux"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const PayReceived = ({isLogged}) => {
  const router = useRouter()

  if (!isLogged) return <Private />

  const [code, setCode] = useState(null)

  useEffect(() => {
    setCode(router.query.code)
  }, [])

  return (
    <>
      <div className="mw-flex-column box-finish-sales">
        <img src={`${process.env.STATIC_PUBLIC}images/comprobar.svg`} alt="exitoso" />
        <p className="t2 title-msg-pay">
          COMPRA REALIZADA <br /> CON EXITO
        </p>
        <p className="alert alert-yellow">Ya solo falta llenar los datos de entrega</p>
        <Link href={`/compra/entrega-y-factura?code=${code}`} >
          <a className="button btn-finish-sales">agregar datos</a>
        </Link>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
})

export default connect(mapStateToProps)(PayReceived)
