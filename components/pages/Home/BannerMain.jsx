import Link from "next/link"
import { loadImage } from "component/hook/useScripts"
import { useState, useEffect, createRef } from "react"
import { bodyScroll } from "./utils/handleBannerMain"
import Image from "next/image"
import { connect } from "react-redux"


const BannerMain = ({ isPhone }) => {
  const boxBanner = createRef()
  const boxBannerContent = createRef()

  const imgInit = "/images/banners/bg_dsfq.jpg"
  const [img, setImg] = useState(imgInit)

  useEffect(() => {
    const image = Math.floor(Math.random() * (-1 + 9)) + 1
    if (innerWidth < 640) {
      const img = `/images/banners/bg_${image}m.jpg`
      setImg(img)
    }
    else {
      const img = `/images/banners/bg_${image}.jpg`
      setImg(img)
    }
  }, [])

  useEffect(() => {
    var navInfo = window.navigator.appVersion.toLowerCase();
    if (navInfo.search("android") === -1) {
      if (isPhone) {
        const heightCurrent = boxBanner.current.getBoundingClientRect().height
        const heightCurrentContent = boxBanner.current.getBoundingClientRect().height
        boxBanner.current.style.minHeight = `${heightCurrent + 56}px`
        boxBannerContent.current.style.minHeight = `${heightCurrentContent + 56}px`
      }
    }
  }, [boxBanner, boxBannerContent, isPhone])

  const moreHome = () => {
    const heightBanner = boxBanner.current.getBoundingClientRect().height
    bodyScroll(0, heightBanner)
  }

  return (
    <div className="banner-home" ref={boxBanner}>
      <Image
        priority={true}
        layout='fill'
        objectFit="cover"
        className="image-bg-banner-home"
        alt="banner"
        src={img}
      />
      <div className="cap-bg-img-home"></div>
      <div className="box-content-banner-principal">
        <div className="content-banner-principal-home" ref={boxBannerContent}>
          <img src={`${process.env.STATIC_PUBLIC}images/logo_letras_blancas.svg`}
            alt="logo"
            className="img-logo-banner-home"
          />
          <Link href="/productos/todos">
            <a className="button button-white buttom-baner-home">Ver Productos</a>
          </Link>

          <img src="/images/flecha-abajo.svg"
            className="buttom-baner-home-more"
            alt="siguiente"
            onClick={moreHome}
          />

        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isPhone: state.appState.isPhone
})

export default connect(mapStateToProps)(BannerMain)
