import { useState, useEffect, createRef } from 'react'

const texAutor = createRef()

const Presentation = () => {

  const [isPhone, setIsPhone] = useState(null)

  useEffect(() => {
    if (innerWidth < 640) setIsPhone("m")
    else setIsPhone(null)
  }, [])

  useEffect(() => {
    if (isPhone) {
      var navInfo = window.navigator.appVersion.toLowerCase();
      if (navInfo.search("android") >= 1) {
        texAutor.current.style.marginBottom = `70px`
      }
    }
  }, [isPhone])

  return (
    <div className="mw-presetation">
      <img src={`${process.env.STATIC_PUBLIC}images/logo_letras_blancas.svg`}
        alt="logo"
        className="img-logo-banner-home"
      />
      <p ref={texAutor} className="mw-presetation-autor">Desarrollado por: <a href="https://tuemprende.com" target="new"> Tu emprende</a> </p>
    </div>
  )
}

export default Presentation
