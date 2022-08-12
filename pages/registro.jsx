import Link from "next/link"
import { createRef } from 'react'
import { useRouter } from 'next/router'
// import EasySession from "../component/molecules/EasySession"
import Politics from "../component/molecules/Politics"
import FormRegis from "../component/molecules/FormRegis"
import AlertSpan from "../component/atoms/AlertSpan"
import { handleRegisClient } from "../component/hook/handleSession"

const msgErr = createRef()

const Registro = () => {

  const router = useRouter()

  return (
    <>
      <div className="mw-grid">
        <div className="mw-grid separador"></div>
        <form className="mw-grid form-login" onSubmit={e => handleRegisClient(e, msgErr, router)} >
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
