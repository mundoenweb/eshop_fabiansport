import InputEmail from 'component/atoms/InputText'
import { useRecoverEmail } from 'component/hook/useRecoverEmail'
import React from 'react'

const componentName = () => {
  return (
    <>
      <div className="mw-grid separador"></div>
      <div className="mw-grid">
        <h1 className="t2">Recuperar clave</h1>
        <form onSubmit={e=> useRecoverEmail(e)} className="form-recuperar-clave">
          <InputEmail labelText="Ingresa tu correo" name="email" title="correo" validateType="email" />
          <button className="button">Recuperar clave</button>
        </form>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export default componentName
