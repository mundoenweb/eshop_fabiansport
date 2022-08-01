import { createRef } from 'react'
import InputNumber from "../../component/atoms/InputNumber"
import InputText from "../../component/atoms/InputText"
import InputSelect from "../../component/atoms/InputSelect"
import { usePaymentTransfer } from "../../component/hook/usePayment"
import { useRouter } from 'next/router'
import { connect } from 'react-redux'

const formTdc = createRef()
const listInfoBanck = createRef()
const btnSubmitForm = createRef()
const divNameImage = createRef()

const Transfer = ({total}) => {
  const router = useRouter()

  const changeTypePayment = evt => {
    const indexSelect = evt.target.selectedIndex - 1,
      ul = listInfoBanck.current,
      listLi = listInfoBanck.current.children,
      btn = btnSubmitForm.current

    if (!(indexSelect + 1)) {
      ul.classList.add("none")
      btn.classList.add("none")
      for (const li of listLi) {
        if (!li.classList.contains("none")) li.classList.toggle("none")
      }
      return
    }

    for (const li of listLi) {
      if (li.classList.contains("none")) continue
      li.classList.toggle("none")
    }
    ul.classList.remove("none")
    btn.classList.remove("none")
    listLi[indexSelect].classList.toggle("none")
  }
  const uploadImage = e => {
    const nameImage = e.target.files[0].name
    divNameImage.current.innerText = nameImage
  }

  return (
    <div>
      <div className="alert alert-yellow">
        <span>
          Al comprar en nuestra plataforma usted afirma que es mayor de edad.
        </span>
      </div>
      <form className="form-profile" onSubmit={e => usePaymentTransfer(e, router)} ref={formTdc} >

        <InputSelect labelText="Seleccióna una opcion de pago"
          name="typePayment"
          onchange={changeTypePayment}
        >
          <option></option>
          <option value="Yape">Yape</option>
          <option value="Plin">Plin</option>
          <option value="Transferencia BCP">Transferencia BCP</option>
          <option value="Transferencia BBVA">Transferencia BBVA</option>
          <option value="Transferencia interbancaria BCP">Transferencia Interbancaria BCP</option>
          <option value="Transferencia interbancaria BBVA">Transferencia Interbancaria BBVA</option>
        </InputSelect>

        <ul ref={listInfoBanck} className="ul-info-banco none">
          <li className="mw-flex-row info-banco none">
            <img src="/images/yape.png" alt="yape" />
            <p>
              Tlf: 921163409 <br />
                          Luis Arturo Gil Ramirez
                        </p>
          </li>
          <li className="mw-flex-row info-banco none">
            <img src="/images/plin.png" alt="plin" />
            <p>
              Tlf: 921163409 <br />
                          Luis Arturo Gil Ramirez
                        </p>
          </li>
          <li className="mw-flex-row info-banco none">
            <img src="/images/bcp.jpg" alt="bcp" />
            <p>
              BCP<br />
                          N° 3759858545038 <br />
                          Fabian Sport S.A.C.
                        </p>
          </li>
          <li className="mw-flex-row info-banco none">
            <img src="/images/bbva.jpg" alt="bbva" />
            <p>
              BBVA<br />
                          N° 001102600100068936<br />
                          Fabian Sport S.A.C.
                        </p>
          </li>
          <li className="mw-flex-row info-banco none">
            <img src="/images/bcp.jpg" alt="bcp" />
            <p>
              BCP Interbancaria<br />
                          N° 00237500985854503844 <br />
                          Fabian Sport S.A.C.
                        </p>
          </li>
          <li className="mw-flex-row info-banco none">
            <img src="/images/bbva.jpg" alt="bbva" />
            <p>
              BBVA Interbancaria<br />
                          N° 01126000010006893672<br />
                          Fabian Sport S.A.C.
                        </p>
          </li>
        </ul>

        <InputText title="nombre" labelText="Nombre del titular" name="name" validateType="text" />
        <InputText labelText="Referencia de Pago" name="numberOperation" value="# " />
        <InputNumber title="monto" labelText="Monto Pagado" readOn="true" name="mount" value={total} />

        <label>Fecha de pago
                      <input type="date"
            name="date"
            title="fecha"
            className="required"
          />
          <span className="msgAlertForm"></span>
        </label>

        <div htmlFor="null">Capture del pago
                      <div className="box-uploader">
            <label htmlFor="comprobante" className="button-upload">subir</label>
            <div ref={divNameImage} className="input-value"></div>
            <input onChange={e => uploadImage(e)} className="upload required" type="file" name="image" id="comprobante" />
            <span className="msgAlertForm msg-alert-input-file"></span>
          </div>
        </div>
        <button ref={btnSubmitForm} className="button none btn-finish-cart">Procesar Pago</button>
      </form>

    </div>
  )
}

const mapStateToProps = state => ({
  total: state.carritoReducer.costTotal,
})

export default connect(mapStateToProps)(Transfer)
