import Link from "next/link"
import { createRef, useEffect } from 'react'
import { connect } from "react-redux"
import { useRouter } from 'next/router'
import EasySession from "../component/molecules/EasySession"
import Politics from "../component/molecules/Politics"
import FormRegis from "../component/molecules/FormRegis"
import AlertSpan from "../component/atoms/AlertSpan"
import { useRegisClient } from "../component/hook/useSession"

const msgErr = createRef()

const Registro = () => {

  const router = useRouter()

  return (
    <>
      <div className="mw-grid">
        <div className="mw-grid separador"></div>
        <form className="mw-grid form-login" onSubmit={e => useRegisClient(e, msgErr, router)} >
          {/* <EasySession /> */}
          <FormRegis />
          <AlertSpan none="none" color="red" center="center" referencia={msgErr} />
          <Politics />

          <button className="button">REGISTRATE GRATIS</button>
          <Link href="/login">
            <a className="button button-ghost">INICIA SESIÓN</a>
          </Link>
        </form>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export default Registro
