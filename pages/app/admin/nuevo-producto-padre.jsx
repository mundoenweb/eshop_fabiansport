import InputNumber from "../../../component/atoms/InputNumber"
import InputText from "../../../component/atoms/InputText"
import InputTextTarea from "../../../component/atoms/InputTextTarea"
import UploadImage from "../../../component/molecules/UploadImage"
import { connect } from "react-redux"
import { codeDadUpdate, costUpdate, descountUpdate, descriptionUpdate,
  featuresUpdate, nameUpdate, handleNewProduct
} from "../../../component/hook/handleNewProduct"
import { useRouter } from "next/router"
import BarOptions from "component/molecules/BarOptions"
import MultipleSizes from "component/organisms/MultipleSizes"
import NewColorProduct from "component/molecules/NewColorProduct"
import SelectsFiltersNewProduct from "component/molecules/SelectsFiltersNewProduct"
import Private from "component/atoms/Private"
import ButtonFormBasic from "component/atoms/ButtonFormBasic"


const NewProduct = ({ articulo, isLogged, typeUser }) => {
  const router = useRouter()


  if (!isLogged || typeUser != 1) return <Private />

  return (
    <>
      <div className="mw-grid">
        <BarOptions />
        <form onSubmit={e => handleNewProduct(e, articulo, router)}>
          <div className="form-profile">
            <p className="t2 title-form">Registro producto principal</p>

            <InputText
              onblur={codeDadUpdate}
              labelText="Codigo del producto"
              title="codigo"
              name="codigo"
              upperCase={true}
            />

            <InputText
              onblur={nameUpdate}
              title="nombre" labelText="Nombre"
              name="name"
              upperCase={true}
            />
            <InputNumber
              onblur={costUpdate}
              validateType="moneda"
              title="costo"
              labelText="Costo"
              name="costo"
            />
            <InputNumber
              onblur={descountUpdate}
              labelText="Descuento"
              title="descuento"
              value="0"
              name="descuento"
            />


            <SelectsFiltersNewProduct />


            <InputText
              onblur={featuresUpdate}
              title="caracteristicas"
              name="caracteristicas"
              labelText="Caracteristicas"
              required={false}
            />

            <InputTextTarea
              onblur={descriptionUpdate}
              required={false} title="descripción"
              name="descripcion"
              labelText="Descripcion del Producto"
              cssLabel="texttarea-description-product"
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

export default connect(mapStateToProps)(NewProduct)
