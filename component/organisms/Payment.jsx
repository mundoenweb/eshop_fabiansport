import PasarelaDePago from 'component/atoms/PasarelaDePago'
import Transfer from 'component/molecules/Transfer'
import { useState } from 'react'

const Payment = () => {

  const [viewPayPal, setViewPayPal] = useState(false)
  const [viewTransfer, setViewTransfer] = useState(false)

  const viewPay = e => {
    const typePay = e.target.id

    if (typePay === 'payPayPal') {
      setViewPayPal(true)
      setViewTransfer(false)
    } else {
      setViewPayPal(false)
      setViewTransfer(true)
    }
  }

  return (
    <>
      <PasarelaDePago />
      {/* <div className="box-main-select-pay">
        <label className="mw-flex label-select-pay" htmlFor="payTransfer">
          <input type="radio"
            name="payment"
            id='payTransfer'
            className="input-radio-pay"
            onChange={e => viewPay(e)}
          />
          Pago con Transferencia
        </label>
      </div> */}

      {viewTransfer && <Transfer />}
    </>
  )
}

export default Payment
