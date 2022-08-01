const SummaryBasicDetailSale = ({ codigo, date, medioDePago, tiketPago, total, voucher, idUser }) => {
  return (
    <div className="box-details">
      {
        idUser == 1 && <span> <b>Venta en Tienda</b></span>
      }
      <span>Venta: {codigo}</span>
      <span>Fecha: {date}</span>
      {
        idUser == 1
        ? <></>
        : <span>Tipo de pago: {medioDePago}</span>
      }
      {
        idUser == 1
        ? <></>
        : <span>Recibo del pago: {tiketPago}</span>
      }
      
      <span>Monto Pagado: /S. {total}</span>
      {
        idUser == 1
          ? <></>
          : voucher.includes("paypal") 
            ? <></>
            : <span> <a href={voucher} target="new">Ver Comprobante</a> </span>
      }
    </div >
  )
}

export default SummaryBasicDetailSale
