import { loadImage } from 'component/hook/useScripts'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { createRef, useEffect, useState } from 'react'

const boxBanner = createRef()
const boxBannerContent = createRef()

const Private = () => {
  const router = useRouter()

  const [isPhone, setIsPhone] = useState(null)

  useEffect(() => {
    function resize() {
      if (innerWidth < 640) setIsPhone("m")
      else setIsPhone(null)
    }

    if (innerWidth < 640) setIsPhone("m")
    addEventListener("resize", resize)

    let redirect = setTimeout(() => {
      router.push("/")
    }, 5000);

    return () => {
      removeEventListener("resize", resize)
      clearTimeout(redirect)
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
    <>
      <NextSeo title={`${process.env.SITE_NAME} | Página Privada`} />
      <div className="banner-home" ref={boxBanner}>
        <img onLoad={e => loadImage(e)}
          loading="lazy"
          className="image-bg-banner-home"
          alt="banner"
          src={`${process.env.STATIC_PUBLIC}images/banners/bg_7${isPhone || ""}.jpg`}
        />
        <div className="cap-bg-img-home"></div>
        <div className="box-content-banner-principal">
          <div className="content-banner-principal-home" ref={boxBannerContent}>
            <img src={`${process.env.STATIC_PUBLIC}images/logo_letras_blancas.svg`}
              alt="logo"
              className="img-logo-banner-home"
            />
            <h1 className="title-err">Pagina Privada</h1> <br/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Private
