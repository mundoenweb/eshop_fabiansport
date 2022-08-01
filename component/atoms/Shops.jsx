const shops = [
  {
    name: "Fabian Sport S.A.C",
    phone: "921.163.409 / 958.917.273",
    direction: "Jr Julián de Morales #535",
    city: "HUARAZ / ANCASH",
  },
  {
    name: "Fabian Sport S.A.C",
    phone: "921.163.409 / 958.917.273",
    direction: "Av. San Martin #554",
    city: "HUARAZ / ANCASH",
  },
]
const ico = {
  shop: "tienda.svg",
  phone: "telefono.svg",
  direction: "hogar.svg",
  city: "ciudad.svg",
}

const Shops = () => {
  return (
    <div className="shops">
      {
        shops.map((shop, idx) => (
          <ul key={idx}>
            <li className="item-shop">
              <img src={`${process.env.STATIC_PUBLIC}images/${ico.shop}`}
                alt="ico"
                className="ico-images-shops"
              />
              {shop.name}
            </li>
            {/* <li className="item-shop">
              <img src={`${process.env.STATIC_PUBLIC}images/${ico.phone}`}
                alt="ico"
                className="ico-images-shops"
              />
              {shop.phone}
            </li> */}
            <li className="item-shop">
              <img src={`${process.env.STATIC_PUBLIC}images/${ico.direction}`}
                alt="ico"
                className="ico-images-shops"
              />
              {shop.direction}
            </li>
            <li className="item-shop">
              <img src={`${process.env.STATIC_PUBLIC}images/${ico.city}`}
                alt="ico"
                className="ico-images-shops"
              />
              {shop.city}
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default Shops
