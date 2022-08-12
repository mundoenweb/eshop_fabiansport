import { handleBuyAndAddtoCart } from '../hook/handleBuyAddCart';
import { useRef, useState } from 'react'
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actionCreators'
import Gallery from '../molecules/Gallery';
import { changueModel } from '../hook/usePageProduct';
import Like from '../atoms/Like';
import Share from '../molecules/Share';
import Help from '../molecules/Help';
import PaymentTypeImage from '../molecules/PaymentTypeImage';
import { useRouter } from 'next/router';
import ButtonBack from 'component/atoms/ButtonBack';
import { useEffect } from 'react';
import Image from 'next/image';



const PageProduct = ({ product, models, cart, idDad, deleteCart, typeUser, currentModel }) => {

  const router = useRouter()
  const formulary = useRef()

  const [urlWeb, seturlWeb] = useState("")

  useEffect(() => {
    seturlWeb(window.location.href)
  }, [])

  return (
    <>
      <div className="nav-product-sale">
        <ButtonBack />
        <Share urlWeb={urlWeb} >
          {
            typeUser != 1
              ? <Like css="img-share"
                idDad={idDad}
                id={product.id}
                name={product.name}
                cost={product.costo}
                image={product.image[0]}
                codigo={product.codigo}
                descuento={product.descuento}
              />
              : <div></div>
          }
        </Share>
      </div>


      <Gallery images={product.image} name={product.name} />


      <div className="card-sale">
        <h1>{product.name}</h1>

        <div className="box-price">
          {
            product.descuento > 0
              ?
              <>
                <div className="box-price-cart-ofert">
                  <span className="price-cart price-cart-ofert">S/ {product.costo},<b>00</b></span>
                </div>
                <span className="price-cart">
                  S/ {product.costo - product.descuento},<b>00</b>
                </span>
              </>
              :
              <span className="price-cart">
                S/ {product.costo},<b>00</b>
              </span>
          }
        </div>

        <form className="from-sale-product"
          onSubmit={e => {
            handleBuyAndAddtoCart(e, formulary, cart, product)
            router.push("/compra/carrito")
          }}
          ref={formulary}
        >
          <label className="label">ELIGE EL COLOR DE TU PREFERENCIA</label>

          <div className='box_image_select_color'>
            {
              models.map((m, i) => (
                m.codigo === product.codigo
                  ? <span key={m.codigo} className=" image_selecet_model model_image_active">
                    <Image
                      width={60}
                      height={50}
                      objectFit='contain'
                      onClick={() => changueModel(product.codigo, m.codigo, idDad, router)}
                      src={m.image}
                      alt={m.codigo}
                      key={i}
                    />
                  </span>
                  : <span key={m.codigo} className=" image_selecet_model">
                  <Image
                    width={60}
                    height={50}
                    objectFit='contain'
                    onClick={() => changueModel(product.codigo, m.codigo, idDad, router)}
                    src={m.image}
                    alt={m.codigo}
                    key={i}
                  />
                </span>
              ))
            }
          </div>

          <label>ELIGE TU TALLA</label>
          <select name="talla" >
            {
              product.sizes.map(s => <option key={s.id} value={s.id} >{s.name}</option>)
            }
          </select>

          <button type="submit" className="button" >COMPRAR</button>
          {
            cart.find(c => c.id === product.id)
              ?
              <a onClick={() => deleteCart(product.id)} className="button button-ghost">BORRAR DEL CARRITO</a>
              :
              <a className="button button-ghost"
                onClick={e => handleBuyAndAddtoCart(e, formulary, cart, product)}
              >
                AGREGAR AL CARRITO
              </a>
          }

        </form>
      </div>

      <div>
        {
          product.descripcion != "" &&
          <>
            <h3>Descripción</h3>
            <p className="product-description">
              {product.descripcion}
            </p>
          </>
        }
        <div>
          {
            product.caracteristicas != "" &&
            <>
              <h4>Carácteristicas</h4>
              <ol className="list-features">
                {
                  product.caracteristicas.split(',')
                    .map(t => t.trim().toLowerCase())
                    .map((t, i) => <li key={i}> {t} </li>)
                }
              </ol>
            </>
          }
        </div>

      </div>
      <div className="product-page-help">
        <Help />
        <PaymentTypeImage />
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  cart: state.carritoReducer.products,
  typeUser: state.userReducer.type
})

const mapDispatchToProps = dispatch => ({
  deleteCart(id) {
    dispatch(removeFromCart({ id }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PageProduct)
