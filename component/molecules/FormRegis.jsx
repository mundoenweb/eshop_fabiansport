import InputPass from '../atoms/InputPass'
import InputEmail from '../atoms/InputEmail'
import { createRef } from 'react'

const inputPass = createRef()
const inputPassTwo = createRef()


const FormRegis = () => {

  return (
    <>
      <span>Registrate con tu correo electrónico</span>
      
      <InputEmail validateType="email" />
      <InputPass referencia={inputPass} validateType="password" />
      <InputPass referencia={inputPassTwo} labelText="Repetir Contraseña" name="passwordTwo" validateType="password" />
      
    </>
  )
}

export default FormRegis
