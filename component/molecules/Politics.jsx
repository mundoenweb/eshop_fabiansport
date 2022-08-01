import Link from "next/link"


const Politics = () => (
  <div>
    <span>Al registrate o iniciar sesión acepta los
    <Link href="/terminos">
        <a> Terminos y Condiciones </a>
      </Link>
    de nuestro portal web
  </span>
  </div>
)

export default Politics
