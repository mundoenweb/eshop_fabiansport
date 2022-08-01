import { connect } from "react-redux"
import Link from "next/link"
import CardProductBoard from "../../../component/organisms/CardProductBoard"
import Like from "../../../component/atoms/Like"
import Private from "component/atoms/Private"

const Favorites = ({ like, isLogged }) => {

  if (!isLogged) return <Private />

  return (
    <>
      <section className="mw-grid board">
        <h1 className="title-first-board">Mis Favoritos</h1>
        {
          like.length === 0
            ?
            <>
              <div className="alert alert-yellow">
                <span>Demomentos no tienes Favoritos - </span>
                <Link href='/productos/todos'>
                  <a>Consigue aquí tu primer producto ahora</a>
                </Link>
              </div>
            </>
            :
            <div className="list-product-board">
              {
                like.map((p, i) => (
                  <CardProductBoard key={i} id={p.idDad} image={p.img} code={p.codigo}>
                    <>
                    {console.log(p)}
                      <p>{p.name} </p>
                      <div className="box-price-cart-ofert">
                        <span className="price-cart price-cart-ofert">S/ {p.cost},<b>00</b></span>
                      </div>
                      <span className="price-cart">
                        S/ {p.cost - p.descuento},<b>00</b>
                      </span>
                    </>
                    <div className="options-favorites">
                      <Link href={`/articulo/${p.id_producto}/${p.codigo}`}>
                        <a>Comprar ahora</a>
                      </Link>
                      <Like css="img-board-like"
                        idDad={p.idDad}
                        id={p.id_producto}
                        name={p.name}
                        cost={p.costo}
                        image={p.image}
                        codigo={p.codigo}
                        descuento={p.descuento}
                      />
                    </div>
                  </CardProductBoard>
                ))
              }
            </div>
        }

      </section>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  like: state.likeReducer.products,
  isLogged: state.userReducer.logged,
})

export default connect(mapStateToProps)(Favorites)
