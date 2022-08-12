import Image from "next/image"
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
          <Image
            width={320}
            height={150}
            objectFit='cover'
            src={`/images/soporte.jpg`}
            style={{ marginBottom: '12px' }}
            alt="ico"
          />
          <ul>
            <li className="item-shop">
              <Image
                width={20}
                height={20}
                src={`/images/telefono.svg`}
                alt="ico"
              />
              <span style={{ marginLeft: '12px' }}>
                958.917.274 / 921.163.409
              </span>
            </li>
            <li className="item-shop">
              <Image
                width={20}
                height={20}
                src={`/images/mundo-black.svg`}
                alt="ico"
              />
              <span style={{ marginLeft: '12px' }}>
                ventas@fabiansport.com
              </span>
            </li>

          </ul>
        </div>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export default ListProducts
