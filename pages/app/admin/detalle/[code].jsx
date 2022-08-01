
import DataDetailDelivery from "../../../../component/atoms/DataDetailDelivery"
import SummaryBasicDetailSale from "../../../../component/atoms/SummaryBasicDetailSale"
import { FirstContentBoarad, TwoContentBoarad } from "../../../../component/molecules/ContentBoaradDetails"
import CardProductBoard from "../../../../component/organisms/CardProductBoard"
import { connect } from "react-redux"
import { ajax } from "../../../../component/hook/Ajax"
import Private from "component/atoms/Private"
import BarOptions from "component/molecules/BarOptions"



const DetailedShopping = ({ sale, isLogged, typeUser }) => {

  if (!isLogged || typeUser != 1) return <Private />
  if (sale === false) return <div className="mw-grid"><h2>Ha consultado una factura que no existe</h2></div>

  return (
    <>
      <div className="mw-grid">
        <BarOptions />
      </div>
      <section className="mw-grid carrito pt box-main-details">
        <div className="details-basic-client">
          <SummaryBasicDetailSale codigo={sale.codigo}
            date={sale.date}
            medioDePago={sale.medioDePago}
            tiketPago={sale.tiketPago}
            total={sale.pagado}
            voucher={sale.voucher}
            idUser={sale.user.id}
          />

          <p className="p-title-list-product">Productos comprados:</p>
          {
            sale.products.map((p, i) => (
              <CardProductBoard key={i} id={p.id} image={p.img} model={0} >
                <FirstContentBoarad codigo={p.code} name={p.name} size={p.size} />
                <TwoContentBoarad precio={p.costo} quantity={p.quantity} />
              </CardProductBoard>
            ))
          }
        </div>

        {
          sale.user.id == 1
            ? <></>
            : <DataDetailDelivery
              billingData={sale.user.billingData}
              deliveryData={sale.user.deliveryData}
            />
        }

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
  typeUser: state.userReducer.dataUser.role
})

export default connect(mapStateToProps)(DetailedShopping)
