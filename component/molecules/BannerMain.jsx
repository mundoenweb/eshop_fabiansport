import { loadImage, useBodyScroll } from "component/hook/useScripts"
import Link from "next/link"
import { useState, useEffect, createRef } from "react"

const boxBanner = createRef()
const boxBannerContent = createRef()

const BannerMain = ({ image }) => {

  const [isPhone, setIsPhone] = useState(null)

  const moreHome = e => {
    const heightBanner = e.target.offsetParent.getBoundingClientRect().height
    useBodyScroll(0, heightBanner)
  }

  useEffect(() => {
    function resize() {
      if (innerWidth < 640) setIsPhone("m")
      else setIsPhone(null)
    }

    resize()
    addEventListener("resize", resize)

    return () => {
      removeEventListener("resize", resize)
    }
  }, [])

  useEffect(() => {
    var navInfo = window.navigator.appVersion.toLowerCase();
    if (navInfo.search("android") == -1) {
      if (isPhone) {
        const heightCurrent = boxBanner.current.getBoundingClientRect().height
        const heightCurrentContent = boxBanner.current.getBoundingClientRect().height
        boxBanner.current.style.minHeight = `${heightCurrent + 56}px`
        boxBannerContent.current.style.minHeight = `${heightCurrentContent + 56}px`
      }
    }
  }, [isPhone])

  return (
    <div className="banner-home" ref={boxBanner}>
      <img onLoad={e => loadImage(e)}
        loading="lazy"
        className="image-bg-banner-home"
        alt="banner"
        src={`${process.env.STATIC_PUBLIC}images/banners/bg_${image}${isPhone || ""}.jpg`}
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
            onClick={(e) => moreHome(e)}
          />

        </div>
      </div>
    </div>
  )
}

export default BannerMain
