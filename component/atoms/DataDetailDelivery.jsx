const DataDetailDelivery = ({ billingData, deliveryData }) => {
  return (
    <div className="detail-delivery">
        <ul>
          <li className="t2">Datos de entrega</li>
          <li>Nombre: {deliveryData.name}</li>
          <li>Departamento: {deliveryData.departamento}</li>
          <li>Provincia: {deliveryData.provincia}</li>
          <li>Distrito: {deliveryData.distrito}</li>
          <li>Dirección: {deliveryData.direccion}</li>
          <li>referencia: {deliveryData.referencia}</li>
          <li>Teléfono: {deliveryData.phone}</li>
        </ul>
        <ul>
          <li className="t2">Datos Boleta / Factura</li>
          <li>Nombre: {billingData.razonSocial}</li>
          <li>correo: {billingData.email}</li>
          <li>Tipo de documento: {billingData.typeDocument}</li>
          <li>Tipo de contribuyente: {billingData.tipoContribuyente}</li>
          <li>Documento: {billingData.documentID}</li>
          <li>Departamento: {billingData.departamento}</li>
          <li>Provincia: {billingData.provincia}</li>
          <li>Distrito: {billingData.distrito}</li>
          <li>Dirección: {billingData.direccion}</li>
          <li>Teléfono: {billingData.phone}</li>
        </ul>
      </div>
  )
}

export default DataDetailDelivery
