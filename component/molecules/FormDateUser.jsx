import InputText from "../atoms/InputText"
import InputNumber from "../atoms/InputNumber"
import InputSelect from "../atoms/InputSelect"
import InputCheckbox from "../atoms/InputCheckbox"
import { useEffect } from "react"
import { useAddressOnInvoice } from "../hook/useUpdateProfileUser"
import { connect } from "react-redux"


const FormDateUser = ({ 
  form, 
  user,
  deliveryData,
  invoiceDetailData
}) => {

  const formReset = formulary => formulary.reset()
  useEffect(() => {
    if (user.repeaInBilling) checkRepeatDir.checked = true
    if (user.adult) adult.checked = true
  }, [])

  return (
    <>

      <div className="mw-flex-row header-carrito">
        <h1 className="t2">DATOS DE ENTREGA</h1>
        <a onClick={() =>  formReset(form.current)} >Nuevos datos</a>
      </div>

      <div className="form-profile">
        <InputText labelText="Nombre completo:" name="nameDelivery" value={user.name} />
        <InputText labelText="Departamento" name="departamentDelivery" value={deliveryData.departamento} />
        <InputText labelText="Provincia" name="provinceDelivery" value={deliveryData.provincia} />
        <InputText labelText="Distrito" name="districtDelivery" value={deliveryData.distrito} />
        <InputText labelText="Dirección:" name="addressDelivery" value={deliveryData.direccion} />
        <InputText labelText="Escriba una referencia:" name="refDelivery" value={deliveryData.referencia} />
        <InputNumber labelText="Teléfono" name="phoneDelivery" value={deliveryData.telefono} />

        <InputCheckbox labelText="Usar esta dirección para la facturación"
          id="checkRepeatDir"
          name="repeatAddress"
          css="checkbox-repeat-address"
          required={false}
          fun={e => useAddressOnInvoice(e)} />
      </div>

      <div className="mw-flex-row header-carrito">
        <h1 className="t2">DATOS DE BOLETA O FACTURA</h1>
      </div>

      <div className="form-profile">
        <InputText labelText="Razón Social:" name="nameCompany" value={invoiceDetailData.razon_social} />
        <InputText labelText="Escriba su correo:" name="emailBulling" value={invoiceDetailData.correo || user.email} />

        <InputSelect labelText="Tipo de documento" name="typeDocument" optionDefault={invoiceDetailData.typeDocument} >
          <option value="boleta">boleta</option>
          <option value="factura">factura</option>
        </InputSelect>

        <InputSelect labelText="Tipo de contributente" name="typeContribuyente" optionDefault={invoiceDetailData.tipoContribuyente} >
          <option value="dni">DNI</option>
          <option value="cde">Carnet de Extranjeria</option>
          <option value="ruc">RUC - Solo en caso de factura</option>
        </InputSelect>

        <InputText labelText="DNI / RUC / Carnet de Extranejeria:" name="dni" value={invoiceDetailData.identificacion} />
        <InputText labelText="Escriba su departamento" name="departamentBilling" value={deliveryData.departamento} />
        <InputText labelText="Escriba su provincia" name="provinceBilling" value={deliveryData.provincia} />
        <InputText labelText="Escriba su distrito" name="districtBilling" value={deliveryData.distrito} />
        <InputText labelText="Escriba su dirección:" name="addressBilling" value={deliveryData.direccion} />
        <InputNumber labelText="Teléfono" name="phoneBilling" value={deliveryData.telefono} />

      </div>

      <InputCheckbox id="adult" labelText="Si soy mayor de 18 años" name="adult" required={true} />

      <button className="button">CONTINUAR</button>
    </>
  )
}
const mapStateToProps = state => ({
  user: state.userReducer.dataUser,
  deliveryData: state.userReducer.deliveryData,
  invoiceDetailData: state.userReducer.invoiceDetailData
})

export default connect(mapStateToProps)(FormDateUser)
