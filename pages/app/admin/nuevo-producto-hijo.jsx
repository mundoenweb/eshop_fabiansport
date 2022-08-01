import Private from "component/atoms/Private"
import InputText from "component/atoms/InputText"
import ButtonFormBasic from "component/atoms/ButtonFormBasic"
import UploadImage from "component/molecules/UploadImage"
import BarOptions from "component/molecules/BarOptions"
import NewColorProduct from "component/molecules/NewColorProduct"
import MultipleSizes from "component/organisms/MultipleSizes"
import { codeUpdate, useNewProduct } from "component/hook/useNewProduct"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useRouter } from "next/router"


const NewProduct = ({ articulo, isLogged, typeUser }) => {
  const router = useRouter()

  useEffect(() => {
    console.log(articulo)
  })
  if (!isLogged || typeUser != 1) return <Private />

  return (
    <>
      <div className="mw-grid">
        <BarOptions />
        <form onSubmit={e => useNewProduct(e, articulo, router)}>
          <div className="form-profile">

            <InputText
              onblur={codeUpdate}
              labelText="Codigo del producto"
              title="codigo"
              name="codigo"
              upperCase={true}
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
