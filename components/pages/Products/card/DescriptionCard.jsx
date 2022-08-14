const { default: Link } = require("next/link");

const DescriptionCard = ({ id, code, name, cost, discount }) => (
  <Link href={`/articulo/${id}/${code}`}>
    <a>
      <div className="card-description">
        <h2> {name} </h2>
        <div>
          {
            discount > 0 &&
            <div className="box-price-cart-ofert">
              <span className="price-cart price-cart-ofert">
                S/ {cost},<b>00</b>
              </span>
            </div>
          }
          <span className="price-cart">
            S/ {cost - discount},<b>00</b>
          </span>
        </div>
      </div>
    </a>
  </Link>
)

export default DescriptionCard
