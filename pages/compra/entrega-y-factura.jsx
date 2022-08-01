import { createRef, useEffect, useState } from "react"
import { useRouter } from 'next/router'
import { connect } from "react-redux"
import FormDateUser from "../../component/molecules/FormDateUser"
import { useCreateDataDelivery } from "../../component/hook/useCreateDataDelivery"
import Private from "component/atoms/Private"
import { ajax } from "component/hook/Ajax"
import Link from "next/link"

const formDateDelivery = createRef()

const DeliveryAndBulling = ({ 
  logged, user , token
}) => {
  const router = useRouter()

  if (!logged) return <Private />

  const [code, setCode] = useState(null)

  useEffect(() => {
    setCode(router.query.code)
  }, [])

  return (
    <>
      <div className="mw-grid separador"></div>
      <section className="mw-grid">

        <div className="list-carrito">
          <form ref={formDateDelivery}
            onSubmit={e => useCreateDataDelivery(e, router, user, token, formDateDelivery.current, code)}
          >
            <FormDateUser form={formDateDelivery} />
          </form>
        </div>
      </section>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  logged: state.userReducer.logged,
  qtyProducts: state.carritoReducer.products.length,
  user: state.userReducer.dataUser,
  token: state.userReducer.token
})

export default connect(mapStateToProps)(DeliveryAndBulling)
