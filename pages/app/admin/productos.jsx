import Link from "next/link"
import CardProductBoard from "component/organisms/CardProductBoard"
import { FirstContentBoarad, TwoContentBoarad } from "component/molecules/ContentBoaradProducts"
import { useState, useEffect, createRef, useMemo } from "react"
import Modal from "component/organisms/Modal"
import { toShowModal } from "component/hook/useModal"
import { deleteProduct } from "component/hook/useDelete"
import InputNumber from "component/atoms/InputNumber"
import { queryProductsBoard, removeFilterPubli, searchBoard, searchCodeName } from "component/hook/useQuery"
import { updateDescount } from "component/hook/useUpdate"
import InputSearch from "component/atoms/InputSearch"
import InputSelect from "component/atoms/InputSelect"
import InputCheckbox from "component/atoms/InputCheckbox"
import { useRouter } from "next/router"
import BtnPaginationAdmin from "component/molecules/BtnPaginationAdmin"
import { connect } from "react-redux"
import Private from "component/atoms/Private"
import Image from "next/image"

const modalDescount = createRef()
const modalFiltroBoard = createRef()
const idProduct = createRef()
const refFormFilter = createRef()


const Productos = ({ isLogged, typeUser, filter }) => {
  const router = useRouter()

  const slug = useMemo(() => ({ descuento: 0, pageActual: 1, stock: 0, relevancia: 0, params: [] }), [])
  const pageInit = useMemo(() => ({ pages: 1, pageCurrent: 1 }), [])

  const [products, setProducts] = useState(false)
  const [pages, setPages] = useState(pageInit)
  const [slugFilter, setSlugFilter] = useState(slug)

  useEffect(() => {
    queryProductsBoard(slug, pageInit, setPages, setProducts)
  }, [slug, pageInit])

  if (!isLogged || typeUser != 1) return <Private />
  return (
    <>
      <section id="topPag" className="mw-grid board">
        <div className="top-search-board">
          <div className="box-search-products">
            <InputSearch search={e => searchCodeName(e, setProducts, setPages, refFormFilter.current)} labelText="Filtrar: codigo ó nombre" name="searchBoard" />
            <div>
              <a onClick={() => toShowModal(modalFiltroBoard)}>Filtro avanzado  </a>
              -<a onClick={() => removeFilterPubli(setSlugFilter, refFormFilter.current)}>  Borrar filtros</a>
            </div>
          </div>
          <div className="mw-flex box-btn-new-produt" onClick={() => router.push('nuevo-producto')}>
            <Image
              width={30}
              height={30}
              src={`${process.env.STATIC_PUBLIC}images/mas.svg`}
              alt="nuevo producto"
            />
          </div>
        </div>

        <div className="list-product-board">
          {
            products === false
              ?
              <div className="alert alert-blue">
                <span>Cargando la información, por favor espere...</span>
              </div>
              : products.length === 0
                ?
                <div className="alert alert-yellow">
                  <span>No se encontrarón productos según lo filtrado - </span>
                  <a onClick={() => removeFilterPubli(setSlugFilter, refFormFilter.current)}>  Ver todos los productos</a>
                </div>
                :
                products.map(p => (
                  <CardProductBoard key={p.id} id={p.id} image={p.image[0]} code={p.codigo}>
                    <FirstContentBoarad code={p.codigo} name={p.name} quantity={p.stock} />
                    <TwoContentBoarad price={p.costo} discount={p.descuento} />
                    <>
                      <Link href={`/app/admin/actualizar-producto?id=${p.id}`}>
                        <a>Editar</a>
                      </Link>
                      <a onClick={() => {
                        toShowModal(modalDescount)
                        idProduct.current.value = p.id
                      }}
                      >
                        Descuento
                      </a>
                      <a onClick={() => deleteProduct(p.id, p.name, products, setProducts)}>Eliminar</a>
                    </>
                  </CardProductBoard>
                ))
          }
        </div>
        <div className="pagination">
          {
            products.length === 0
              ? <></>
              : <BtnPaginationAdmin pages={pages} setPages={setPages} slugFilter={slugFilter} setSlugFilter={setSlugFilter} />
          }
        </div>
      </section>

      <Modal name="Agrega o modifica el descuento" typeModal="ModalBasic" referencia={modalDescount}>
        <form className="form-status" onSubmit={e => updateDescount(e, products, setProducts, modalDescount)}>
          <input type="text" ref={idProduct} name="idProduct" className="none" />
          <InputNumber labelText="Agrege un descuento en /S." name="descount" />
          <button className="button" >Agregar descuento</button>
        </form>
      </Modal>

      <Modal name="Filtro de productos avanzado" typeModal="ModalBasic" referencia={modalFiltroBoard}>
        <form className="form-status" ref={refFormFilter} onSubmit={e => searchBoard(e, setSlugFilter, modalFiltroBoard)}>
          <InputSelect onchan labelText="Selecciona el Sexo" name="genero" required={false} >
            <option></option>
            {
              filter.sexo.map(s => <option key={s.id} value={s.id}>{s.name}</option>)
            }
          </InputSelect>
          <InputSelect labelText="Selecciona la linea" name="linea" required={false} >
            <option></option>
            {
              filter.linea.map(s => <option key={s.id} value={s.id}>{s.name}</option>)
            }
          </InputSelect>
          <InputSelect labelText="Selecciona la categoría" name="categoria" required={false} >
            <option></option>
            {
              filter.categorias.map(s => <option key={s.id} value={s.id}>{s.name}</option>)
            }
          </InputSelect>
          <InputSelect labelText="Selecciona la marca" name="marca" required={false} >
            <option></option>
            {
              filter.marcas.map(s => <option key={s.id} value={s.id}>{s.name}</option>)
            }
          </InputSelect>
          <InputCheckbox labelText="Productos con descuento" name="descuento" value="on" required={false} />
          <InputCheckbox labelText="Productos sin stock" name="stock" value="stock" required={false} />
          <button className="button" >Buscar Productos</button>
        </form>
      </Modal>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  typeUser: state.userReducer.dataUser.role,
  filter: state.appState.filters
})

export default connect(mapStateToProps)(Productos)
