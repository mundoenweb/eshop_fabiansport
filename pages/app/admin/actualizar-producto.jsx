import InputNumber from "../../../component/atoms/InputNumber"
import InputText from "../../../component/atoms/InputText"
import InputTextTarea from "../../../component/atoms/InputTextTarea"
import UploadImage from "../../../component/molecules/UploadImage"
import { connect } from "react-redux"
import { codeDadUpdate, costUpdate, descountUpdate, descriptionUpdate,
  featuresUpdate, nameUpdate, codeUpdate, useUpdateProduct
} from "../../../component/hook/useNewProduct"
import { useRouter } from "next/router"
import BarOptions from "component/molecules/BarOptions"
import MultipleSizes from "component/organisms/MultipleSizes"
import NewColorProduct from "component/molecules/NewColorProduct"
import SelectsFiltersNewProduct from "component/molecules/SelectsFiltersNewProduct"
import Private from "component/atoms/Private"
import ButtonFormBasic from "component/atoms/ButtonFormBasic"
import { useEffect } from "react"
import { ajax } from "component/hook/Ajax"
import store from "redux/store"
import { updateProduct } from "redux/actionCreators"


const NewProduct = ({ articulo, articuloSR, isLogged, typeUser }) => {
  const router = useRouter()

  useEffect(() => {
    if (!articuloSR) {
      alert("el producto que desea actualizar no existe")
      router.push('productos')
    }
    store.dispatch(updateProduct(articuloSR))
  }, [])

  // if (!isLogged || typeUser != 1) return <Private />

  return (
    <>
      <div className="mw-grid">
        <BarOptions />
        <form onSubmit={e => useUpdateProduct(e, articulo, router)}>
          <div className="form-profile">
            <p className="t2 title-form">Registro producto principal</p>

            <InputText
              onblur={(code) => articulo.es_padre === 1
                ? codeDadUpdate(code)
                : codeUpdate(code)
              }
              labelText="Codigo del producto"
              title="codigo"
              name="codigo"
              value={articulo.codigo}
              upperCase={true}
            />

            <InputText
              onblur={nameUpdate}
              title="nombre" labelText="Nombre"
              name="name"
              value={articulo.name}
              upperCase={true}
            />
            <InputNumber
              onblur={costUpdate}
              validateType="moneda"
              title="costo"
              labelText="Costo"
              name="costo"
              value={articulo.costo}
            />
            <InputNumber
              onblur={descountUpdate}
              labelText="Descuento"
              title="descuento"
              name="descuento"
              value={articulo.descuento || "0"}
            />


            <SelectsFiltersNewProduct />


            <InputText
              onblur={featuresUpdate}
              title="caracteristicas"
              name="caracteristicas"
              labelText="Caracteristicas"
              required={false}
              value={articulo.caracteristicas}
            />

            <InputTextTarea
              onblur={descriptionUpdate}
              required={false} title="descripción"
              name="descripcion"
              labelText="Descripcion del Producto"
              cssLabel="texttarea-description-product"
              value={articulo.descripcion}
            />

            <NewColorProduct />
            <MultipleSizes />
            <UploadImage />
          </div>
          <ButtonFormBasic text="PUBLICAR" />
        </form>
      </div>

      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  typeUser: state.userReducer.dataUser.role,
  articulo: state.newProduct
})

export async function getServerSideProps({ query }) {
  let articulo = null
  if (query.id) {
    const res = await ajax(`${process.env.API}/productoDetalle/${query.id}`)
    if (res.data.mensaje) articulo = null
    else articulo = res.data
  }
  return {
    props: { articuloSR: articulo }
  }
}

export default connect(mapStateToProps)(NewProduct)
