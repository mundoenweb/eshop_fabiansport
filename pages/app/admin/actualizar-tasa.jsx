import InputNumber from 'component/atoms/InputNumber'
import Private from 'component/atoms/Private'
import { ajax } from 'component/hook/Ajax'
import { useRequestTasa } from 'component/hook/useRequestTasa'
import { validateForm } from 'component/hook/useValidetForm'
import React from 'react'
import { connect } from 'react-redux'

const componentName = ({ isLogged, typeUser, tasa }) => {

  if (!isLogged || typeUser != 1) return <Private />

  const updateTasa = async e => {
    e.preventDefault()
    const form = e.target
    if (!validateForm(form)) return

    const tasa = { tasa: form.tasa.value, id: 1 }

    const formData = new FormData()
    formData.append('json', JSON.stringify(tasa))

    const response = await ajax(`${process.env.API}/actualizarTasa`, "POST", formData)
    if (response.status != 200) {
      alert("Ops..! hubo un error al actualizar la tasa, intentelo mas tarde")
      return
    }

    useRequestTasa()
    alert("tasa actualizada correctamente")
  }

  return (
    <>
      <div className="mw-grid separador"></div>
      <div className="mw-grid">
        <h1 className="t2">Tasa actual $ / Sol. = {tasa} </h1>
        <form onSubmit={e => updateTasa(e)} className="form-recuperar-clave">
          <InputNumber value={tasa} labelText="Ingresa la nueva tasa" name="tasa" title="tasa" validateType="number" step="0.01" />
          <button className="button">Actualizar Tasa</button>
        </form>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

const mapStateToProps = state => ({
  isLogged: state.userReducer.logged,
  typeUser: state.userReducer.dataUser.role,
  tasa: state.appState.tasa
})

export default connect(mapStateToProps)(componentName)
