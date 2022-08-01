import Link from "next/link"

const MenuDefaultHeader = () => {
  return (
    <ul className="ul-main-first mw-flex">
      <li>
        <Link href="/productos/hombre">
          <a>HOMBRES</a>
        </Link>
      </li>
      <li>
        <Link href="/productos/mujer">
          <a>MUJERES</a>
        </Link>
      </li>
      <li>
        <Link href="/productos/ninos">
          <a>NIÑOS</a>
        </Link>
      </li>
      <li>
        <Link href="/productos/descuento">
          <a>DESCUENTOS</a>
        </Link>
      </li>
      <li>
        <Link href="/tiendas">
          <a>TIENDAS</a>
        </Link>
      </li>
      
    </ul>
  )
}

export default MenuDefaultHeader
