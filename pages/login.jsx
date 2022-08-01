import Link from "next/link"
import { createRef } from 'react'
import { useRouter } from 'next/router'
import EasySession from "../component/molecules/EasySession"
import Politics from "../component/molecules/Politics"
import FormLogin from "../component/molecules/FormLogin"
import AlertSpan from "../component/atoms/AlertSpan"
import { useStartSesionEmail } from "../component/hook/useSession"


const msgErr = createRef()

const Login = () => {

  const router = useRouter()

  return (
    <>
      <div className="mw-grid">
        <div className="mw-grid separador"></div>
        <form className="mw-grid form-login" onSubmit={e => useStartSesionEmail(e, msgErr, router)} >
          {/* <EasySession /> */}
          <FormLogin />
          <AlertSpan none="none" color="red" center="center" referencia={msgErr} />
          <Politics />

            {/* <span>
              <Link href="/recuperar-clave">
                <a> Recuperar contraseña</a>
              </Link>
            </span> */}

          <button className="button">INICIA SESIÓN</button>
          <Link href={router.query.path
            ? `/registro?path=${router.query.path}`
            : `/registro`}>
            <a className="button button-ghost">REGISTRATE GRATIS</a>
          </Link>
        </form>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}


export default Login
