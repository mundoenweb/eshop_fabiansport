import Like from './atoms/Like'
import { loadImage } from './hook/useScripts'
import { connect } from "react-redux"
import Link from 'next/link'
import FamilyProduct from './molecules/familyProduct'

const CardProduct = ({ id, code, name, costo, idDad, descuento, image, typeUser, familyProduct }) => {

  return (
    <div className="box-card">
      {
        typeUser != 1
          ? <Like css="img-card-like" id={id} codigo={code} idDad={idDad} name={name} descuento={descuento} cost={costo} image={image} />
          : <></>
      }

      <div className="card-product">
        <Link href={`/articulo/${id}/${code}`}>
          <a>
            <div className="cart-img">
              <img src={image} alt={name} className="cart-img-img"
              // <img onLoad={e => loadImage(e)} src={image} alt={name} className="cart-img-img"
              />
            </div>
          </a>
        </Link>


        <FamilyProduct familyProduct={familyProduct} idDad={id} codeDad={code} />

        <Link href={`/articulo/${id}/${code}`}>
          <a>
            <div className="card-description">
              <h2>
                {name || "titulo de prueba de los articulos publicados"}
              </h2>
              <div>
                {
                  descuento > 0
                    ?
                    <>
                      <div className="box-price-cart-ofert">
                        <span className="price-cart price-cart-ofert">S/ {costo},<b>00</b></span>
                      </div>
                      <span className="price-cart">S/ {costo - descuento},<b>00</b></span>
                    </>
                    : <span className="price-cart">S/ {costo},<b>00</b></span>
                }

              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  typeUser: state.userReducer.type
})
export default connect(mapStateToProps)(CardProduct)
