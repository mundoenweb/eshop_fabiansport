import Link from "next/link"
import { useRouter } from "next/router"

const MenuAdmin = () => {
  const router = useRouter()
  return (
    <ul className="ul-main-two mw-flex ul-main-two-line">
      <li>
        <Link href="/app/admin/productos">
          <a>PUBLICACIONES</a>
        </Link>
      </li>
      <li>
        <Link href="/app/admin/ventas">
          <a>VENTAS</a>
        </Link>
      </li>
      <li>
        <Link href="/app/admin/clientes">
          <a>CLIENTES</a>
        </Link>
      </li>
      <li>
        <Link href="/app/admin/actualizar-tasa">
          <a>ACTUALIZAR TASA Sol / $</a>
        </Link>
      </li>
      <li>
        <a onClick={() => router.push('/app/close')}>CERRAR SESIÓN</a>
      </li>
    </ul>
  )
}

export default MenuAdmin
