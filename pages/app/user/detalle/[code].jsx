
import DataDetailDelivery from "../../../../component/atoms/DataDetailDelivery"
import SummaryBasicDetailSale from "../../../../component/atoms/SummaryBasicDetailSale"
import { ajax } from "../../../../component/hook/Ajax"
import { FirstContentBoarad, TwoContentBoarad } from "../../../../component/molecules/ContentBoaradDetails"
import Help from "../../../../component/molecules/Help"
import CardProductBoard from "../../../../component/organisms/CardProductBoard"
import { connect } from "react-redux"
import Private from "component/atoms/Private"
import BarOptions from "component/molecules/BarOptions"
import Link from "next/link"

const DetailedShopping = ({ sale, isLogged }) => {

  if (!isLogged) return <Private />
  if (sale === false) return <div className="mw-grid"><h2>Ha consultado una factura que no existe</h2></div>
  console.log(sale)
  return (
    <>
      <div className="mw-grid">
        <BarOptions >
          {
            !sale.user.deliveryData.code &&
            <Link href={`/compra/entrega-y-factura?code=${sale.codigo}`}>
              <a>Llenar datos Entrega / Factura</a>
            </Link>
          }
        </BarOptions>
      </div>
      <section className="mw-grid carrito pt box-main-details">
        <div className="details-basic-client">

          <SummaryBasicDetailSale codigo={sale.codigo}
            date={sale.date}
            medioDePago={sale.medioDePago}
            tiketPago={sale.tiketPago}
            total={sale.pagado}
            voucher={sale.voucher}
          />

          <p className="p-title-list-product">Productos comprados:</p>
          {
            sale.products.map((p, i) => (
              <CardProductBoard key={i} id={p.id} image={p.img} >
                <FirstContentBoarad codigo={p.code} name={p.name} size={p.size} />
                <TwoContentBoarad precio={p.costo} quantity={p.quantity} />
              </CardProductBoard>
            ))
          }
        </div>

        <div>
          <DataDetailDelivery billingData={sale.user.billingData} deliveryData={sale.user.deliveryData} />
          <Help />
        </div>
      </section>
      <div className="mw-grid separador"></div>
    </>
  )
}


export async function getServerSideProps({ query }) {
  const code = query.code
  const sale = await ajax(`${process.env.API}/detalleCompra/${code}`)
  let response
  if (sale.data.mensaje) response = false
  else response = sale.data
  return {
    props: { sale: response }
  }
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
})

export default connect(mapStateToProps)(DetailedShopping)
