import React, { createRef } from 'react'

const inputUrl = createRef()

const Share = ({ children, urlWeb }) => {

  const copiUrl = (event) => {
    event.preventDefault()
    const link = urlWeb
    navigator.clipboard.writeText(link)
    alert('enlace copiadoaa')
  }

  return (
    <div className="box-share">
      {children ? children : <div></div>}
      
      <a href={`https://api.whatsapp.com/send?text=Mira%20este%20fabuloso%20articulo%20${urlWeb}`}
        target="_blank" rel="noopener noreferrer" className="link-share">
        <img className="img-share" src="/images/ico_whatsapp.svg" title="Compartir en whatsapp" alt="whatsapp" />
      </a>

      <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlWeb}`}
        target="_blank" rel="noopener noreferrer" className="link-share">
        <img className="img-share" src="/images/ico_face.svg" title="Compartir en facebook" alt="facebook" />
      </a>

      <a href={`https://twitter.com/intent/tweet?text=Mira%20este%20fabuloso%20articulo%20&url=${urlWeb}`}
        target="_blank" rel="noopener noreferrer" className="link-share">
        <img className="img-share" src="/images/ico_twitter.svg" title="Compartir en twitter" alt="twitter" />
      </a>

      <a onClick={copiUrl} className="link-share">
        <img className="img-share" src="/images/ico_copy.svg" alt="copy" title="Copiar enlace al portapapeles" />
      </a>
    </div>
  )
}

export default Share
