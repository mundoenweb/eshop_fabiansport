import ButtonBack from 'component/atoms/ButtonBack'

const BarOptions = ({ children }) => {
  return (
    <>
      <div className="mw-grid separador"></div>
      <div className="nav-product-sale">
        <ButtonBack />
        {children}
      </div>
    </>
  )
}

export default BarOptions
