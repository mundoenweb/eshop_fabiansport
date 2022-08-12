import Link from "next/link"
import CardProductBoard from "../../../component/organisms/CardProductBoard"
import { FirstContentBoarad, TwoContentBoarad } from "../../../component/molecules/ContentBoaradShopping"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { consultShopping } from '../../../component/hook/useQuery'
import Private from "component/atoms/Private"

const Shopping = ({ 
  idUser, isLogged, token
 }) => {

  const [shopping, setShopping] = useState(false)

  useEffect(() => {
    if (isLogged) consultShopping(idUser, token, setShopping)
  }, [idUser, isLogged, token])

  if (!isLogged) return <Private />
  if (shopping === false) return (
    <div className="mw-grid">
      <div className="mw-grid separador"></div>
      <div className="alert alert-blue">
        <span>Cargando la información, por favor espere...</span>
      </div>
    </div>
  )

  return (
    <>
      <section className="mw-grid board">
        {
          shopping.length === 0
            ?
            <div className="alert alert-yellow">
              <span>De momento no tienes compras - </span>
              <Link href='/productos/todos'>
                <a>Consigue aquí tu primer producto ahora</a>
              </Link>
            </div>
            :
            <>
              <h1 className="title-first-board">Mis Compras</h1>
              <div className="list-product-board">
                {console.log(shopping)}
                {
                  shopping.map(s => (
                    <CardProductBoard key={s.id} image={s.products[0].img}>
                      <FirstContentBoarad codigo={s.codigo} amount={s.monto_pagado} products={s.products} />
                      <TwoContentBoarad status={s.status} guia={s.numero_envio} />
                      {/* <Link href={`/app/user/detalle/${s.codigo}`}>
                        <a>Ver detalles</a>
                      </Link> */}
                    </CardProductBoard>
                  ))
                }
              </div>
            </>
        }

      </section>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  idUser: state.userReducer.dataUser.id,
  token: state.userReducer.token
})

export default connect(mapStateToProps)(Shopping)
