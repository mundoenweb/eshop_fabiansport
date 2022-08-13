import Like from './atoms/Like'
import { connect } from "react-redux"
import Link from 'next/link'
import Image from 'next/image'

import FamilyProduct from './molecules/familyProduct'
import { useState } from 'react'


const CardProduct = ({
  id, code, name, costo,
  idDad, descuento, image, typeUser,
  familyProduct, idx }) => {

  const [animate, setAnimate] = useState('animete')

  const delteAnimateLoad = () => {
    setAnimate('')
  }
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
            <div className={`cart-img ${animate}`}>
              {
                idx < 4
                  ? <>
                    {/* {console.log(idx)} */}
                    <Image
                      src={image}
                      alt={name}
                      layout='fill'
                      priority
                      onLoadingComplete={delteAnimateLoad}
                      className="cart-img-img"
                    />
                  </>
                  : <Image
                    src={image}
                    alt={name}
                    layout='fill'
                    onLoadingComplete={delteAnimateLoad}
                    className="cart-img-img"
                  />
              }
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
