import Shops from "../component/atoms/Shops"

const ListProducts = () => {
  return (
    <>
      <div className="mw-grid separador"></div>
      <div className="mw-grid box-shops">
        <div>
          <h1 className="t2">Tiendas</h1>
          <Shops />
        </div>
        <div>
          <h2 className="t2">Atención al cliente</h2>
          <img src={`${process.env.STATIC_PUBLIC}images/soporte.jpg`}
            alt="ico"
            className="images-soporte"
          />
          <ul>
            <li className="item-shop">
              <img src={`${process.env.STATIC_PUBLIC}images/telefono.svg`}
                alt="ico"
                className="ico-images-shops"
              />
              958.917.274 / 921.163.409
            </li>
            <li className="item-shop">
              <img src={`${process.env.STATIC_PUBLIC}images/mundo-black.svg`}
                alt="ico"
                className="ico-images-shops"
              />
              ventas@fabiansport.com
            </li>

          </ul>
        </div>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export default ListProducts
