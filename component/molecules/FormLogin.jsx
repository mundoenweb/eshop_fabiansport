import InputPass from '../atoms/InputPass'
import InputEmail from '../atoms/InputEmail'
import { createRef } from 'react'

const inputPass = createRef()

const FormLogin = () => {

  return (
    <>
      <span>Inicia con tu correo electrónico</span>
      
      <InputEmail validateType="email" />
      <InputPass referencia={inputPass} />      
    </>
  )
}

export default FormLogin
