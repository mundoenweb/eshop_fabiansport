import Link from "next/link"
import CardProductBoard from "../../../component/organisms/CardProductBoard"
import { FirstContentBoarad, TwoContentBoarad } from "../../../component/molecules/ContentBoaradSales"
import { useState, createRef, useEffect } from "react"
import InputText from "../../../component/atoms/InputText"
import Modal from "../../../component/organisms/Modal"
import { toShowModal } from "../../../component/hook/useModal"
import { updateStatusVenta } from "../../../component/hook/useUpdate"
import BtnPaginationAdmin from "../../../component/molecules/BtnPaginationAdmin"
import { useConsultSales } from "../../../component/hook/useQuery"
import { connect } from "react-redux"
import Private from "component/atoms/Private"

const modalStatus = createRef()
const idVenta = createRef()

const Sales = ({ isLogged, typeUser }) => {

  const [sales, setSales] = useState(false)
  const [pages, setPages] = useState({ pages: 1, pageCurrent: 1 })
  const [pagin, setPagin] = useState({ num_page: 1 })



  useEffect(() => {
    if (isLogged) useConsultSales(pagin.num_page, setSales, setPages)
  }, [pagin])

  if (!isLogged || typeUser != 1) return <Private />
  if (sales === false) return (
    <div className="mw-grid">
      <div className="mw-grid separador"></div>
      <div className="alert alert-blue">
        <span>Cargando la información, por favor espere</span>
      </div>
    </div>
  )

  return (
    <>
      {
        sales === undefined
          ?
          <div className="mw-grid">
            <div className="mw-grid separador"></div>
            <div className="alert alert-yellow">
              <span>No hay ventas registradas</span>
            </div>
          </div>
          :
          <>
            <section id="topPag" className="mw-grid board">
              <h1 className="title-first-board">Ventas</h1>

              <div className="list-product-board">
                {
                  sales.map(s => (
                    <CardProductBoard key={s.id} image={s.products[0].img}>
                      <FirstContentBoarad codigo={s.codigo} products={s.products} />
                      <TwoContentBoarad status={s.status} delivery={s.delivery} guia={s.guia} />
                      <>
                        <Link href={`/app/admin/detalle/${s.codigo}`}>
                          <a>Ver detalles</a>
                        </Link>
                        
                        <a onClick={() => {
                          toShowModal(modalStatus)
                          idVenta.current.value = s.id
                        }}
                        >
                          Cambiar estatus
                        </a>
                      </>
                    </CardProductBoard>
                  ))
                }
              </div>

              <BtnPaginationAdmin pages={pages} setPages={setPages} slugFilter={pagin} setSlugFilter={setPagin} />

            </section>

            <Modal name="Cambio estatus de la venta" typeModal="ModalBasic" referencia={modalStatus}>
              <form className="form-status" onSubmit={e => updateStatusVenta(e, sales, setSales, modalStatus)}>
                <input type="text" ref={idVenta} name="idVenta" className="none" />
                <InputText labelText="Tipo de entrega o empresa de envio" name="status" />
                <InputText labelText="Numero de guía" name="guia" />
                <button className="button" >Actualizar Estatus</button>
              </form>
            </Modal>
          </>
      }
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  typeUser: state.userReducer.dataUser.role
})

export default connect(mapStateToProps)(Sales)
