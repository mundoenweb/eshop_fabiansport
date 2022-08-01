import Link from "next/link"
import { useRouter } from "next/router"


const MenuUser = () => {
  const router = useRouter()
  return (
    <ul className="ul-main-two mw-flex ul-main-two-line">
      <li>
        <Link href="/app/user/compras">
          <a>MIS COMPRAS</a>
        </Link>
      </li>
      <li>
        <Link href="/app/user/favoritos">
          <a>MIS FAVORITOS</a>
        </Link>
      </li>
      <li>
        <Link href="/app/user/perfil">
          <a>MIS DATOS</a>
        </Link>
      </li>
      <li>
        <a onClick={() => router.push('/app/close')}>CERRAR SESIÓN</a>
      </li>
    </ul>
  )
}

export default MenuUser
