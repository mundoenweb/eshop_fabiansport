import Link from "next/link"

const Help = ({children}) => (
  <div className="help-cart">
    <p className="t2">¿NECESITAS AYUDA?</p>
    <Link href="/terminos#plazoEntrega">
      <a> Envíos y plazos de entrega </a>
    </Link>
    <Link href="/terminos#cambioDevolucion">
      <a> Cambios y devoluciones </a>
    </Link>
    <Link href="/tiendas">
      <a>Atención al cliente</a>
    </Link>
    <Link href="/politica-rembolso">
      <a> Reembolsos  </a>
    </Link>
    {children}
  </div>
)
export default Help
