import Link from "next/link"

const PieDePagina = () => {

  return (
    <footer>
      <div className="mw-grid content-footer">
        <div className="tiendas">
          <p className="titles-footer">Tiendas</p>
          <div className="mw-flex">
            <img src={`${process.env.STATIC_PUBLIC}images/mundo.svg`} alt="mundo" />
            <ul>
              <li>
                <Link href="/tiendas" >
                  <a>Huaraz - Julián de Morales #535</a>
                </Link>
              </li>
              <li>
                <Link href="/tiendas" >
                  <a>Huaraz - San Martin #554</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mw-flex siguenos">
            <a href="https://www.facebook.com/fabiansportperu/" target="new">
              <img src={`${process.env.STATIC_PUBLIC}images/face_white.svg`}
                alt="facebook"
                className="siguenos-img"
              />
            </a>
            <a href="https://www.instagram.com/fabiansportperu/" target="new">
              <img src={`${process.env.STATIC_PUBLIC}images/instagram_white.svg`}
                alt="instagram"
                className="siguenos-img"
              />
            </a>
          </div>

        </div>
        <div className="Productos">
          <p className="titles-footer">Productos</p>
          <div className="mw-flex">
            <img src={`${process.env.STATIC_PUBLIC}images/producto.svg`} alt="productos" />
            <ul>
              <li>
                <Link href="/productos/calzado" >
                  <a>Calzado</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/ropa" >
                  <a>Ropa</a>
                </Link>
              </li>
              <li>
                <Link href="/productos/accesorios" >
                  <a>Accesorios</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="terminos">
          <p className="titles-footer">Conéctate con FabianSport</p>
          <div className="mw-flex">
            <img src={`${process.env.STATIC_PUBLIC}images/ayudar.svg`} alt="productos" />
            <ul>
              <li>
                <Link href="/tiendas" >
                  <a>Atención al Cliente</a>
                </Link>
              </li>
              <li>
                <Link href="/terminos" >
                  <a>Términos y condiciones</a>
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" >
                  <a>Política de Privacidad</a>
                </Link>
              </li>
              <li>
                <Link href="/politica-rembolso" >
                  <a>Política de Rembolso</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-logo mw-flex">
          <img src={`${process.env.STATIC_PUBLIC}images/logo_letras_blancas.svg`}
            alt="productos"
            className="logo-footer"
          />
        </div>
      </div>
      <div className="mw-grid">
        <p className="autor">Diseñado por: <a href="https://tuemprende.com" target="new"> Tu emprende</a> </p>
      </div>
    </footer>
  )
}

export default PieDePagina
