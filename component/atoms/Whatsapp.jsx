import { useEffect, useState } from "react"
import { connect } from "react-redux"

const Whatsapp = ({
  role
}) => {

  const [href, setHref] = useState('')


  useEffect(() => {
    const url = window.location.href

    if (url.includes('articulo')) {
      setHref(`https://api.whatsapp.com/send?phone=51958917274&text=${url}%20Hola!%20Estoy%20interesado%20en%20este%20articulo`)
    } else if (url.includes('productos'))
      setHref(`https://api.whatsapp.com/send?phone=51958917274&text=${url}%20Hola!%20Estoy%20interesado%20en%20sus%20productos`)
    else {
      const urlSet = 'https://www.fabiansport.com/'
      setHref(`https://api.whatsapp.com/send?phone=51958917274&text=${urlSet}%20Hola!%20Estoy%20interesado%20en%20sus%20productos`)
    }
  })

  return (
    <>
      {
        role != 1 &&
        <div className="content_whatsapp">
          <a
            href={href}
            target='new'
          >
            <img
              src="/images/whatsapp.svg"
              alt="958917274"
              className="whatsapp_img"
            />
          </a>
        </div>
      }
    </>
  )
}

const mapStateToProps = state => ({
  role: state.userReducer.dataUser.role
})

export default connect(mapStateToProps)(Whatsapp)
