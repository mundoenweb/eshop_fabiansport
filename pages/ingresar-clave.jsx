import InputPass from 'component/atoms/InputPass'
import { handleRecoverEmail_2 } from 'component/hook/handleRecoverEmail'
import { useRouter } from 'next/router'
import { createRef } from 'react'

const inputPass = createRef()
const inputPassTwo = createRef()

const UpdatePass = () => {
  const router = useRouter()

  return (
    <>
      <div className="mw-grid separador"></div>
      <div className="mw-grid">
        <h1 className="t2">Digitar Clave</h1>
        <form onSubmit={e => handleRecoverEmail_2(e, router)} className="form-recuperar-clave">
          <InputPass referencia={inputPass} validateType="password" />
          <InputPass referencia={inputPassTwo} labelText="Repetir Contraseña" name="passwordTwo" validateType="password" />
          <button className="button">Recuperar clave</button>
        </form>
      </div>
      <div className="mw-grid separador"></div>
    </>
  )
}

export default UpdatePass
